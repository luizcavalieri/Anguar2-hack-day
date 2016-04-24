import { Http } from 'angular2/http';
import {Injectable } from 'angular2/core';
import { Observable } from 'rxjs/rx';
import {City} from './city';


import 'rxjs/add/operator/map';


@Injectable()
export class AppService {

    constructor(private _http:Http) {
        
    }
    
    // getTodos(){
    //     return 'Luiz';
    // }
    
    getInfo(){
        return this._http.get('http://hackdayapi.azurewebsites.net/api/Weather')
        .map((response) => response.json());
    }
    
    
}