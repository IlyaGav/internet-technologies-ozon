import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {FavoritesStorageService} from "../../services/favorites-storage.service";
import {CartStorageService} from "../../services/cart-storage.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  get isFavorite() {
    return this.favoritesStorageService.isFavorite(this.product.id);
  }

  get count() {
    return this.cartStorageService.getCount(this.product.id);
  }

  constructor(public favoritesStorageService: FavoritesStorageService,
              public cartStorageService: CartStorageService) {
  }

  ngOnInit(): void {
  }

  add() {
    this.cartStorageService.add(this.product);
  }

  increment() {
    this.cartStorageService.add(this.product);
  }

  decrement() {
    this.cartStorageService.remove(this.product.id);
  }
}
