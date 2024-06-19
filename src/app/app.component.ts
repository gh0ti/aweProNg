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
    mainMovieListName = "Movies";

    ngOnInit() {
        // TODO: replace static array with getting data from API
        this.movieList = [
            {
                id: 'matrix',
                title: "Matrix",
                releaseDate: 922827600,
                poster: "/assets/posters/matrix.webp"
            },
            {
                id: 'shrek',
                title: "Shrek",
                releaseDate: 1004652000,
                poster: "/assets/posters/shrek.webp"
            },
            {
                id: 'avengers',
                title: "Avengers",
                releaseDate: 1330725600,
                poster: "/assets/posters/avengers.webp"
            },
        ];
    }
}
