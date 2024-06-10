import {Component, EventEmitter, Input, Output} from '@angular/core';
import MovieType from "../../../types/movie-type";

@Component({
    selector: 'app-movie-card',
    standalone: true,
    imports: [],
    templateUrl: './movie-card.component.html',
    styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
    @Input() movie!: MovieType;

    @Output() addFavoriteEmitter = new EventEmitter<MovieType>();
    @Output() addWatchListEmitter = new EventEmitter<MovieType>();

    addFavoriteHandler(movie: MovieType): void {
        this.addFavoriteEmitter.emit(movie);
    }

    addWatchListHandler(movie: MovieType): void {
        this.addWatchListEmitter.emit(movie);
    }
}
