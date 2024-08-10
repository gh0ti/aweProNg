import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {MovieCardComponent} from "./components/movie-card/movie-card.component";
import {HeaderComponent} from "./components/header/header.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MovieService} from "./services/movie.service";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieListComponent, MovieCardComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title = 'movies';

  constructor(
    private movieService: MovieService,
    private authService: AuthService,          ) {
  }

  ngOnInit() {
    this.authService.authenticateAndGetAccountId().subscribe(accountId => {
          this.movieService.setAccountId(accountId);
          console.log('Account ID:', accountId);
      },
      error => {
          console.error('Authentication failed:', error);
      }
    );
  }
}
