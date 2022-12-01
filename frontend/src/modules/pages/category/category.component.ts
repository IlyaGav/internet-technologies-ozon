import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product";
import {ProductStorageService} from "../../shared/services/product-storage.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  products: Product[] = [];

  id: string = '';

  loading: boolean = true;

  constructor(route: ActivatedRoute,
              private productStorageService: ProductStorageService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productStorageService.get(this.id)
      .subscribe(products => {
        this.products = products;
        this.loading = false;
      })
  }

}
