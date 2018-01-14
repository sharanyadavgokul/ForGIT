import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { Items } from './items';
import { ItemsListComponent } from './items-list/items-list.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  title= 'items component';
  itemsForm: FormGroup;
  itemsDetails: Items [] = [];


  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.itemsForm = this.fb.group({
      date:[''],
      itemName:[''],
      amount:[''],
      description:['']
    });
  }

  addItem(){
   // (this.itemsForm.get('itemsForm') as FormArray).push();


  }

}
