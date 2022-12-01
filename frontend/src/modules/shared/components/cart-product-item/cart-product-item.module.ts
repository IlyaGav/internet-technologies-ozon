import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProductItemComponent } from './cart-product-item.component';
import {CounterModule} from "../counter/counter.module";



@NgModule({
    declarations: [
        CartProductItemComponent
    ],
    exports: [
        CartProductItemComponent
    ],
  imports: [
    CommonModule,
    CounterModule
  ]
})
export class CartProductItemModule { }
