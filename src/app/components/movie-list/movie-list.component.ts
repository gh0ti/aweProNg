import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MovieCardComponent} from "../movie-card/movie-card.component";
import {NgForOf} from "@angular/common";
import {FieldsetModule} from "primeng/fieldset";
import {Button} from "primeng/button";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieCardComponent,
    NgForOf,
    FieldsetModule,
    Button
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {

  @Input() movies: Movie[] = [];
  @Input() isEnableAdd: boolean = false;
  @Input() isEnableDelete: boolean = false;

  @Output() addToFavoriteEvt = new EventEmitter<any>();
  @Output() addToWatchListEvt = new EventEmitter<any>();
  @Output() deleteEvt = new EventEmitter<any>();

  addToFavorite(movie: Movie) {
    this.addToFavoriteEvt.emit(movie);
  }

  addToWatchList(movie: Movie) {
    this.addToWatchListEvt.emit(movie);
  }

  delete(movie: Movie) {
    this.deleteEvt.emit(movie);
  }
}
