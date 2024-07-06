import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {MovieListComponent} from "../../components/movie-list/movie-list.component";

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [
    MovieListComponent
  ],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss'
})
export class UpcomingComponent implements OnInit {

  movies:any[] = [];

  constructor(
    private movieService: MovieService,
  ) {
  }

  ngOnInit() {
    this.movies = this.movieService.getUpcomingMovies();
  }

  addToFavorite(id: any) {
    this.movieService.setFavoriteMovieId(id);
  }

  addToWatchList(id: any) {
    this.movieService.setWatchLaterMovieId(id);
  }
}
