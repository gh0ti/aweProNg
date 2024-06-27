import {Component, OnInit} from '@angular/core';
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {movies} from "../../../assets/mock-data";
import {PageHeaderComponent} from "../../components/page-header/page-header.component";
import {MovieCardComponent} from "../../components/movie-card/movie-card.component";
import {Button} from "primeng/button";

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [
    MovieListComponent,
    PageHeaderComponent,
    MovieCardComponent,
    Button
  ],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent implements OnInit {

  movies = movies;

  favoriteMovieListIds: string[] = [];
  watchLaterMovieListIds: string[] = [];

  ngOnInit() {
    // this.favoriteMovieListIds = ['3', '4'];
    // this.watchLaterMovieListIds = ['2', '5'];
  }

  addToFavorite(id: any) {
    let repeatingId = this.favoriteMovieListIds.find(listId => listId == id);
    if(repeatingId) {
      return;
    }else {
      this.favoriteMovieListIds.push(id)
    }
  }

  addToWatchList(id: any) {
    let repeatingId = this.watchLaterMovieListIds.find(listId => listId == id);
    if(repeatingId) {
      return;
    }else {
      this.watchLaterMovieListIds.push(id);
    }
  }
}
