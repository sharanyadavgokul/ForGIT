import { Component, OnInit } from '@angular/core';
import { Items } from '../items.model';
import { ItemsComponent } from '../items.component';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  title = 'items-list component';
  isVisible: Boolean = true;
  items: Items[] = [
    new Items(201, 'milk', 'to drink', 100),
    new Items(202, 'rice', 'to eat', 2000 )
  ];
  constructor() { }

  ngOnInit() {
  }

  toggleItems() {
    this.isVisible = !this.isVisible;
  }

}
