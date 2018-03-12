import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostloginModule } from './postlogin/home/postlogin.module';
import { PreloginModule } from './prelogin/login/prelogin.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    PostloginModule,
    PreloginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
