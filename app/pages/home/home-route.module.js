"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home.component");
var HomeRouteModule = (function () {
    function HomeRouteModule() {
    }
    return HomeRouteModule;
}());
HomeRouteModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forChild([
                { path: 'home', component: home_component_1.HomeComponent }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], HomeRouteModule);
exports.HomeRouteModule = HomeRouteModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1yb3V0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLXJvdXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsbURBQWlEO0FBV2pELElBQWEsZUFBZTtJQUE1QjtJQUErQixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBQWhDLElBQWdDO0FBQW5CLGVBQWU7SUFUM0IsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsaUNBQXdCLENBQUMsUUFBUSxDQUFDO2dCQUNoQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7YUFDM0MsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDcEMsQ0FBQztHQUVXLGVBQWUsQ0FBSTtBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcbiAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxyXG4gICAgXSlcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRlTW9kdWxlIHsgfVxyXG4iXX0=