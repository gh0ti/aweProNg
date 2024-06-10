import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MyStandaloneParent} from "./components/my-standalone-parent/my-standalone-parent.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import MovieType from "../types/movie-type";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MyStandaloneParent, MovieListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
    movieList: MovieType[] = [];

    ngOnInit() {
        // TODO: replace with getting data from API
        this.movieList = [
            {title: "Matrix"},
            {title: "Shrek"},
            {title: "Avengers"},
        ];
    }
}
