import {Component, EventEmitter, Input, Output} from '@angular/core';
import MovieType from "../../../types/movie-type";
import {TimestampToDatePipe} from "../../pipes/timestamp-to-time.pipe";
import {
    MatCard,
    MatCardActions,
    MatCardContent, MatCardFooter,
    MatCardHeader,
    MatCardImage,
    MatCardTitle
} from "@angular/material/card";
import {MatAnchor, MatButton, MatFabButton} from "@angular/material/button";

@Component({
    selector: 'app-movie-card',
    standalone: true,
    imports: [
        TimestampToDatePipe,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardImage,
        MatCardActions,
        MatButton,
        MatFabButton,
        MatAnchor,
        MatCardContent,
        MatCardFooter
    ],
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
