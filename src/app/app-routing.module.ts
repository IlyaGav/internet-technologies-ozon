import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "../modules/pages/main/main.component";
import {CatalogComponent} from "../modules/pages/catalog/catalog.component";
import {CategoryComponent} from "../modules/pages/category/category.component";
import {FavoritesComponent} from "../modules/pages/favorites/favorites.component";
import {CartComponent} from "../modules/pages/cart/cart.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('src/modules/pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'category',
    component: CatalogComponent,
    loadChildren: () => import('src/modules/pages/catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path: 'category/:id',
    component: CategoryComponent,
    loadChildren: () => import('src/modules/pages/category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    loadChildren: () => import('src/modules/pages/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'cart',
    component: CartComponent,
    loadChildren: () => import('src/modules/pages/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
