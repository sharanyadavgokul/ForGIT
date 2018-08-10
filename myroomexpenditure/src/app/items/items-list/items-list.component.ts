import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Items } from '../../models/items.model';
import { ItemsComponent } from '../items.component';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit, OnChanges {
  title = 'items-list component';
  isVisible: Boolean = true;
  items:Items[];
  
  constructor( private itemsServie:ItemsService) { }

  ngOnInit() {
  this.items= this.itemsServie.items;
  }

  toggleItems() {
    this.isVisible = !this.isVisible;
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("changes="+changes);
  }
}
