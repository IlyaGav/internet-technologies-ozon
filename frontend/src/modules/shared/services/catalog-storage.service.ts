import {Injectable} from '@angular/core';
import {Category} from "../models/category";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatalogStorageService {

  constructor(private httpClient: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`/api/categories`);
  }
}
