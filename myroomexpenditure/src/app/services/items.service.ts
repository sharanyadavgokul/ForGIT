import { Injectable } from '@angular/core';
import {Items} from '../models/items.model'

@Injectable()
export class ItemsService {
  amountDivGokul:Array<number>=[];
  amountDivRev:Array<number>=[];
  totalGokul:Array<number>= [0];
  totalRevanth:Array<number>= [0];
  localD:Items[] = [];

  items: Items[] = [
    // new Items(new Date(3/12/1022), 'milk', 'to drink',100,'Gokul',true,true),
    // new Items(new Date(30/5/1022), 'rice', 'to eat', 600 ,'Revanth',true,true),
    // new Items(new Date(30/5/1022), 'chicken', 'to eat', 800 ,'Gokul',false,true),
    // new Items(new Date(30/5/1022), 'oil', 'to eat', 2500 ,'Revanth',true,false),
    // new Items(new Date(30/5/1022), 'bag', 'to eat', 1000 ,'Gokul',false,true),
    // new Items(new Date(30/5/1022), 'oil', 'to eat', 3000 ,'Revanth',false,true)
  ];

  toLocal(){
    var localData, localIn, localOut,lOut, lIn;
    //push the data to the local storage
     localData=JSON.stringify(this.localD);
     localIn = localStorage.setItem('itemsData',localData); 
     console.log('this is localIn === '+localIn);

     //get the data from local storage and push data to items array
     for(let i=0;i<localOut.length;i++){
     localOut= JSON.parse(localStorage.getItem('itemsData'));
     lOut=localOut;
      this.items.push(localOut[i]);
     }
    console.log('this is items === '+this.items[0].amount);
  }

  addGokul(){
    var sum = 0;
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].share==='Gokul'){
        sum += this.items[i].amount;
        console.log('Total GOKUL = '+sum);
        this.totalGokul.splice(0,1,sum);
      }
  }
  console.log('ArrayGOKUL = = '+this.totalGokul[0]);
  }

  addRevanth(){
    var sum = 0;
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].share==='Revanth'){
        sum += this.items[i].amount;
        console.log('Total Revanth = '+sum);
        this.totalRevanth.splice(0,1,sum);
      }
  }
  console.log('ArrayREVANTH = = '+this.totalRevanth[0]);
  }

  constructor() {
  
  }

}

