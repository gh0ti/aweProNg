import {Component, OnInit} from '@angular/core';
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";

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

  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
  ) {
  }

  ngOnInit() {
    this.movieService.getJustReleasedMovies().subscribe(data => {
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
