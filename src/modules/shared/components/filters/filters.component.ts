import { Component } from '@angular/core';
import {Category} from "../../models/category";
import {CatalogStorageService} from "../../services/catalog-storage.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  categories: Category[] = [];

  constructor(private catalogStorageService: CatalogStorageService) {
  }
  async ngOnInit() {
    this.categories = await this.catalogStorageService.getCategories().toPromise() ?? [];
  }
}
