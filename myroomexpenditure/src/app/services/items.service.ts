import { Injectable } from '@angular/core';
import {Items} from '../models/items.model'

@Injectable()
export class ItemsService {
  amountDivGokul:Array<Number>=[];
  amountDivRev:Array<Number>=[];

  items: Items[] = [
    new Items(new Date(3/12/1022), 'milk', 'to drink',100,'Gokul',true,true),
    new Items(new Date(30/5/1022), 'rice', 'to eat', 600 ,'Revanth',true,true),
    new Items(new Date(30/5/1022), 'chicken', 'to eat', 800 ,'Gokul',false,true),
    new Items(new Date(30/5/1022), 'oil', 'to eat', 2500 ,'Revanth',true,false),
    new Items(new Date(30/5/1022), 'bag', 'to eat', 1000 ,'Gokul',false,true),
    new Items(new Date(30/5/1022), 'oil', 'to eat', 3000 ,'Revanth',false,true)

  ];

  constructor() {}

}
