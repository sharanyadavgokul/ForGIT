import { Injectable,Output,EventEmitter } from "@angular/core";
import { Student } from "../models/students.model";

@Injectable()
export class studentDetail {
 studentSelected=new EventEmitter<Student>();
 test:Array<any>=[];

 onPromise(){
    return this.test.push(this.studentSelected);
    };


    studentDetail1:Student[]=[
        new Student('Rahul',18001,'9th class',new Date(2/2/2018),'Male'),
        new Student('Bharat',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Ganesh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Prutvi',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Mahesh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Kalyan',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Mukesh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Nagesh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Suresh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Sai',18001,'9th class',new Date(12/10/2018),'Male'),
    ];

    studentDetail2:Student[]=[
        new Student('Rahul',18001,'9th class',new Date(2/2/2018),'Male'),
        new Student('Bharat',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Ganesh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Prutvi',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Mahesh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Kalyan',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Mukesh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Nagesh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Suresh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Sai',18001,'9th class',new Date(12/10/2018),'Male'),
    ];

    studentDetail3:Student[]=[
        new Student('Rahul',18001,'9th class',new Date(2/2/2018),'Male'),
        new Student('Bharat',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Ganesh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Prutvi',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Mahesh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Kalyan',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Mukesh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Nagesh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Suresh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Sai',18001,'9th class',new Date(12/10/2018),'Male'),
    ];

    studentDetail4:Student[]=[
        new Student('Santosh',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('keerthy',18001,'9th class',new Date(12/10/2018),'Male'),
        new Student('Vani',18001,'9th class',new Date(12/10/2018),'Female'),
        new Student('Madhu',18001,'9th class',new Date(12/10/2018),'Female'),
        new Student('Priya',18001,'9th class',new Date(12/10/2018),'Female'),
        new Student('Hema',18001,'9th class',new Date(12/10/2018),'Female'),
        new Student('Sonia',18001,'9th class',new Date(12/10/2018),'Female'),
        new Student('Daisu',18001,'9th class',new Date(12/10/2018),'Female'),
        new Student('Kavya',18001,'9th class',new Date(12/10/2018),'Female'),
        new Student('Umesh',18001,'9th class',new Date(12/10/2018),'Male')
    ]

    studentDetail:Array<any>=[this.studentDetail1,this.studentDetail2,this.studentDetail3,this.studentDetail4];

    constructor(){

    }

    
}
