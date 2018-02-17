import { Component, OnInit, Input} from '@angular/core';
import { BooksModel } from '../../books.model';
import { BooksService } from '../../books.service';

@Component({
  selector: 'app-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.css']
})
export class BooksItemComponent implements OnInit {
  @Input() book: BooksModel;
  constructor(private bkService: BooksService) { }

  ngOnInit() {
  }

 onSelected() {
  this.bkService.bookSelected.emit(this.book);
}


}
