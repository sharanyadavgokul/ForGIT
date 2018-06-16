import { Injectable,Input } from '@angular/core';
import { Places } from './models/places.model';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PushService {
  selectRadio:String;
  constructor(private router:Router, private http:HttpClient) { }

    ngOnInit(){
      return this.http.get('../assets/chartdata.json', {responseType:'json'})
    }

  chartOptions={
    responsive:true 
  }

  labels=['Guhantara','Eagleton','Urban Valley', 'Golden Palms','Movies','Wonderla','Trekking','Dinner' ]

  chartData=[
    {
      label:'votes',
      data:[0, 0, 0, 0, 0, 0, 0, 0]
     }
  ]

  colors = [
    { 
      backgroundColor: 'navy'
    },

  ]

  onSubmit(){
    console.log('I am service method');
    // for( var i=0; i<=this.chartData[0].data.length; i++){
    
  }//onSubmit

  

}
