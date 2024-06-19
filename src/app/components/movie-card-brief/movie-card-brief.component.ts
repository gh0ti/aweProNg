import {Component, Input} from '@angular/core';
import MovieType from "../../../types/movie-type";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-movie-card-brief',
  standalone: true,
    imports: [
        Button,
        CardModule
    ],
  templateUrl: './movie-card-brief.component.html',
  styleUrl: './movie-card-brief.component.scss'
})
export class MovieCardBriefComponent {
    @Input() movie!: MovieType;

}
