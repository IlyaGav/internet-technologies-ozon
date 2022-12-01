import {Component, OnInit} from '@angular/core';
import {CatalogStorageService} from "../../shared/services/catalog-storage.service";
import {Category} from "../../shared/models/category";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  categories: Category[] = [];

  constructor(private catalogStorageService: CatalogStorageService) {
  }

  async ngOnInit() {
    this.categories = await this.catalogStorageService.getCategories().toPromise() ?? [];
  }

}
