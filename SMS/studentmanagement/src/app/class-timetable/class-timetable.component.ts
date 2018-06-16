import { Component, OnInit } from '@angular/core';
import { TimeTable } from '../models/timetable.model';

@Component({
  selector: 'app-class-timetable',
  templateUrl: './class-timetable.component.html',
  styleUrls: ['./class-timetable.component.css']
})
export class ClassTimetableComponent implements OnInit {
  btn:Array<Number>=[1,2,3,4,5,6,7,8,9,10];
  timetable:Array<any>;
  timeTable1:TimeTable[]=[
    new TimeTable('Monday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Tuesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Wednesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Thrusday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Friday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Saturday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Sunday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library')
  ]
  timeTable2:TimeTable[]=[
    new TimeTable('sunday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Tuesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Wednesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Thrusday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Friday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Saturday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Sunday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library')
  ]
  timeTable3:TimeTable[]=[
    new TimeTable('Tuesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Tuesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Wednesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Thrusday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Friday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Saturday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Sunday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library')
  ]
  timeTable4:TimeTable[]=[
    new TimeTable('Wednesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Tuesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Wednesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Thrusday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Friday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Saturday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Sunday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library')
  ]
  timeTable5:TimeTable[]=[
    new TimeTable('Thrusday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Tuesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Wednesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Thrusday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Friday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Saturday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Sunday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library')
  ]
  timeTable6:TimeTable[]=[
    new TimeTable('Friday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Tuesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Wednesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Thrusday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Friday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Saturday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Sunday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library')
  ]
  timeTable7:TimeTable[]=[
    new TimeTable('Satusrday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Tuesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Wednesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Thrusday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Friday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Saturday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Sunday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library')
  ]
  timeTable8:TimeTable[]=[
    new TimeTable('Satusrday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Tuesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Wednesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Thrusday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Friday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Saturday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Sunday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library')
  ]
  timeTable9:TimeTable[]=[
    new TimeTable('Satusrday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Tuesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Wednesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Thrusday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Friday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Saturday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Sunday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library')
  ]
  timeTable10:TimeTable[]=[
    new TimeTable('Satusrday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Tuesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Wednesday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Thrusday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Friday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Saturday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library'),
    new TimeTable('Sunday','Telugu','English','Hindi','Sanskrit', 'Physics', 'Mathematics','Library')
  ]

  timeTable:Array<any>=[this.timeTable1,this.timeTable2,this.timeTable3,
    this.timeTable4,this.timeTable5,this.timeTable6,this.timeTable7,this.timeTable8,this.timeTable9,this.timeTable10];
  constructor() { }

  ngOnInit() {

  }

  onSubmit(i){
    console.log(i+1);
    this.timetable = this.timeTable[i];
  };



}
