"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var home_component_1 = require("./home.component");
var home_route_module_1 = require("./home-route.module");
var nativescript_ng_gradient_1 = require("nativescript-ng-gradient");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        declarations: [home_component_1.HomeComponent],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            home_route_module_1.HomeRouteModule,
            nativescript_ng_gradient_1.NSGradientDirectiveModule
        ],
        exports: [home_component_1.HomeComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        providers: []
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLG1EQUFpRDtBQUNqRCx5REFBc0Q7QUFDdEQscUVBQXFFO0FBY3JFLElBQWEsVUFBVTtJQUF2QjtJQUVBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksVUFBVTtJQVp0QixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQzdCLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsbUNBQWU7WUFDZixvREFBeUI7U0FDMUI7UUFDRCxPQUFPLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQ3hCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1FBQzNCLFNBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUM7R0FDVyxVQUFVLENBRXRCO0FBRlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVSb3V0ZU1vZHVsZSB9IGZyb20gJy4vaG9tZS1yb3V0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgTlNHcmFkaWVudERpcmVjdGl2ZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmctZ3JhZGllbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtIb21lQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgIEhvbWVSb3V0ZU1vZHVsZSxcbiAgICAgIE5TR3JhZGllbnREaXJlY3RpdmVNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtIb21lQ29tcG9uZW50XSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHtcblxufVxuIl19