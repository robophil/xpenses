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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy1yb3V0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yaWVzLXJvdXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsK0RBQTZEO0FBVzdELElBQWEscUJBQXFCO0lBQWxDO0lBQXFDLENBQUM7SUFBRCw0QkFBQztBQUFELENBQUMsQUFBdEMsSUFBc0M7QUFBekIscUJBQXFCO0lBVGpDLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGlDQUF3QixDQUFDLFFBQVEsQ0FBQztnQkFDaEMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRTthQUN2RCxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUNwQyxDQUFDO0dBRVcscUJBQXFCLENBQUk7QUFBekIsc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENhdGVnb3JpZXNDb21wb25lbnQgfSBmcm9tICcuL2NhdGVnb3JpZXMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7IHBhdGg6ICdjYXRlZ29yaWVzJywgY29tcG9uZW50OiBDYXRlZ29yaWVzQ29tcG9uZW50IH1cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNSb3V0ZU1vZHVsZSB7IH1cbiJdfQ==