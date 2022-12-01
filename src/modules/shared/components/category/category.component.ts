import {Component} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  get products(): Product[] {
    return [
      {
        name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
        price: '1 836 ₽',
        srcImg: 'https://cdn1.ozone.ru/s3/multimedia-y/wc250/6015389854.jpg'
      },
      {
        name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
        price: '1 836 ₽',
        srcImg: 'https://cdn1.ozone.ru/s3/multimedia-y/wc250/6015389854.jpg'
      },
      {
        name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
        price: '1 836 ₽',
        srcImg: 'https://cdn1.ozone.ru/s3/multimedia-e/wc250/6348784286.jpg'
      },
      {
        name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
        price: '1 836 ₽',
        srcImg: 'https://cdn1.ozone.ru/s3/multimedia-e/wc250/6348784286.jpg'
      },
      {
        name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
        price: '1 836 ₽',
        srcImg: 'https://cdn1.ozone.ru/s3/multimedia-y/wc250/6015389854.jpg'
      },
      {
        name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
        price: '1 836 ₽',
        srcImg: 'https://cdn1.ozone.ru/s3/multimedia-e/wc250/6348784286.jpg'
      }, {
        name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
        price: '1 836 ₽',
        srcImg: 'https://cdn1.ozone.ru/s3/multimedia-y/wc250/6015389854.jpg'
      },
      {
        name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
        price: '1 836 ₽',
        srcImg: 'https://cdn1.ozone.ru/s3/multimedia-y/wc250/6015389854.jpg'
      },
      {
        name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
        price: '1 836 ₽',
        srcImg: 'https://cdn1.ozone.ru/s3/multimedia-e/wc250/6348784286.jpg'
      }, {
        name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
        price: '1 836 ₽',
        srcImg: 'https://cdn1.ozone.ru/s3/multimedia-y/wc250/6015389854.jpg'
      },
      {
        name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
        price: '1 836 ₽',
        srcImg: 'https://cdn1.ozone.ru/s3/multimedia-y/wc250/6015389854.jpg'
      },
      {
        name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
        price: '1 836 ₽',
        srcImg: 'https://cdn1.ozone.ru/s3/multimedia-e/wc250/6348784286.jpg'
      }, {
        name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
        price: '1 836 ₽',
        srcImg: 'https://cdn1.ozone.ru/s3/multimedia-y/wc250/6015389854.jpg'
      },

    ]
  }

}
