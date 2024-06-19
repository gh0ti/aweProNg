import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  @Input() movie: any;
  @Output() addToFavoriteEvt = new EventEmitter<any>();
  @Output() addToWatchListEvt = new EventEmitter<any>();

  addToFavorite(movie: any) {
    this.addToFavoriteEvt.emit(movie);
  }

  addToWatchList(movie: any) {
    this.addToWatchListEvt.emit(movie);
  }

}
