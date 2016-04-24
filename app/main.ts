import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {MapComponent} from './map.component';
import {CityDetailComponent} from './city-detail.component';
import { HTTP_PROVIDERS } from 'angular2/http';
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';

bootstrap(AppComponent, [HTTP_PROVIDERS] );
bootstrap(MapComponent, [ANGULAR2_GOOGLE_MAPS_PROVIDERS]);
bootstrap(CityDetailComponent);