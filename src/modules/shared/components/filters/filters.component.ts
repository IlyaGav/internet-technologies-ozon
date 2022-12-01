import { Component } from '@angular/core';
import {Category} from "../../models/category";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  get categories(): Category[] {
    return [
      {
        id: '0',
        name: 'Бытовая техника'
      },
      {
        id: '1',
        name: 'Дом и сад'
      },
      {
        id: '2',
        name: 'Детские товары'
      },
      {
        id: '3',
        name: 'Электроника'
      },
      {
        id: '4',
        name: 'Аптека'
      },
      {
        id: '1',
        name: 'Одежда'
      },
      {
        id: '1',
        name: 'Строительсво и ремонт'
      },
      {
        id: '1',
        name: 'Туризм, рыбалка, охота'
      },
      {
        id: '1',
        name: 'Красота и здоровье'
      },
      {
        id: '1',
        name: 'Бытовая химия и гигиена'
      },
      {
        id: '1',
        name: 'Автотовары'
      },
      {
        id: '1',
        name: 'Товары для животных'
      },
      {
        id: '1',
        name: 'Хобби и творчество'
      },
      {
        id: '1',
        name: 'Канцелярские товары'
      },
    ]
  }
}
