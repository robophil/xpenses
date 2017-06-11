"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var expenses_component_1 = require("./expenses.component");
var expenses_route_module_1 = require("./expenses-route.module");
var ExpensesModule = (function () {
    function ExpensesModule() {
    }
    return ExpensesModule;
}());
ExpensesModule = __decorate([
    core_1.NgModule({
        declarations: [expenses_component_1.ExpensesComponent],
        imports: [nativescript_module_1.NativeScriptModule, forms_1.NativeScriptFormsModule, expenses_route_module_1.ExpensesRouteModule],
        exports: [expenses_component_1.ExpensesComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        providers: []
    })
], ExpensesModule);
exports.ExpensesModule = ExpensesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELG9EQUFxRTtBQUNyRSxnRkFBOEU7QUFDOUUsMkRBQXlEO0FBQ3pELGlFQUE4RDtBQVM5RCxJQUFhLGNBQWM7SUFBM0I7SUFFQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLGNBQWM7SUFQMUIsZUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFLENBQUMsc0NBQWlCLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUUsK0JBQXVCLEVBQUUsMkNBQW1CLENBQUM7UUFDM0UsT0FBTyxFQUFFLENBQUMsc0NBQWlCLENBQUM7UUFDNUIsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7UUFDM0IsU0FBUyxFQUFFLEVBQUU7S0FDaEIsQ0FBQztHQUNXLGNBQWMsQ0FFMUI7QUFGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgRXhwZW5zZXNDb21wb25lbnQgfSBmcm9tICcuL2V4cGVuc2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBlbnNlc1JvdXRlTW9kdWxlIH0gZnJvbSAnLi9leHBlbnNlcy1yb3V0ZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0V4cGVuc2VzQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSwgRXhwZW5zZXNSb3V0ZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW0V4cGVuc2VzQ29tcG9uZW50XSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBFeHBlbnNlc01vZHVsZSB7XG5cbn1cbiJdfQ==