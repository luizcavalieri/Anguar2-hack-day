System.register(['angular2/core', './city'], function(exports_1, context_1) {
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
    var core_1, city_1;
    var CityDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (city_1_1) {
                city_1 = city_1_1;
            }],
        execute: function() {
            CityDetailComponent = (function () {
                function CityDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', city_1.Location)
                ], CityDetailComponent.prototype, "city", void 0);
                CityDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-city-detail',
                        template: "\n    <div *ngIf=\"city\">\n      <h2>{{city.City}} details!</h2>\n      <div><label>City: </label>{{city.City}}</div>\n      <div>\n        <label>City: </label>\n        <input [(ngModel)]=\"city.City\" placeholder=\"name\"/>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CityDetailComponent);
                return CityDetailComponent;
            }());
            exports_1("CityDetailComponent", CityDetailComponent);
        }
    }
});
//# sourceMappingURL=city-detail.component.js.map