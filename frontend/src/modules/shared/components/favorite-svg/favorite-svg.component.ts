import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-favorite-svg',
  templateUrl: './favorite-svg.component.html',
  styleUrls: ['./favorite-svg.component.scss']
})
export class FavoriteSvgComponent {
  @Input() isFavorite: boolean = false;

}
