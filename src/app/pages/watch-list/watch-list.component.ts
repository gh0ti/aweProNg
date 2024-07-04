import {Component, OnInit} from '@angular/core';
import {MovieCardComponent} from "../../components/movie-card/movie-card.component";
import {NgForOf} from "@angular/common";
import {PageHeaderComponent} from "../../components/page-header/page-header.component";
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {MovieService} from "../../services/movie.service";

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

  watchList: any[] = [];

  constructor(
    private movieService: MovieService,
  ) {
  }

  ngOnInit() {
    this.watchList = this.movieService.getWatchLaterMovies();
  }
}

