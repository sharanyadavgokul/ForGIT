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
  

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.itemsForm = this.fb.group({
      'date': new FormControl(null),
      'itemName': new FormControl(null),
      'amount': new FormControl(null),
      'description': new FormControl(null)
    });
  }

  addItem(){
   // (this.itemsForm.get('itemsForm') as FormArray).push();
    console.log(this.itemsForm);
    const itemss = new FormControl(['']);
    //this.itemsForm.get('this.itemsForm').('this.itemss');

  }

}
