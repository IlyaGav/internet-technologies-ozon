import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';



@NgModule({
    declarations: [
        CatalogComponent
    ],
    exports: [
        CatalogComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CatalogModule { }
