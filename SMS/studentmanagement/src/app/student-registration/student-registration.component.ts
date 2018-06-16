import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  studentForm:FormGroup;
  gender:Array<string>=['Male',' Female', 'Other']
  constructor(private fb:FormBuilder) { }


  ngOnInit() {
    this.studentForm=this.fb.group({
      studentName: new FormControl('', Validators.required),
      fatherName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      address: this.fb.group({
        address1: new FormControl('',Validators.required),
        city: new FormControl('', Validators.required),
        district: new FormControl('', Validators.required),
        state:new FormControl('', Validators.required),
        pincode:new FormControl('', Validators.required),
      }),//address
      education: this.fb.group({
        educationLevel:new FormControl('', Validators.required),
        highestDegree:new FormControl('', Validators.required),
      }),//education
      mobile:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
    })//main
  }

  onSubmit(){
    console.log(this.studentForm.value);
  }

}
