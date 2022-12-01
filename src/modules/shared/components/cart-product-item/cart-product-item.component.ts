import {Component, Input} from '@angular/core';
import {CartProductItem} from "../../models/product";
import {CartStorageService} from "../../services/cart-storage.service";

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.scss']
})
export class CartProductItemComponent {
  @Input() item!: CartProductItem;

  constructor(private cartStorageService: CartStorageService) {
  }

  countChange() {
    this.cartStorageService.add(this.item.product)
  }

  increment() {
    this.cartStorageService.add(this.item.product)
  }

  decrement() {
    this.cartStorageService.remove(this.item.product.id, false);
  }

  remove() {
    this.cartStorageService.remove(this.item.product.id, true);
  }
}
