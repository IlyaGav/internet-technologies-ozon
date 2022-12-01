import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CartProductItem} from "../models/cart-product-item";
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class CartStorageService {

  readonly products: Observable<CartProductItem[]>;
  private _products = new BehaviorSubject<CartProductItem[]>([]);

  constructor(private httpClient: HttpClient) {
    this.products = this._products.asObservable()

    this.httpClient.get<CartProductItem[]>(`/api/cart`).subscribe(cart => {
      this._products.next(cart);
    });
  }

  getAll(): CartProductItem[] {
    return this._products.value ?? [];
  }

  getCount(id: string) {
    return this._products.value.find(p => p.product.id == id)?.count ?? 0;
  }

  add(product: Product) {
    this.httpClient.post(`/api/cart/${product.id}`, null).subscribe(() => {
      let products = this._products.value;

      const exist = products.find(p => p.product.id === product.id);

      if (exist) {
        ++exist.count;
      } else {
        products = [...products, {count: 1, product: product}];
      }

      this._products.next(products);
    });
  }

  remove(id: string, all: boolean = false) {

    this.httpClient.delete(`/api/cart/${id}?all=${all}`).subscribe(() => {

      let products = this._products.value;

      const product = products.find(p => p.product.id === id)!;

      if (all || product.count == 1) {
        products = this._products.value.filter(p => p.product.id !== id);
      } else {
        --product.count;
      }

      this._products.next(products);
    });
  }

}
