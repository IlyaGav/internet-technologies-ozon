import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import {CartProductItemModule} from "../../shared/components/cart-product-item/cart-product-item.module";



@NgModule({
  declarations: [
    CartComponent
  ],
    imports: [
        CommonModule,
        CartProductItemModule
    ]
})
export class CartModule { }
