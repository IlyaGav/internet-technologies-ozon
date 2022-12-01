import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import {FavoriteSvgModule} from "../favorite-svg/favorite-svg.module";
import {CounterModule} from "../counter/counter.module";



@NgModule({
    declarations: [
        ProductCardComponent
    ],
    exports: [
        ProductCardComponent
    ],
    imports: [
        CommonModule,
        FavoriteSvgModule,
        CounterModule
    ]
})
export class ProductCardModule { }
