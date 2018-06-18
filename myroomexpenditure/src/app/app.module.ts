import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ItemsService } from './services/items.service';
import { CostComponent } from './cost/cost.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { ShouldpayComponent } from './shouldpay/shouldpay.component';
 
const appRoutes: Routes= [
  {path: '', component:HomeComponent},
  {path:'items', component:ItemsComponent},
  {path:'divided-amount',component:CostComponent},
  {path:'monthly-exp',component:MonthlyComponent},
  {path:'should-pay',component:ShouldpayComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ItemsListComponent,
    HomeComponent,
    CostComponent,
    MonthlyComponent,
    ShouldpayComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
