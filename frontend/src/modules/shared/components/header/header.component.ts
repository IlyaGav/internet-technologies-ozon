import {Component, OnInit} from '@angular/core';
import {FavoritesStorageService} from "../../services/favorites-storage.service";
import {map} from "rxjs";
import {CartStorageService} from "../../services/cart-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  get countFavorites() {
    return this.favoritesStorageService.favorites.pipe(map(p => p?.length ?? 0));
  }

  get countCart() {
    return this.cartStorageService.products
      .pipe(map(p => p?.reduce((partialSum, a) => partialSum + a.count, 0) ?? 0));
  }

  constructor(private favoritesStorageService: FavoritesStorageService,
              private cartStorageService: CartStorageService) {
  }

  ngOnInit(): void {
  }

}
