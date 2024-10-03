import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export type Menu_Items={
  icon:string,
  name:string,
  route:string
}

@Component({
  selector: 'app-side_bar_info',
  imports : [MatIconModule,MatListModule,CommonModule],
  templateUrl: './side_bar_info.component.html',
  styleUrls: ['./side_bar_info.component.css'],
  standalone: true
})
export class Side_bar_infoComponent implements OnInit {

  constructor() { }

  menu_items=signal<Menu_Items[]>([
    {
      icon: 'home',
      name: 'Home',
      route: '/'
    },
    {
      icon: 'book',
      name: 'Books',
      route: '/books'
    },
    {
      icon: 'library_books',
      name: 'Library',
      route: '/library'
    }
  ])

  ngOnInit() {
  }

}
