import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product";
import {CartStorageService} from "../../shared/services/cart-storage.service";
import {map} from "rxjs";
import {CartProductItem} from "../../shared/models/cart-product-item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: CartProductItem[] = [];

  loading: boolean = true;

  constructor(private cartStorageService: CartStorageService) {
  }

  ngOnInit(): void {
    this.cartStorageService.products
      .subscribe(products => {
        this.products = products;
        this.loading = false;
      })
  }
}
