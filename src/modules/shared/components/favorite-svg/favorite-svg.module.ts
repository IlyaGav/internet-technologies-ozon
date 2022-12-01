import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteSvgComponent } from './favorite-svg.component';



@NgModule({
    declarations: [
        FavoriteSvgComponent
    ],
    exports: [
        FavoriteSvgComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FavoriteSvgModule { }
