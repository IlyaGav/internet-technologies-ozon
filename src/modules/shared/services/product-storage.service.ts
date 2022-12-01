import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor() {
    localStorage.setItem('products', JSON.stringify(products));
  }

  get(categoryId: string): Observable<Product[]> {
    return of((JSON.parse(localStorage.getItem('products') ?? '') as Product[])
      .filter(p => p.catId === categoryId));
  }

}

const products: Product[] = [
    {
      id: '0',
      name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
      price: '1 836 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-y/wc250/6015389854.jpg',
      catId: 'elektronika'
    },
    {
      id: '1',
      name: 'Смартфон Xiaomi Redmi Note 11S 6/128 ГБ, черный',
      price: '17 639 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-b/wc500/6294684563.jpg',
      catId: 'elektronika'
    },
    {
      id: '2',
      name: 'Планшет Samsung Galaxy Tab A7 Lite LTE, 8.7", 32GB, темно-серый',
      price: '11 001 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-q/wc500/6157189346.jpg',
      catId: 'elektronika'
    },
    {
      id: '3',
      name: '14" Ноутбук HP 14s-dq3002ur, Intel Celeron N4500 (1.1 ГГц), RAM 4 ГБ, SSD 128 ГБ, Intel UHD Graphics, Windows Home, (3E7Y2EA), Российская клавиатура',
      price: '22 397 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-9/wc500/6074767365.jpg',
      catId: 'elektronika'
    },
    {
      id: '4',
      name: '15,6" Ноутбук MAIBENBEN M547, AMD Ryzen 7 4700U (2.0 ГГц), RAM 8 ГБ, SSD 512 ГБ, AMD Radeon, Без системы, серебристый, Российская клавиатура',
      price: '45 084 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-u/wc500/6476534118.jpg',
      catId: 'elektronika'
    },
    {
      id: '5',
      name: 'Беспроводные наушники PRO 5 с микрофоном для Айфон и Андроид, tws, Bluetooth, Iphone, Android',
      price: '447 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-s/wc500/6400331404.jpg',
      catId: 'elektronika'
    },
    {
      id: '6',
      name: 'Наушники беспроводные TurboSky WH-02 BLUE. Гарнитура bluetooth TurboSky TurboSky WH-02 BLUE. ',
      price: '390 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-l/wc500/6068909529.jpg',
      catId: 'elektronika'
    },
    {
      id: '7',
      name: 'Колонка портативная / беспроводная колонка Defender G98 5Вт, bluetooth/FM/TF/USB/AUX',
      price: '625 ₽\n',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-l/wc1000/6413617809.jpg',
      catId: 'elektronika'
    },
    {
      id: '8',
      name: 'Клавиатура для компьютера беспроводная Defender Element, черный, мультимедиа',
      price: '423 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-5/wc500/6196168073.jpg',
      catId: 'elektronika'
    },
    {
      id: '9',
      name: 'Беспроводные True Wireless внутриканальные наушники Xiaomi Redmi Buds 3 Lite с микрофоном,',
      price: '1 325 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-z/wc500/6246112199.jpg',
      catId: 'elektronika'
    },
    {
      id: '10',
      name: '14,2" Ноутбук Apple MacBook Pro (Z15G000CR)',
      price: '655 853 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-2/wc500/6308470682.jpg',
      catId: 'elektronika'
    },
    {
      id: '11',
      name: 'Квадрокоптер DJI Mavic 2 Enterprise Advanced (Universal Edition)',
      price: '529 012 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-9/wc500/6452182617.jpg',
      catId: 'elektronika'
    },
    {
      id: '12',
      name: '15,6" Игровой ноутбук MSI GS66 Stealth 11UH-252RU (9S7-16V412-252), Intel Core i7-11800H (4.6 ГГц)',
      price: '389 022 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-t/wc500/6335558873.jpg',
      catId: 'elektronika'
    },
    {
      id: '13',
      name: 'Процессор Intel Xeon Kaby Lake E7-8867V4 18-core 2,4GHz 45MB LGA2011 E7-8867 V4 OEM (без кулера)',
      price: '353 244 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-8/wc500/6060374816.jpg',
      catId: 'elektronika'
    },
    {
      id: '14',
      name: 'Материнская плата SuperMicro MBD-C9Z490-PGW-O',
      price: '101 303 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-m/wc500/6359627386.jpg',
      catId: 'elektronika'
    },
    {
      id: '15',
      name: 'Сковорода с керамической крышкой Ceraflame Hammered, 24 см, цвет медный',
      price: '6 471 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-a/wc1000/6190236358.jpg',
      catId: 'dom-i-sad'
    },
    {
      id: '16',
      name: 'Кастрюля Kukmara Традиция, Стекло, Алюминий, 3 л',
      price: '1 343 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-k/wc1000/6088896260.jpg',
      catId: 'dom-i-sad'
    },
    {
      id: '17',
      name: 'Сковорода глубокая с усиленным антипригарным покрытием и индукцией Moulin',
      price: '1 117 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-y/wc1000/6426045094.jpg',
      catId: 'dom-i-sad'
    },
    {
      id: '18',
      name: 'Кастрюля Appetite, Нержавеющая сталь, 3,4 л',
      price: '1 190 ₽',
      srcImg: 'https://cdn1.ozone.ru/multimedia/wc1000/1018620052.jpg',
      catId: 'dom-i-sad'
    },
    {
      id: '19',
      name: 'Набор посуды для приготовления Rondell "Strike"',
      price: '7 059 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-d/wc1000/6464782441.jpg',
      catId: 'dom-i-sad'
    },
    {
      id: '20',
      name: 'Форма для запекания 2в1 керамика',
      price: '6 758 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-q/wc1000/6149884514.jpg',
      catId: 'dom-i-sad'
    },
    {
      id: '21',
      name: 'Сотейник GIPFEL ECO 51022 26см',
      price: '4 597 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-v/wc1000/6340954195.jpg',
      catId: 'dom-i-sad'
    },
    {
      id: '22',
      name: 'Набор посуды Tefal Ingenio RED, с антипригарным покрытием',
      price: '5 817 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-h/wc1000/6400682969.jpg',
      catId: 'dom-i-sad'
    },
    {
      id: '23',
      name: 'Набор кастрюль SATOSHI Рокруа 12пр GS-01222-12PC',
      price: '4 498 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-h/wc1000/6088896401.jpg',
      catId: 'dom-i-sad'
    },
    {
      id: '24',
      name: 'Кухонный ковш',
      price: '6 840 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-9/wc1000/6474653817.jpg',
      catId: 'dom-i-sad'
    },
    {
      id: '25',
      name: 'Кухонный ковш',
      price: '6 840 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-9/wc1000/6474653817.jpg',
      catId: '0'
    },
    {
      id: '26',
      name: 'Увлажнитель воздуха Deerma DEM-F600 v.2, белый',
      price: '1 836 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-y/wc250/6015389854.jpg',
      catId: '0'
    },
    {
      id: '27',
      name: 'Смартфон Xiaomi Redmi Note 11S 6/128 ГБ, черный',
      price: '17 639 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-b/wc500/6294684563.jpg',
      catId: '0'
    },
    {
      id: '28',
      name: 'Планшет Samsung Galaxy Tab A7 Lite LTE, 8.7", 32GB, темно-серый',
      price: '11 001 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-q/wc500/6157189346.jpg',
      catId: '0'
    },
    {
      id: '29',
      name: '14" Ноутбук HP 14s-dq3002ur, Intel Celeron N4500 (1.1 ГГц), RAM 4 ГБ, SSD 128 ГБ, Intel UHD Graphics, Windows Home, (3E7Y2EA), Российская клавиатура',
      price: '22 397 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-9/wc500/6074767365.jpg',
      catId: '0'
    },
    {
      id: '30',
      name: '15,6" Ноутбук MAIBENBEN M547, AMD Ryzen 7 4700U (2.0 ГГц), RAM 8 ГБ, SSD 512 ГБ, AMD Radeon, Без системы, серебристый, Российская клавиатура',
      price: '45 084 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-u/wc500/6476534118.jpg',
      catId: '0'
    },
    {
      id: '31',
      name: 'Беспроводные наушники PRO 5 с микрофоном для Айфон и Андроид, tws, Bluetooth, Iphone, Android',
      price: '447 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-s/wc500/6400331404.jpg',
      catId: '0'
    },
    {
      id: '32',
      name: 'Наушники беспроводные TurboSky WH-02 BLUE. Гарнитура bluetooth TurboSky TurboSky WH-02 BLUE. ',
      price: '390 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-l/wc500/6068909529.jpg',
      catId: '0'
    },
    {
      id: '33',
      name: 'Колонка портативная / беспроводная колонка Defender G98 5Вт, bluetooth/FM/TF/USB/AUX',
      price: '625 ₽\n',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-l/wc1000/6413617809.jpg',
      catId: '0'
    },
    {
      id: '34',
      name: 'Клавиатура для компьютера беспроводная Defender Element, черный, мультимедиа',
      price: '423 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-5/wc500/6196168073.jpg',
      catId: '0'
    },
    {
      id: '35',
      name: 'Беспроводные True Wireless внутриканальные наушники Xiaomi Redmi Buds 3 Lite с микрофоном,',
      price: '1 325 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-z/wc500/6246112199.jpg',
      catId: '0'
    },
    {
      id: '36',
      name: '14,2" Ноутбук Apple MacBook Pro (Z15G000CR)',
      price: '655 853 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-2/wc500/6308470682.jpg',
      catId: '0'
    },
    {
      id: '37',
      name: 'Квадрокоптер DJI Mavic 2 Enterprise Advanced (Universal Edition)',
      price: '529 012 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-9/wc500/6452182617.jpg',
      catId: '0'
    },
    {
      id: '38',
      name: '15,6" Игровой ноутбук MSI GS66 Stealth 11UH-252RU (9S7-16V412-252), Intel Core i7-11800H (4.6 ГГц)',
      price: '389 022 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-t/wc500/6335558873.jpg',
      catId: '0'
    },
    {
      id: '39',
      name: 'Процессор Intel Xeon Kaby Lake E7-8867V4 18-core 2,4GHz 45MB LGA2011 E7-8867 V4 OEM (без кулера)',
      price: '353 244 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-8/wc500/6060374816.jpg',
      catId: '0'
    },
    {
      id: '40',
      name: 'Материнская плата SuperMicro MBD-C9Z490-PGW-O',
      price: '101 303 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-m/wc500/6359627386.jpg',
      catId: '0'
    },
    {
      id: '41',
      name: 'Сковорода с керамической крышкой Ceraflame Hammered, 24 см, цвет медный',
      price: '6 471 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-a/wc1000/6190236358.jpg',
      catId: '0'
    },
    {
      id: '42',
      name: 'Кастрюля Kukmara Традиция, Стекло, Алюминий, 3 л',
      price: '1 343 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-k/wc1000/6088896260.jpg',
      catId: '0'
    },
    {
      id: '43',
      name: 'Сковорода глубокая с усиленным антипригарным покрытием и индукцией Moulin',
      price: '1 117 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-y/wc1000/6426045094.jpg',
      catId: '0'
    },
    {
      id: '44',
      name: 'Кастрюля Appetite, Нержавеющая сталь, 3,4 л',
      price: '1 190 ₽',
      srcImg: 'https://cdn1.ozone.ru/multimedia/wc1000/1018620052.jpg',
      catId: '0'
    },
    {
      id: '45',
      name: 'Набор посуды для приготовления Rondell "Strike"',
      price: '7 059 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-d/wc1000/6464782441.jpg',
      catId: '0'
    },
    {
      id: '46',
      name: 'Форма для запекания 2в1 керамика',
      price: '6 758 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-q/wc1000/6149884514.jpg',
      catId: '0'
    },
    {
      id: '47',
      name: 'Сотейник GIPFEL ECO 51022 26см',
      price: '4 597 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-v/wc1000/6340954195.jpg',
      catId: '0'
    },
    {
      id: '48',
      name: 'Набор посуды Tefal Ingenio RED, с антипригарным покрытием',
      price: '5 817 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-h/wc1000/6400682969.jpg',
      catId: '0'
    },
    {
      id: '48',
      name: 'Набор кастрюль SATOSHI Рокруа 12пр GS-01222-12PC',
      price: '4 498 ₽',
      srcImg: 'https://cdn1.ozone.ru/s3/multimedia-h/wc1000/6088896401.jpg',
      catId: '0'
    }
  ]
;
