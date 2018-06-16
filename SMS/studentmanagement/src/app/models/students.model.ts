export class Student{
    name:String;
    private studentId:Number;
    private _class:String;
    private dob:Date;
    private sex:String;

    constructor(name:string,studentId:Number,_class:String, dob:Date, sex:String){
        this.name=name;
        this.studentId=studentId;
        this._class=_class;
        this.dob=dob;
        this.sex=sex;
    }
}