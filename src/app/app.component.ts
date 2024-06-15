import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import MovieType from "../types/movie-type";
import {MatAnchor, MatMiniFabAnchor} from "@angular/material/button";
import movies from "../assets/mock-data/movies";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MovieListComponent, MatAnchor, MatMiniFabAnchor],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    movieList: MovieType[] = [];
    mainMovieListName = "Movies";

    ngOnInit() {
        // TODO: replace static array with getting data from API
        this.movieList = movies;
    }
}
