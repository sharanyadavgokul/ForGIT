import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Places } from '../models/places.model';
import { PlaceserviceService } from '../placeservice.service';
import { PushService } from '../push.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  surveyForm:FormGroup;
 selectedResort:String;
  place:Places[];
  hideDone:Boolean=false;
  submitted:String="Thank you for your Vote! Redirecting to Voting Dashboard.";
  feed:Boolean=false;
  result:String="Please select one from above options!"
  
  constructor(private fb:FormBuilder, private placeService:PlaceserviceService, 
    private pushService:PushService, private router:Router) { }

  ngOnInit() {
    this.place=this.placeService.place;

    this.surveyForm=this.fb.group({
      firstName: new FormControl('',[Validators.required, Validators.minLength(5)]),
      lastName:new FormControl('', [Validators.required, Validators.minLength(5)]),
      reason:new FormControl('')
    })
  }

  onSubmit(){
    
    this.feed=true;
    let first= this.surveyForm.value['firstName'];
    let last= this.surveyForm.value['lastName'];
    console.log(first , last);
    console.log(this.surveyForm.value);
    console.log(" Button clicked !! ");
    setTimeout(()=>{
      this.hideDone=false;
      this.router.navigate(['/dashboard']);
      alert("Thanks for your vote! Navigating to Vote Dashboard.");
      ;},110);

    for( var i=0; i<=this.pushService.chartData[0].data.length; i++){
      var value=this.pushService.chartData[0].data;
      if(this.selectedResort==='Guhantara'){
        this.pushService.chartData[0].data.splice(0,1,value[0]+1);
      break;        
      }
      else if(this.selectedResort==='Eagleton'){
        this.pushService.chartData[0].data.splice(1,1,value[1]+1);
        break;
       
      }
      else if(this.selectedResort==='Urban Valley'){
        this.pushService.chartData[0].data.splice(2,1,value[2]+1);
        break;
        
      }
      else if(this.selectedResort==='Golden Palms'){
        this.pushService.chartData[0].data.splice(3,1,value[3]+1);
        break;
        
      }
      else if(this.selectedResort==='Movies'){
        this.pushService.chartData[0].data.splice(4,1,value[4]+1);
        break;
      }
      else if(this.selectedResort==='Wonderla'){
        this.pushService.chartData[0].data.splice(5,1,value[5]+1);
        break;
      }
      else if(this.selectedResort==='Trekking'){
        this.pushService.chartData[0].data.splice(6,1,value[6]+1);
        break;
      }
      else if(this.selectedResort==='Dinner'){
        this.pushService.chartData[0].data.splice(7,1,value[7]+1);
        break;
      }else{
        console.log('invalid option');
        
      }

      
      } //for loop
  }

  onSelect(event){
    this.selectedResort=event.target.value;
    console.log(this.selectedResort);
  }

  onCancel(){
    // alert("Redirecting to Home page!")
    // setTimeout(
    //   ()=>{
    //     this.router.navigate(['/home']);}
    //     ,1200);
    this.hideDone=true;
  }


}
