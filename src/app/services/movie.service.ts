import {Injectable, OnInit} from '@angular/core';
import {newMovies, topRatedMovies, upcomingMovies} from "../mock-data";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Movie, MovieApiModel} from "../models/movie.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private favoriteMoviesSubject = new BehaviorSubject<Movie[]>([]);
  public favoriteMovies$: Observable<Movie[]> = this.favoriteMoviesSubject.asObservable();

  private watchLaterMoviesSubject = new BehaviorSubject<Movie[]>([]);
  public watchLaterMovies$: Observable<Movie[]> = this.watchLaterMoviesSubject.asObservable();

  apiKey = '?api_key=9fc7cdce076bef3dc549f9fbfb1626e6';
  apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmM3Y2RjZTA3NmJlZjNkYzU0OWY5ZmJmYjE2MjZlNiIsIm5iZiI6MTcyMDEyMTk3NS41NTA2MTUsInN1YiI6IjY2ODZmNmI0OGZhZDJlNzAzOTVlYzUwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xZuhqk-TaS0BloCvgA8iSQTCkaj9ywg80FmeILFa1fQ';
  apiBaseUrl = 'https://api.themoviedb.org/3/movie';

  private allMovies: any[] = [];
  private favoriteMovieList: Movie[] = [];
  private watchLaterMovieList: Movie[] = [];

  constructor(
    private httpClient: HttpClient,
  ) {
    this.allMovies = topRatedMovies.concat(newMovies).concat(upcomingMovies);
  }

  getPopularMovies(): Observable<MovieApiModel> {
    return this.httpClient.get<MovieApiModel>(`${this.apiBaseUrl}/popular${this.apiKey}`);
  }

  getJustReleasedMovies(): Observable<MovieApiModel> {
    return this.httpClient.get<MovieApiModel>(`${this.apiBaseUrl}/top_rated${this.apiKey}`);
  }

  getUpcomingMovies(): Observable<MovieApiModel> {
    return this.httpClient.get<MovieApiModel>(`${this.apiBaseUrl}/upcoming${this.apiKey}`);
  }

  getMovieDetails(id: number): Observable<any> {
    return this.httpClient.get<MovieApiModel>(`${this.apiBaseUrl}/${id}${this.apiKey}`);
  }

  setFavoriteMovie(movie: Movie) {
    if(!this.favoriteMovieList.includes(movie)){
      this.favoriteMovieList.push(movie);
      this.favoriteMoviesSubject.next(this.favoriteMovieList);
    }
  }

  setWatchLaterMovie(movie: Movie) {
    if(!this.watchLaterMovieList.includes(movie)){
      this.watchLaterMovieList.push(movie);
      this.watchLaterMoviesSubject.next(this.watchLaterMovieList);
    }
  }

  getFavoriteMovies() {
    return this.favoriteMovies$;
  }

  getWatchLaterMovies() {
    return this.watchLaterMovies$;
  }

  deleteFromFavoriteMovies(movie: Movie) {
    this.favoriteMovies$.subscribe(movies => {
      if(movies.includes(movie)) {
        let index = movies.indexOf(movie);
        movies.splice(index,1);
        this.favoriteMoviesSubject.next(movies);
      }
    })
  }

  deleteFromWatchLaterMovies(movie: Movie) {
    this.watchLaterMovies$.subscribe(movies => {
      if(movies.includes(movie)) {
        let index = movies.indexOf(movie);
        movies.splice(index,1);
        this.watchLaterMoviesSubject.next(movies);
      }
    })
  }
}
