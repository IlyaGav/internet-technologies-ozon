import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from "../modules/shared/components/header/header.module";
import {NavigationModule} from "../modules/shared/components/navigation/navigation.module";
import {FooterModule} from "../modules/shared/components/footer/footer.module";
import {ProductCardModule} from "../modules/shared/components/product-card/product-card.module";
import {FiltersModule} from "../modules/shared/components/filters/filters.module";
import {CatalogModule} from "../modules/shared/components/catalog/catalog.module";
import {CategoryModule} from "../modules/shared/components/category/category.module";
import {MainModule} from "../modules/shared/components/main/main.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    NavigationModule,
    FooterModule,
    ProductCardModule,
    FiltersModule,
    CatalogModule,
    CategoryModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
