import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Items } from './items';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  title= 'items component';


  constructor() { }

  ngOnInit() {
  }


}
