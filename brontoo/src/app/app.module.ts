import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostloginModule } from './postlogin/home/postlogin.module';
import { PreloginModule } from './prelogin/login/prelogin.module';
import { HomeComponent } from './postlogin/home/home.component';
import { LoginComponent } from './prelogin/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    PostloginModule,
    PreloginModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
