import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  details=[];
  private _url:string='../apidata/details.json';
  constructor(private _http:Http){
  }
  getDetails(){
    return this._http.get(this._url)
    .map((response:Response)=>response.json());
  }

  ngOnInit(){
    this.getDetails()
    .subscribe(resDetails=>this.details=resDetails);
  }
}
