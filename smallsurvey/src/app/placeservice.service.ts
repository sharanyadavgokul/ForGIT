import { Injectable } from '@angular/core';
import { Places } from './models/places.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceserviceService {

  place:Places[]=[
    new Places('Guhantara','Hosahalli',   
     'https://www.thrillophilia.com/tours/day-out-at-guhantara-bangalore','../assets/resort1.jpg'),
    new Places('Eagleton','Herman Miller',
    'https://www.makemytrip.com/hotels/eagleton_the_golf_resort-details-bangalore.html','../assets/resort2.jpg'),
    new Places('Urban Valley','Kanakapur',
    'https://www.thrillophilia.com/tours/day-out-at-urban-valley-bangalore' ,'../assets/resort3.jpg'),
    new Places('Golden Palms','btm layut',
    'https://www.thrillophilia.com/tours/day-out-at-golden-palms-bangalore','../assets/resort4.jpg'),
    new Places('Movies','marathahalli',
    'https://in.bookmyshow.com/bengaluru/movies','../assets/movie.jpg'),
    new Places('Wonderla','wonderla',
    'http://www.wonderla.com/bangalore-amusement-park/','../assets/wonderla.jpg'),
    new Places('Trekking','Trekking',
    'https://www.thrillophilia.com/bangalore-trekking','../assets/trekking.jpg'),
    new Places('Dinner','btm layut',
    'https://www.zomato.com/bangalore/best-buffet','../assets/dinner.jpg'),
  ]; 
  constructor() { }
}
