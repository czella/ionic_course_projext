import { Injectable } from '@angular/core';
import {Place} from "./place.model";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
      new Place(
          'p1',
          'Manhattan mansion',
          'In NYC',
          'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042534/Felix_Warburg_Mansion_007.jpg',
          149.99
      ),
    new Place(
        'p2',
        'French place',
        'In Paris',
        'https://www.thelocal.fr/userdata/images/1564127136_000_APP2002091059537.jpg',
        130.49
    ),
    new Place(
        'p3',
        'Budapest flat',
        'In Budapest',
        'https://previews.123rf.com/images/emelphoto/emelphoto1702/emelphoto170200174/72438376-old-buildings-of-budapest-hungary.jpg',
        100.49
    ),
  ];

  get places() {
    return[...this._places];
  }
  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
