import {Injectable} from '@angular/core';
import {Category} from "../models/category";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogStorageService {

  constructor() {
    localStorage.setItem('categories', JSON.stringify(categories));
  }

  getCategories(): Observable<Category[]> {
    return of(JSON.parse(localStorage.getItem('categories') ?? ''));
  }
}

const categories: Category[] = [
  {
    id: 'elektronika',
    name: 'Электроника',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/47/t4c/wc250/elektronika.png'
  },
  {
    id: 'dom-i-sad',
    name: 'Дом и сад',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/7e/te1/wc250/dom_i_sad.png'
  },
  {
    id: '0',
    name: 'Детские товары',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/8c/t8e/wc250/detskiya_tovary.png'
  },
  {
    id: '0',
    name: 'Одежда, обувь и аксессуары',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/fc/t49/wc250/odejda.png'
  },
  {
    id: '0',
    name: 'Аптека',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/b8/ta5/wc250/apteka.png'
  },
  {
    id: '0',
    name: 'Бытовая техника',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/15/tce/wc250/bytovaya_tehnika.png'
  },
  {
    id: '0',
    name: 'Книги',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/12/t59/wc250/knigi.png'
  },
  {
    id: '0',
    name: 'Строительсво и ремонт',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/b4/t03/wc250/stroitelstvo_i_remont.png'
  },
  {
    id: '0',
    name: 'Красота и здоровье',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/71/t07/wc250/krasota.png'
  },
  {
    id: '0',
    name: 'Спортивные товары',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/56/t3b/wc250/sport.png'
  },
  {
    id: '0',
    name: 'Товары для животных',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/cf/te3/wc250/dlya_jivotnyh.png'
  },
  {
    id: '0',
    name: 'Продукты питания',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/b1/t2f/wc250/producty_pitaniya.png'
  },
  {
    id: '0',
    name: 'Автотовары',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/7d/tc8/wc250/autotovary.png'
  },
  {
    id: '0',
    name: 'Товары для взрослых',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/5c/t9b/wc250/dlya_vzroslyh.png'
  },
  {
    id: '0',
    name: 'Туризм, рыбалка, охота',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/d5/tc2/wc250/tyrism_ohota_i_rybalka.png'
  },
  {
    id: '0',
    name: 'Все для игр',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/c0/t0c/wc250/dse_dlya_igr.png'
  },
  {
    id: '0',
    name: 'Мебель',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/be/tc2/wc250/mebel.png'
  },
  {
    id: '0',
    name: 'Бытовая химия',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/0c/t28/wc250/bytovaya_himiya.png'
  },
  {
    id: '0',
    name: 'Ювелирные украшения',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/b7/teb/wc250/uvelirka.png'
  },
  {
    id: '0',
    name: 'Цифровые товары',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/4b/tcd/wc500/chifroviya.png'
  },
  {
    id: '0',
    name: 'Антиквариат и коллекционирование',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/a6/td6/wc250/antikvariat.png'
  },
  {
    id: '0',
    name: 'Канцелярские товары',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/9e/t8e/wc250/kantstovary.png'
  },
  {
    id: '0',
    name: 'Хобби и творчество',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/bb/ta7/wc250/hobbi.png'
  },
  {
    id: '0',
    name: 'Музыка и видео',
    srcImg: 'https://cdn1.ozone.ru/s3/cms/6a/tde/wc250/musika_i_video.png'
  }
];
