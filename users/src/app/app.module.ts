import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersInactiveComponent } from './users-inactive/users-inactive.component';
import { UsersActiveComponent } from './users-active/users-active.component';
import { UsersService } from './users.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersInactiveComponent,
    UsersActiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
