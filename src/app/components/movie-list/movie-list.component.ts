import { Component } from '@angular/core';
import {MovieCardComponent} from "../movie-card/movie-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieCardComponent,
    NgForOf
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {

  favoriteMovies: any[] = [];
  toWatchMovies: any[]  = [];

  movieList = [
    {
      image: "../../../assets/img/3_body_problem.jpg",
      id: 653346,
      overview: "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
      release_date: "May 5, 2024",
      title: "3 body problem",
      rating: 8.5
    }, {
      image: "../../../assets/img/stranger.jpg",
      id: 653346,
      overview: "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
      release_date: "May 5, 2024",
      title: "Stranger things",
      rating: 8.5
    }, {
      image: "../../../assets/img/dune.jpg",
      id: 653346,
      overview: "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
      release_date: "May 5, 2024",
      title: "Dune",
      rating: 8.5
    },
  ];

  addToFavorite(movie: any) {
    this.favoriteMovies.push(movie);
  }

  addToWatchList(movie: any) {
    this.toWatchMovies.push(movie);
  }

}
