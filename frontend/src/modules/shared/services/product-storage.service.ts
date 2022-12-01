import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Product} from "../models/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor(private httpClient: HttpClient) {
  }

  get(categoryId: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`/api/products?catId=${categoryId}`)
  }
}
