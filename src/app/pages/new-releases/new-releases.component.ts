import {Component, OnInit} from '@angular/core';
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-new-releases',
  standalone: true,
    imports: [
        MovieListComponent
    ],
  templateUrl: './new-releases.component.html',
  styleUrl: './new-releases.component.scss'
})
export class NewReleasesComponent implements OnInit {

  movies:any[] = [];

  constructor(
    private movieService: MovieService,
  ) {
  }

  ngOnInit() {
    this.movies = this.movieService.getJustReleasedMovies();
  }

  addToFavorite(id: any) {
    this.movieService.setFavoriteMovieId(id);
  }

  addToWatchList(id: any) {
    this.movieService.setWatchLaterMovieId(id);
  }
}
