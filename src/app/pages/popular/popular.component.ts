import {Component, OnInit} from '@angular/core';
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {PageHeaderComponent} from "../../components/page-header/page-header.component";
import {MovieCardComponent} from "../../components/movie-card/movie-card.component";
import {Button} from "primeng/button";
import {MovieService} from "../../services/movie.service";

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

  movies:any[] = [];

  constructor(
    private movieService: MovieService,
  ) {
  }

  ngOnInit() {
    this.movies = this.movieService.getPopularMovies();
  }

  addToFavorite(id: any) {
    this.movieService.setFavoriteMovieId(id);
  }

  addToWatchList(id: any) {
    this.movieService.setWatchLaterMovieId(id);
  }
}
