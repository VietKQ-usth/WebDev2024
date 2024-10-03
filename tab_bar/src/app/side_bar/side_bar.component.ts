import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Side_bar_infoComponent } from './side_bar_info/side_bar_info.component';


//npm install --save @angular/material

@Component({
  selector: 'app-side_bar',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule,Side_bar_infoComponent],
  templateUrl: './side_bar.component.html',
  styleUrls: ['./side_bar.component.css'],
  standalone: true // Add this line to make the component standalone
})


export class Side_barComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
