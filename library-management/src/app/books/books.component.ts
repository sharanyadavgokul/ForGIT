import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { BooksModel } from './books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BooksService]
})
export class BooksComponent implements OnInit {
selectedBook: BooksModel;
  constructor(private bkService: BooksService) { }

  ngOnInit() {
    this.bkService.bookSelected
    .subscribe(
      (book: BooksModel) => {
        this.selectedBook = book;
      }
  );
}

}
