import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {Movie} from "../../models/movie.model";

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

  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
  ) {
  }

  ngOnInit() {
    this.movieService.getUpcomingMovies().subscribe(data => {
      this.movies = data.results;
    });
  }

  addToFavorite(id: any) {
    this.movieService.setFavoriteMovie(id);
  }

  addToWatchList(id: any) {
    this.movieService.setWatchLaterMovie(id);
  }
}
