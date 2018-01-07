import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { CostToPeopleComponent } from './expenses/cost-to-people/cost-to-people.component';
import { TotalMonthExpComponent } from './expenses/cost-to-people/total-month-exp/total-month-exp.component';
import { MoneySpentComponent } from './expenses/money-spent/money-spent.component';
import { IndividualTotalSpentComponent } from './expenses/money-spent/individual-total-spent/individual-total-spent.component';
import { ShouldPayComponent } from './expenses/should-pay/should-pay.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsEditComponent } from './items/items-list/items-edit/items-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes= [
  {path: '', component:HomeComponent},
  {path:'items', component:ItemsComponent},
  {path:'expenses',component:ExpensesComponent},
  {path:'shouldpay', component:ShouldPayComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpensesComponent,
    CostToPeopleComponent,
    TotalMonthExpComponent,
    MoneySpentComponent,
    IndividualTotalSpentComponent,
    ShouldPayComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemsEditComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
