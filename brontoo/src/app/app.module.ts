import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/Http';


import { AppComponent } from './app.component';
import { PostloginModule } from './postlogin/home/postlogin.module';
import { PreloginModule } from './prelogin/login/prelogin.module';
import { HomeComponent } from './postlogin/home/home.component';
import { LoginComponent } from './prelogin/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    PostloginModule,
    PreloginModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
