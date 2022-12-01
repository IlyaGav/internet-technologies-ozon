import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import {ProductCardModule} from "../../shared/components/product-card/product-card.module";



@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    ProductCardModule
  ]
})
export class FavoritesModule { }
