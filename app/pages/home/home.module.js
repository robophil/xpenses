"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var home_component_1 = require("./home.component");
var home_route_module_1 = require("./home-route.module");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        declarations: [home_component_1.HomeComponent],
        imports: [nativescript_module_1.NativeScriptModule, forms_1.NativeScriptFormsModule, home_route_module_1.HomeRouteModule],
        exports: [home_component_1.HomeComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        providers: []
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLG1EQUFpRDtBQUNqRCx5REFBc0Q7QUFTdEQsSUFBYSxVQUFVO0lBQXZCO0lBRUEsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxVQUFVO0lBUHRCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRSxDQUFDLDhCQUFhLENBQUM7UUFDN0IsT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUUsK0JBQXVCLEVBQUUsbUNBQWUsQ0FBQztRQUN2RSxPQUFPLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQ3hCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1FBQzNCLFNBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUM7R0FDVyxVQUFVLENBRXRCO0FBRlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVSb3V0ZU1vZHVsZSB9IGZyb20gJy4vaG9tZS1yb3V0ZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0hvbWVDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLCBIb21lUm91dGVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtIb21lQ29tcG9uZW50XSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHtcblxufVxuIl19