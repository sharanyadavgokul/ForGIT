import { Component, OnInit, OnChanges } from '@angular/core';
import { Items } from '../models/items.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent implements OnInit {
  items:Items[];
  dividedAmount:any;
  amountGokul:Array<number>=[];
  indiTotalGokul:Array<number>=[0];
  amountRev:Array<number>=[];
  indiTotalRevanth:Array<number>=[0];
  loopFlag:Boolean=false;
  totalMonthSumGokul:Array<number>=[];
  totalMonthSumRev:Array<number>=[];
  finalRevanth:number=0;
  finalGokul:number=0;

  constructor(private itemsService:ItemsService) { }

  payRevanth(){
    // console.log("Gokul individual == "+ this.indiTotalGokul);
    // console.log("Revanth individual == "+ this.indiTotalRevanth);
    // console.log("Gokul total == "+ this.totalMonthSumGokul);
    // console.log("Revanth total == "+ this.totalMonthSumRev);
    this.finalRevanth= this.indiTotalRevanth[0]-this.totalMonthSumRev[0];
    //alert(this.finalRevanth);
  }
  payGokul(){
    this.finalGokul= this.indiTotalGokul[0]-this.totalMonthSumGokul[0];
    //alert(this.finalGokul);
  }

  ngOnInit() {
    this.itemsService.addGokul();
    this.totalMonthSumGokul=this.itemsService.totalGokul;
    //alert(this.totalMonthSumGokul);
    this.itemsService.addRevanth();
    this.totalMonthSumRev=this.itemsService.totalRevanth;
   // alert(this.totalMonthSumRev);
    this.items=this.itemsService.items;
      this.math1();
      this.math2();
      this.sumGokul();
      this.sumRevanth();
      this.payRevanth();
      this.payGokul();
  }


  sumGokul(){
    let sum = 0;
    for(let i=0;i<this.amountGokul.length;i++){
      sum+=this.amountGokul[i];
        //console.log('***= '+ sum);
        this.indiTotalGokul.splice(0,1,sum);
        console.log(this.indiTotalGokul);
      }
  }

  sumRevanth(){
    let sum = 0;
    for(let i=0;i<this.amountRev.length;i++){
      sum+=this.amountRev[i];
        //console.log('***= '+ sum);
        this.indiTotalRevanth.splice(0,1,sum);
        console.log(this.indiTotalRevanth);
      }
  }

  math1(){
    let i;
    this.amountGokul=[];
    this.amountRev=[];
    for(i=0;i<this.items.length;i++){
    if(this.items[i].share==='Gokul' && //probability 1 amount/2
      this.items[i].used1===true &&
     this.items[i].used2===true)
     {
       let amount1:number;
       amount1=this.items[i].amount/2;
      this.amountGokul.push(amount1);
      this.amountRev.push(amount1);
      //console.log(amount1);
     }else

    if(this.items[i].share==='Gokul' && //probability 2 amount/1
    this.items[i].used1===true &&
     this.items[i].used2===false)
     {
      let amount1:number;
      amount1=this.items[i].amount;
      this.amountGokul.push(amount1);
      this.amountRev.push(amount1*0);
     // console.log(amount1);
     }else

    if(this.items[i].share==='Gokul' && //probability 3 amount/
      this.items[i].used1===false &&
       this.items[i].used2===true )
      {
        let amount1:number;
        amount1=this.items[i].amount;
       this.amountGokul.push(amount1*0);
       this.amountRev.push(amount1);
       //console.log(amount1);
      }else

      if(this.items[i].share==='Gokul' && //probability 4
      this.items[i].used1===false &&
     this.items[i].used2===false)
     {
      this.amountGokul.push(0);
      this.amountRev.push(0);
     // console.log(this.amountGokul[i]);
     }
    }
  }


  math2(){
    let i;

    for(i=0;i<this.items.length;i++){
    if(this.items[i].share==='Revanth' && //probability 1 amount/2
      this.items[i].used2===true &&
     this.items[i].used1===true)
     {
       let amount1:number;
       amount1=this.items[i].amount/2;
      this.amountRev.push(amount1);
      this.amountGokul.push(amount1);
      //console.log(amount1);
     }else

    if(this.items[i].share==='Revanth' && //probability 2 amount/1
    this.items[i].used2===true &&
     this.items[i].used1===false)
     {
      let amount1:number;
      amount1=this.items[i].amount*1;
      this.amountRev.push(amount1);
      this.amountGokul.push(amount1*0);
      //console.log(amount1);
     }else

    if(this.items[i].share==='Revanth' && //probability 3 amount/
      this.items[i].used2===false &&
       this.items[i].used1===true)
      {
        let amount1:number;
        amount1=this.items[i].amount;
       this.amountRev.push(amount1*0);
       this.amountGokul.push(amount1);
       //console.log(amount1);
      }else

      if(this.items[i].share==='Revanth' && //probability 4
      this.items[i].used2===false &&
     this.items[i].used1===false)
     {
      this.amountRev.push(0);
      this.amountGokul.push(0);
      //console.log(this.amountRev[i]);
     }
    }
  
  }


}
