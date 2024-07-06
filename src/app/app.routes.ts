import {Routes} from '@angular/router';
import {PopularComponent} from "./pages/popular/popular.component";
import {UpcomingComponent} from "./pages/upcoming/upcoming.component";
import {NewReleasesComponent} from "./pages/new-releases/new-releases.component";
import {FavouritesComponent} from "./pages/favourites-page/favourites.component";
import {WatchListComponent} from "./pages/watch-list/watch-list.component";
import {MovieDescriptionComponent} from "./pages/movie-description-page/movie-description.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  { path: '', redirectTo: 'popular', pathMatch: 'full'},
  { path: 'popular', component: PopularComponent},
  { path: 'new', component: NewReleasesComponent},
  { path: 'upcoming', component: UpcomingComponent},
  { path: 'movie/:id', component: MovieDescriptionComponent},

  { path: 'favorites', component: FavouritesComponent},
  { path: 'watch-list', component: WatchListComponent},
];

