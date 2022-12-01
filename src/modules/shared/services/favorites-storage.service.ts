import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, skip,} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class FavoritesStorageService {
  readonly favorites: Observable<Product[]>;
  private _favorites = new BehaviorSubject<Product[]>([]);

  constructor() {
    this.favorites = this._favorites.asObservable();

    const ids = JSON.parse(localStorage.getItem('favorites') ?? '[]') as string[];
    const favorites = (JSON.parse(localStorage.getItem('products') ?? '[]') as Product[])
      .filter(p => ids.includes(p.id));

    this._favorites.next(favorites);
  }

  get(): Product[] {
    return this._favorites.value ?? [];
  }

  toggle(product: Product) {

    let favorites: Product[] | undefined;

    if (this.isFavorite(product.id)) {
      favorites = (this._favorites.value ?? []).filter(p => p.id !== product.id);
    } else {
      favorites = [...(this._favorites.value ?? []), product];
    }

    localStorage.setItem('favorites', JSON.stringify(favorites.map(p => p.id)));

    this._favorites.next(favorites)
  }

  isFavorite(id: string): boolean {
    return this._favorites.value?.map(p => p.id).includes(id) ?? false;
  }
}
