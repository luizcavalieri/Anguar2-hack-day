    import {Component} from 'angular2/core';
    import { AppService } from './app.service';
    import { Location } from './city';
    import { CityDetailComponent } from './city-detail.component';
    
    @Component({
        selector: 'my-app',
        styles: [`
            .selected {
                background-color: #CFD8DC !important;
                color: white;
                }
            .cities {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 26em;
                }
            .cities li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
                }
            .cities li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
                }
            .cities li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
                }
            .cities .text {
                position: relative;
                top: -3px;
                }
            .cities .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
                }
            `],
        template:`
                <h2>{{title}}</h2>
                <my-city-detail [city]="selectedCity"> </my-city-detail>                
                <h2>My Cities</h2>
                 <ul class="cities">
                    <li *ngFor="#city of cities"
                        [class.selected]="city === selectedCity"
                        (click)="onSelect(city)">
                        <span class="badge">{{city.City}}</span> {{city.Temperature}} | {{city.Humidity}} | {{city.Longitude}} | {{city.Latitude}}
                    </li>
                </ul>
                `,
        providers: [AppService]
    })
    export class AppComponent { 
    
        cities = this.getCityInfo();
        
        selectedCity: Location;
        
        title = "City Detail";
        
        constructor(private _appService:AppService){
            this.getCityInfo();
        }
        
        getCityInfo(){
            this._appService.getInfo()
            .subscribe((cities) => {
                this.cities = cities;
            });
            
        }
                
        onSelect(city: Location) { 
            this.selectedCity = city;
            console.log(this.selectedCity); 
        }        
        
     }
     
    
                // <select (change)="onSelect(city)">
                //     <option *ngFor="#city of cities" [value]="city.City">{{city.City}}<option>
                // </select>