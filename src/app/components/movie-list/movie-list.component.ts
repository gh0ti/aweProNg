import {Component, Input, OnInit} from '@angular/core';
import MovieType from "../../../types/movie-type";

@Component({
    selector: 'app-movie-list',
    standalone: true,
    imports: [],
    templateUrl: './movie-list.component.html',
    styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
    @Input() title: string = '';
    @Input() movies: MovieType[] = [];

}
