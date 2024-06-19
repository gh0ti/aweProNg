import {Component, Input} from '@angular/core';
import MovieType from "../../../types/movie-type";
import {MovieCardComponent} from "../movie-card/movie-card.component";
import {MovieCardBriefComponent} from "../movie-card-brief/movie-card-brief.component";
import {Button} from "primeng/button";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-movie-list',
    standalone: true,
    imports: [
        MovieCardComponent,
        MovieCardBriefComponent,
        Button,
        MatButton
    ],
    templateUrl: './movie-list.component.html',
    styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
    @Input() title: string = '';
    @Input() movies: MovieType[] = [];
    @Input() favoriteMovies: MovieType[] = [];
    @Input() watchList: MovieType[] = [];

    addToFavorite(movie: MovieType): void {
        this.favoriteMovies.push(movie);
    }

    addToWatchList(movie: MovieType): void {
        this.watchList.push(movie);
    }
}
