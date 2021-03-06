System.register(['angular2/core', './app.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_appService) {
                    this._appService = _appService;
                    this.cities = this.getCityInfo();
                    this.title = "City Detail";
                    this.getCityInfo();
                }
                AppComponent.prototype.getCityInfo = function () {
                    var _this = this;
                    this._appService.getInfo()
                        .subscribe(function (cities) {
                        _this.cities = cities;
                    });
                };
                AppComponent.prototype.onSelect = function (city) {
                    this.selectedCity = city;
                    console.log(this.selectedCity);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: ["\n            .selected {\n                background-color: #CFD8DC !important;\n                color: white;\n                }\n            .cities {\n                margin: 0 0 2em 0;\n                list-style-type: none;\n                padding: 0;\n                width: 26em;\n                }\n            .cities li {\n                cursor: pointer;\n                position: relative;\n                left: 0;\n                background-color: #EEE;\n                margin: .5em;\n                padding: .3em 0;\n                height: 1.6em;\n                border-radius: 4px;\n                }\n            .cities li.selected:hover {\n                background-color: #BBD8DC !important;\n                color: white;\n                }\n            .cities li:hover {\n                color: #607D8B;\n                background-color: #DDD;\n                left: .1em;\n                }\n            .cities .text {\n                position: relative;\n                top: -3px;\n                }\n            .cities .badge {\n                display: inline-block;\n                font-size: small;\n                color: white;\n                padding: 0.8em 0.7em 0 0.7em;\n                background-color: #607D8B;\n                line-height: 1em;\n                position: relative;\n                left: -1px;\n                top: -4px;\n                height: 1.8em;\n                margin-right: .8em;\n                border-radius: 4px 0 0 4px;\n                }\n            "],
                        template: "\n                <h2>{{title}}</h2>\n                <my-city-detail [city]=\"selectedCity\"> </my-city-detail>                \n                <h2>My Cities</h2>\n                 <ul class=\"cities\">\n                    <li *ngFor=\"#city of cities\"\n                        [class.selected]=\"city === selectedCity\"\n                        (click)=\"onSelect(city)\">\n                        <span class=\"badge\">{{city.City}}</span> {{city.Temperature}} | {{city.Humidity}} | {{city.Longitude}} | {{city.Latitude}}\n                    </li>\n                </ul>\n                ",
                        providers: [app_service_1.AppService]
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
// <select (change)="onSelect(city)">
//     <option *ngFor="#city of cities" [value]="city.City">{{city.City}}<option>
// </select> 
//# sourceMappingURL=app.component.js.map