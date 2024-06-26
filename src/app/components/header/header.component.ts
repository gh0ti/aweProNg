import { Component } from '@angular/core';
import {UpperCasePipe} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        UpperCasePipe,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
