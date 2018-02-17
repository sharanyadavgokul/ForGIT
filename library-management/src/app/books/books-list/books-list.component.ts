import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BooksModel } from '../books.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
   books: BooksModel[];
   @Output() bookWasSelected = new EventEmitter<BooksModel>();
  constructor(private bkservice: BooksService) { }

  ngOnInit() {
    this.books = this.bkservice.getBooks();
  }

  onBookSelected(books: BooksModel) {
    this.bookWasSelected.emit(books);
  }

}
