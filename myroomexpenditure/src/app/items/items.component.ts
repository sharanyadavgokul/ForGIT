import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

import { Items } from '../models/items.model';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  title= 'items component';
  itemsForm: FormGroup;
  selectedShare:String;
  selectedUsed:String;


  constructor( private fb: FormBuilder, private itemsService:ItemsService) {  }

  ngOnInit() {
    this.itemsForm = this.fb.group({
      'date': new FormControl('', Validators.required),
      'itemName': new FormControl('', Validators.required),
      'amount': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'share':new FormControl('', Validators.required),
      'used1':new FormControl(true,Validators.required),
      'used2':new FormControl(true,Validators.required)
    });
  }

  addItem(){
  console.log(this.itemsForm.value);
  // this.itemsService.localD.push(this.itemsForm.value);
  this.itemsService.items.push(this.itemsForm.value);
  this.ngOnInit();
  this.itemsService.toLocal();
  }

  onClear(){
    this.ngOnInit();
  }

  onSelect(event){
    this.selectedShare=event.target.value;
    console.log(this.selectedShare);
  }

  onSelectUsed(event){
    this.selectedUsed=event.target.value;
    console.log(this.selectedUsed);
  }


}





