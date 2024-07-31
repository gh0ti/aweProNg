import {Component, OnInit} from '@angular/core';
import {MovieCardComponent} from "../../components/movie-card/movie-card.component";
import {NgForOf} from "@angular/common";
import {PageHeaderComponent} from "../../components/page-header/page-header.component";
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-favourites-page',
  standalone: true,
  imports: [
    MovieCardComponent,
    NgForOf,
    PageHeaderComponent,
    MovieListComponent
  ],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent implements OnInit {

  favoriteMovies: Movie[] = [];

  constructor(
    private movieService: MovieService,
  ) {
  }

  ngOnInit() {
    this.movieService.getFavoriteMovies().subscribe(movies => {
      this.favoriteMovies = movies;
    });

  }

  deleteFromFavorites(movie: Movie) {
    this.movieService.deleteFromFavoriteMovies(movie);
  }
}
