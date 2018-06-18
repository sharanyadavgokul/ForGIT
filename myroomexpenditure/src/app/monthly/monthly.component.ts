import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})

export class MonthlyComponent implements OnInit {
  summ:number;
  constructor(private itemService:ItemsService) { }

  ngOnInit() {
    this.sum();
    // console.log(this.summ);
  }

  sum(){
    var i, total;
    for (i=0;i<=this.itemService.amountDivGokul.length;i++){
      total=this.itemService.amountDivGokul[i]+total;
      console.log(this.itemService.amountDivGokul[i]);  
      console.log(total);
    }
  }
}
