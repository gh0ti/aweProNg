import {Component, OnInit} from '@angular/core';
import {MovieCardComponent} from "../../components/movie-card/movie-card.component";
import {NgForOf} from "@angular/common";
import {PageHeaderComponent} from "../../components/page-header/page-header.component";
import {ActivatedRoute} from "@angular/router";
import {movies} from "../../mock-data";
import {MovieListComponent} from "../../components/movie-list/movie-list.component";

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

  movies = movies;
  favoriteMovies: any[] = [];
  moviesId: any[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {
    this.moviesId = JSON.parse(route.snapshot.queryParams['data']);
  }

  ngOnInit() {
    this.movies.forEach(movie => {
      this.moviesId.forEach(id => {
        if(movie.id == id) {
          this.favoriteMovies.push(movie);
        }
      })
    });
  }
}
