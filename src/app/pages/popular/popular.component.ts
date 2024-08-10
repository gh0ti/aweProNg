import {Component, OnInit} from '@angular/core';
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {PageHeaderComponent} from "../../components/page-header/page-header.component";
import {MovieCardComponent} from "../../components/movie-card/movie-card.component";
import {Button} from "primeng/button";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [
    MovieListComponent,
    PageHeaderComponent,
    MovieCardComponent,
    Button,
  ],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
  ) {
  }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(data => {
      this.movies = data.results;
    });
  }

  addToFavorite(movie: Movie) {
    this.movieService.setFavoriteMovie(movie);
  }

  addToWatchList(movie: Movie) {
    this.movieService.setWatchLaterMovie(movie);
  }
}
