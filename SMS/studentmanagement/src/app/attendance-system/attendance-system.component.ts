import { Component, OnInit } from '@angular/core';
import { Student } from '../models/students.model';

@Component({
  selector: 'app-attendance-system',
  templateUrl: './attendance-system.component.html',
  styleUrls: ['./attendance-system.component.css']
})
export class AttendanceSystemComponent implements OnInit {
  student:Student[]=[
    new Student('Sharan',1000,'10th class',new Date('10-2-2013'),'male'),
    new Student('Rahul',1001,'10th class',new Date('1-12-2015'),'male'),
    new Student('kumar',1002,'5th class',new Date('10-22-2017'),'male'),
    new Student('Pandey',1003,'4th class',new Date('12-22-2012'),'male'),
    new Student('Gokul',1004,'1st class',new Date('4-12-2014'),'male'),
    new Student('Yadav',1005,'8th class',new Date('7-15-2012'),'male'),
    new Student('Shiv',1006,'9th class',new Date('9-17-2015'),'male'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
