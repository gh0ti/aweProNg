import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {MovieCardComponent} from "./components/movie-card/movie-card.component";
import {HeaderComponent} from "./components/header/header.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieListComponent, MovieCardComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movies';
}
