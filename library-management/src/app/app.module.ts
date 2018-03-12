import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksDetailComponent } from './books/books-detail/books-detail.component';
import { BooksItemComponent } from './books/books-list/books-item/books-item.component';
import { HeaderComponent } from './header/header.component';
import { BooksEditComponent } from './books/books-edit/books-edit.component';
import { AppRoutingModule } from './app-routing-module';
import { AuthorsComponent } from './authors/authors.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksListComponent,
    BooksDetailComponent,
    BooksItemComponent,
    HeaderComponent,
    BooksEditComponent,
    AuthorsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
