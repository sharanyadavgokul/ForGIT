import { Component, OnInit } from '@angular/core';
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
  amountGokul:Array<Number>
  amountRev:Array<Number>
  loopFlag:Boolean=false;
  constructor(private itemsService:ItemsService) { }

  ngOnInit() {
    this.items=this.itemsService.items;
    this.amountGokul=this.itemsService.amountDivGokul;
    this.amountRev=this.itemsService.amountDivRev;
      console.log(this.items);
      this.math1();
      this.math2();
      this.sum();
  }

  sum(){
    let total,sum;
    for(var i=0;i<this.amountGokul.length;i++){
      total=0;
      sum= this.amountGokul[i]+total;
      console.log(total);
    }
  }

  math1(){
    let i;
    for(i=0;i<this.items.length;i++){
    if(this.items[i].share==='Gokul' && //probability 1 amount/2
      this.items[i].used1===true &&
     this.items[i].used2===true)
     {
       let amount1:number;
       amount1=this.items[i].amount/2;
      this.amountGokul.push(amount1);
      this.amountRev.push(amount1);
      console.log(amount1);
     }else

    if(this.items[i].share==='Gokul' && //probability 2 amount/1
    this.items[i].used1===true &&
     this.items[i].used2===false)
     {
      let amount1:number;
      amount1=this.items[i].amount;
      this.amountGokul.push(amount1);
      this.amountRev.push(amount1*0);
      console.log(amount1);
     }else

    if(this.items[i].share==='Gokul' && //probability 3 amount/
      this.items[i].used1===false &&
       this.items[i].used2===true )
      {
        let amount1:number;
        amount1=this.items[i].amount;
       this.amountGokul.push(amount1*0);
       this.amountRev.push(amount1);
       console.log(amount1);
      }else

      if(this.items[i].share==='Gokul' && //probability 4
      this.items[i].used1===false &&
     this.items[i].used2===false)
     {
      this.amountGokul.push(0);
      this.amountRev.push(0);
      console.log(this.amountGokul[i]);
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
      console.log(amount1);
     }else

    if(this.items[i].share==='Revanth' && //probability 2 amount/1
    this.items[i].used2===true &&
     this.items[i].used1===false)
     {
      let amount1:number;
      amount1=this.items[i].amount*1;
      this.amountRev.push(amount1);
      this.amountGokul.push(amount1*0);
      console.log(amount1);
     }else

    if(this.items[i].share==='Revanth' && //probability 3 amount/
      this.items[i].used2===false &&
       this.items[i].used1===true)
      {
        let amount1:number;
        amount1=this.items[i].amount;
       this.amountRev.push(amount1*0);
       this.amountGokul.push(amount1);
       console.log(amount1);
      }else

      if(this.items[i].share==='Revanth' && //probability 4
      this.items[i].used2===false &&
     this.items[i].used1===false)
     {
      this.amountRev.push(0);
      this.amountGokul.push(0);
      console.log(this.amountRev[i]);
     }
    }
  }


}
