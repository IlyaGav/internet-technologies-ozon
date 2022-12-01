import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from './category.component';
import {FiltersModule} from "../../shared/components/filters/filters.module";
import {ProductCardModule} from "../../shared/components/product-card/product-card.module";


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
export class CategoryModule {
}
