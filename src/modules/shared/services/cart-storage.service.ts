import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CartProductItem, Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class CartStorageService {

  readonly products: Observable<CartProductItem[]>;
  private _products = new BehaviorSubject<CartProductItem[]>([]);

  constructor() {
    this.products = this._products.asObservable()

    const items = JSON.parse(localStorage.getItem('cart') ?? '[]') as { count: number; id: string }[];
    const products = (JSON.parse(localStorage.getItem('products') ?? '[]') as Product[])

    const cart = items.map(item => ({
      count: item.count,
      product: products.find(p => p.id === item.id)!
    }));

    this._products.next(cart);
  }

  getAll(): CartProductItem[] {
    return this._products.value ?? [];
  }

  getCount(id: string) {
    return this._products.value.find(p => p.product.id == id)?.count ?? 0;
  }

  add(product: Product) {
    let products = this._products.value;

    const exist = products.find(p => p.product.id === product.id);

    if (exist) {
      ++exist.count;
    } else {
      products = [...products, {count: 1, product: product}];
    }

    localStorage.setItem('cart', JSON.stringify(products.map(p => ({count: p.count, id: p.product.id}))));

    this._products.next(products);

  }

  remove(id: string, all: boolean = false) {

    let products = this._products.value;

    const product = products.find(p => p.product.id === id)!;

    if (all || product.count == 1) {
      products = this._products.value.filter(p => p.product.id !== id);
    } else {
      --product.count;
    }

    localStorage.setItem('cart', JSON.stringify(products.map(p => ({count: p.count, id: p.product.id}))));

    this._products.next(products);
  }

}
