import {Component, Input} from '@angular/core';
import {Router, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [
    RouterLinkActive
  ],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {

  @Input() favoriteMovieIds: string[] =[];

  @Input() watchLaterMovieIds: string[] =[];

  constructor(private router: Router) { }

  navigateWithData(data: string[], favorite?: string) {

    const dataString = JSON.stringify(data);
    const path = favorite ? 'favorites' : 'watch-list';

    this.router.navigate([{ outlets: { header: [path] } }], { queryParams: { data: dataString } });
  }
}
