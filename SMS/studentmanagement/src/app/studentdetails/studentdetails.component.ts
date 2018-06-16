import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { studentDetail } from '../shared-services/studentdetail.service';
import { Student } from '../models/students.model';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  studentDetails:Student;
  more:String='More Details';
  display:Boolean=false;
  btn:Array<Number>=[1,2,3,4,5,6,7,8,9,10];
  constructor(private studentService:studentDetail) { }

  ngOnInit() {
    // this.studentDetails=this.studentService.studentDetail;
  }

  onSelected(i){
    this.studentService.studentSelected.emit(this.studentDetails[i]);
    //console.log(this.studentDetails[i]);
  }


  onSubmit(i){
    console.log(i+1);
    this.studentDetails=this.studentService.studentDetail[i];
  }

}
