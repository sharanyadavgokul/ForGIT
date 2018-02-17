import {BooksModel} from './books.model';

export class BooksService {
    books: BooksModel[] = [
        new BooksModel(1, 'Half Girl friend', 'Chetan bhagat', '../assets/half.jpg', '21hgfv2j2'),
        new BooksModel(2, 'Jurrasic park', 'Steve', '../assets/jurassic.jpg', '31hgfv2j2'),
        new BooksModel(3, 'Titanic', 'James Cameron', '../assets/titanic.jpg', '55hgfv2j2'),
      ];

getBooks() {
   return this.books.slice();
}

}
