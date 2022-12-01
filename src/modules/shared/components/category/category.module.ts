import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import {FiltersModule} from "../filters/filters.module";
import {ProductCardModule} from "../product-card/product-card.module";



@NgModule({
  declarations: [
    CategoryComponent
  ],
  exports: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FiltersModule,
    ProductCardModule
  ]
})
export class CategoryModule { }
