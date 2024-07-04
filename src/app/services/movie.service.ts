import {Injectable, OnInit} from '@angular/core';
import {newMovies, topRatedMovies, upcomingMovies} from "../mock-data";

@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnInit {

  public allMovies: any[] = [];
  private favoriteMovieListIds: string[] = [];
  private watchLaterMovieListIds: string[] = [];

  constructor() {
    this.allMovies = topRatedMovies.concat(newMovies).concat(upcomingMovies);
  }

  ngOnInit() {

  }

  getPopularMovies() {
    return topRatedMovies;
  }

  getJustReleasedMovies() {
    return newMovies;
  }

  getUpcomingMovies() {
    return upcomingMovies;
  }

  setFavoriteMovieId(id: string) {
    if(!this.favoriteMovieListIds.includes(id)){
      this.favoriteMovieListIds.push(id);
    }
  }

  setWatchLaterMovieId(id: string) {
    if(!this.watchLaterMovieListIds.includes(id)){
      this.watchLaterMovieListIds.push(id);
    }
  }

  getFavoriteMovies() {
    let favoriteMovies: any[] = [];
    this.allMovies.forEach(movie => {
      this.favoriteMovieListIds.forEach(id => {
        if(movie.id == +id) {
          console.log(id);
          favoriteMovies.push(movie);
        }
      })
    });

    return favoriteMovies;
  }

  getWatchLaterMovies() {
    let watchLaterMovies: any[] = [];

    this.allMovies.forEach(movie => {
      this.watchLaterMovieListIds.forEach(id => {
        if(movie.id == +id) {
          watchLaterMovies.push(movie);
        }
      })
    });

    return watchLaterMovies;
  }
}
