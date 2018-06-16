import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from '../models/students.model';
import { studentDetail } from '../shared-services/studentdetail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {
  onStudentSelected :Student;
  dummy:Array<any>=[];
  data:Subscription;
  constructor(private studDetail:studentDetail) { 
  }

  ngOnInit() {
    this.data=this.studDetail/*service*/.studentSelected
      .subscribe((student:Student)=>{
        this.onStudentSelected = student;
        this.onStudentSelected = JSON.parse(JSON.stringify(this.onStudentSelected));
        console.log("I m Student Info Compo:  "+ this.onStudentSelected.name);
        this.dummy.push(this.onStudentSelected);
        console.log(this.dummy[0].name,this.dummy[0].studentId );
        console.log("inside  --> "+ this.dummy.length);
        setInterval(()=>{
          console.log("inside  --> "+ this.dummy[0].name);
        },3000)
      });
      setTimeout(()=>{
        console.log("outside  --> "+ this.dummy.length);
      },1000)
  }

  
}
