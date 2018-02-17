import { Component, OnInit, Input } from '@angular/core';
import { BooksModel } from '../books.model';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
 @Input() books: BooksModel;
  constructor() { }

  ngOnInit() {
  }

}
