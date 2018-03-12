import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BooksComponent } from './books/books.component';
import {AuthorsComponent} from './authors/authors.component';
import { BooksEditComponent } from './books/books-edit/books-edit.component';
import { BooksDetailComponent } from './books/books-detail/books-detail.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/books', pathMatch: 'full'},
    {path: 'books', component: BooksComponent, children: [
    ]},
    {path: 'authors', component: AuthorsComponent},
];

@NgModule({
imports : [ RouterModule.forRoot(appRoutes)],
exports : [RouterModule]
})

export class AppRoutingModule {

}
