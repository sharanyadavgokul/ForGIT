import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { Items } from './items';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  title= 'items component';
  itemsForm: FormGroup;


  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.itemsForm = this.fb.group({
      date:[''],
      itemName:[''],
      description:[''],
    });
  }

  addItem(){
    
  }

}
