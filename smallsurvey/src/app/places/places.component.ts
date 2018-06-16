import { Component, OnInit, Input } from '@angular/core';

import {Places} from '../models/places.model';
import { PlaceserviceService } from '../placeservice.service';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  place:Places[];
  
  // place2:Places2[]=[
  //   new Places2('movie','marathahalli',10000,'../assets/resort1.jpg'),
  //   new Places2('wonderla','whitefiled',20000,'../assets/resort2.jpg'),
  //   new Places2('Trekking','silkboard',30000,'../assets/resort3.jpg'),
  //   new Places2('Dinner','btm layut',40000,'../assets/resort4.jpg'),
  // ];


  constructor(private placeService:PlaceserviceService) { }

  ngOnInit() {
    this.place=this.placeService.place;
  }
  


}
