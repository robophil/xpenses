"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var categories_component_1 = require("./categories.component");
var CategoriesRouteModule = (function () {
    function CategoriesRouteModule() {
    }
    return CategoriesRouteModule;
}());
CategoriesRouteModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forChild([
                { path: 'categories', component: categories_component_1.CategoriesComponent }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], CategoriesRouteModule);
exports.CategoriesRouteModule = CategoriesRouteModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy1yb3V0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yaWVzLXJvdXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsK0RBQTZEO0FBVzdELElBQWEscUJBQXFCO0lBQWxDO0lBQXFDLENBQUM7SUFBRCw0QkFBQztBQUFELENBQUMsQUFBdEMsSUFBc0M7QUFBekIscUJBQXFCO0lBVGpDLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGlDQUF3QixDQUFDLFFBQVEsQ0FBQztnQkFDaEMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRTthQUN2RCxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUNwQyxDQUFDO0dBRVcscUJBQXFCLENBQUk7QUFBekIsc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IENhdGVnb3JpZXNDb21wb25lbnQgfSBmcm9tICcuL2NhdGVnb3JpZXMuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKFtcclxuICAgICAgeyBwYXRoOiAnY2F0ZWdvcmllcycsIGNvbXBvbmVudDogQ2F0ZWdvcmllc0NvbXBvbmVudCB9XHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzUm91dGVNb2R1bGUgeyB9XHJcbiJdfQ==