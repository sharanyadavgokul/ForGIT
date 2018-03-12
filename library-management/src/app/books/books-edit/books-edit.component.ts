import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {

  bookForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

  private initForm(){
    this.bookForm = new FormGroup({
      
    })
  }
}
