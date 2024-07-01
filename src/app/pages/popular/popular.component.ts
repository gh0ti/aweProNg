import {Component, OnInit} from '@angular/core';
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {movies} from "../../mock-data";
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
  }

  addToFavorite(id: any) {
    if(!this.favoriteMovieListIds.includes(id)){
      this.favoriteMovieListIds.push(id);
    }
  }

  addToWatchList(id: any) {
    if(!this.watchLaterMovieListIds.includes(id)){
      this.watchLaterMovieListIds.push(id);
    }
  }
}
