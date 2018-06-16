import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlacesComponent } from './places/places.component';
import {Places} from './models/places.model';
import { PlaceserviceService } from './placeservice.service';
import { PushService } from './push.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

const appRoutes:Routes=[
  {path:'home', component:HomeComponent},
  {path:'places', component:PlacesComponent},
  {path:'vote', component:FormComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FormComponent,
    DashboardComponent,
    PlacesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [PlaceserviceService, PushService],
  bootstrap: [AppComponent]
})
export class AppModule { }
