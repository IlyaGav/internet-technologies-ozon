import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product";
import {FavoritesStorageService} from "../../shared/services/favorites-storage.service";
import {first} from "rxjs";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  products: Product[] = [];

  loading: boolean = true;

  constructor(private favoritesStorageService: FavoritesStorageService) {
  }

  ngOnInit(): void {
    this.favoritesStorageService.favorites
      .pipe(first(products => products.length > 0))
      .subscribe(products => {
        this.products = products;
        this.loading = false;
      })
  }

}
