import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BooksModel } from '../../books.model';

@Component({
  selector: 'app-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.css']
})
export class BooksItemComponent implements OnInit {
  @Input() book: BooksModel[];
  @Output() bookSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
 onSelected() {
  this.bookSelected.emit();
}


}
