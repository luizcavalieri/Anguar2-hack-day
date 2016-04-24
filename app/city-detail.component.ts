import {Component, Input} from 'angular2/core';

import {Location} from './city';

@Component({
  selector: 'my-city-detail',
  template: `
    <div *ngIf="city">
      <h2>{{city.City}} details!</h2>
      <div><label>City: </label>{{city.City}}</div>
      <div>
        <label>City: </label>
        <input [(ngModel)]="city.City" placeholder="name"/>
      </div>
    </div>
  `
})
export class CityDetailComponent {
  @Input() 
  city: Location;
}
