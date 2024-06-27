import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {movies} from "../../../assets/mock-data";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {NgIf} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";

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
  movie: any = {};
  movies = movies;

  constructor(
    private route: ActivatedRoute,
    ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.movie = this.movies.find(movie => movie.id == +this.id);
  }
}
