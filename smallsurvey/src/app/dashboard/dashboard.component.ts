import { Component, OnInit } from '@angular/core';
import { PushService } from '../push.service';
import {HttpClient}from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title:String='Bar chart voting dashboard';
  chartOptions
  labels
  chartData
  colors  
  constructor(private pushService:PushService ) { }

  ngOnInit() {
    this.chartOptions=this.pushService.chartOptions;
    this.labels=this.pushService.labels;
    this.chartData=this.pushService.chartData;
    this.colors=this.pushService.colors;

    // this.pushService.ngOnInit()
    // .subscribe(
    //   (data)=>{
    //     this.chartData=data as any[];
    //     let start_index=1;
    //     let remove_index=7;
    //     this.chartData.splice(start_index,remove_index,100);
    //   },
    //   (err: HttpErrorResponse)=>{
    //     console.log(err.message);
    //   }
    // );
   }

  onPost(){
    this.pushService.onSubmit();
    console.log('I am onpost method');
  }



}


