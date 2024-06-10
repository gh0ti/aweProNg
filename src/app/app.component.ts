import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import MovieType from "../types/movie-type";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,  MovieListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    movieList: MovieType[] = [];
    favoritesList: MovieType[] = [];
    watchList: MovieType[] = [];
    mainMovieListName = "Movies";

    ngOnInit() {
        // TODO: replace static array with getting data from API
        this.movieList = [
            {
                id: 'matrix',
                title: "Matrix",
                poster: "/assets/posters/matrix.webp"
            },
            {
                id: 'shrek',
                title: "Shrek",
                poster: "/assets/posters/shrek.webp"
            },
            {
                id: 'avengers',
                title: "Avengers",
                poster: "/assets/posters/avengers.webp"
            },
        ];
    }

    addToFavoritesHandler(movie: MovieType): void {
        console.log(movie);
    }

    addToWatchHandler(movie: MovieType): void {
        console.log(movie);
    }

    onClickHandler(event: MouseEvent): void {
        console.log(event);
        this.mainMovieListName += "*";
    }
}
