import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../models/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FavoritesStorageService {
  readonly favorites: Observable<Product[]>;
  private _favorites = new BehaviorSubject<Product[]>([]);

  constructor(private httpClient: HttpClient) {
    this.favorites = this._favorites;

    this.httpClient.get<Product[]>(`/api/favorite`).subscribe(favorites => {
      this._favorites.next(favorites);
    });
  }

  get(): Product[] {
    return this._favorites.value ?? [];
  }

  toggle(product: Product) {

    this.httpClient.post(`/api/favorite/toggle/${product.id}`, null).subscribe(() => {
      let favorites: Product[] | undefined;

      if (this.isFavorite(product.id)) {
        favorites = (this._favorites.value ?? []).filter(p => p.id !== product.id);
      } else {
        favorites = [...(this._favorites.value ?? []), product];
      }

      this._favorites.next(favorites);
    });
  }

  isFavorite(id: string): boolean {
    return this._favorites.value?.map(p => p.id).includes(id) ?? false;
  }
}
