import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Side_barComponent } from "./side_bar/side_bar.component";

//npm install --save @angular/material


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Side_barComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tab_bar';
}
