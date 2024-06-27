import {Component, OnInit} from '@angular/core';
import {MovieCardComponent} from "../../components/movie-card/movie-card.component";
import {NgForOf} from "@angular/common";
import {PageHeaderComponent} from "../../components/page-header/page-header.component";
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {ActivatedRoute} from "@angular/router";
import {movies} from "../../../assets/mock-data";

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [
    MovieCardComponent,
    NgForOf,
    PageHeaderComponent,
    MovieListComponent
  ],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss'
})
export class WatchListComponent implements OnInit {

  movies = movies;
  watchList: any[] = [];
  moviesId: any[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {
    this.moviesId = JSON.parse(route.snapshot.queryParams['data']);
  }

  ngOnInit() {
    this.movies.forEach(movie => {
      this.moviesId.forEach(id => {
        if(movie.id == id) {
          this.watchList.push(movie);
        }
      })
    });
  }
}

