import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {NgIf} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-movie-description-page',
  standalone: true,
  imports: [
    Button,
    CardModule,
    NgIf,
    PrimeTemplate,
    RatingModule,
    FormsModule
  ],
  templateUrl: './movie-description.component.html',
  styleUrl: './movie-description.component.scss'
})
export class MovieDescriptionComponent implements OnInit {

  id: string = '';
  movie!: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.movieService.getMovieDetails(+this.id).subscribe( movie => {
      this.movie = movie;
    })
  }
}
