import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EllipsisDirective} from "../../directives/ellipsis.directive";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButton, MatFabButton, MatMiniFabButton} from "@angular/material/button";
import {CardModule} from "primeng/card";
import {Button} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    EllipsisDirective,
    MatCard,
    MatCardContent,
    MatButton,
    MatMiniFabButton,
    MatFabButton,
    CardModule,
    Button,
    RatingModule,
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  @Input() movie: any;
  @Input() isEnableAdd: boolean = false;
  @Output() addToFavoriteEvt = new EventEmitter<any>();
  @Output() addToWatchListEvt = new EventEmitter<any>();

  addToFavorite(id: any) {
    this.addToFavoriteEvt.emit(id);
  }

  addToWatchList(id: any) {
    this.addToWatchListEvt.emit(id);
  }

}
