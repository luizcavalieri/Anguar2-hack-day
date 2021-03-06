System.register(['angular2/platform/browser', './app.component', './map.component', './city-detail.component', 'angular2/http', 'angular2-google-maps/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, map_component_1, city_detail_component_1, http_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (city_detail_component_1_1) {
                city_detail_component_1 = city_detail_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
            browser_1.bootstrap(map_component_1.MapComponent, [core_1.ANGULAR2_GOOGLE_MAPS_PROVIDERS]);
            browser_1.bootstrap(city_detail_component_1.CityDetailComponent);
        }
    }
});
//# sourceMappingURL=main.js.map