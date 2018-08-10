import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})

export class MonthlyComponent implements OnInit {
  totalSumGokul:Array<number>=[];
  totalSumRevanth:Array<number>=[];
  constructor(private itemService:ItemsService) { }

  ngOnInit() {
    this.itemService.addGokul();
    this.totalSumGokul=this.itemService.totalGokul;

    this.itemService.addRevanth();
    this.totalSumRevanth=this.itemService.totalRevanth;
  }
  
}
