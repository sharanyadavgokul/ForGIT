import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import {ItemsComponent}

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  title= 'items-list component';
  isVisible: Boolean= true;
  constructor() { }

  ngOnInit() {
  }

  toggleItems(){
    this.isVisible = !this.isVisible;
  }

}
