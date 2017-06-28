"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var main_component_1 = require("./main.component");
var main_route_module_1 = require("./main-route.module");
var nativescript_ng_gradient_1 = require("nativescript-ng-gradient");
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        declarations: [main_component_1.MainComponent],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            main_route_module_1.MainRouteModule,
            nativescript_ng_gradient_1.NSGradientDirectiveModule
        ],
        exports: [main_component_1.MainComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        providers: []
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLG1EQUFpRDtBQUNqRCx5REFBc0Q7QUFDdEQscUVBQXFFO0FBY3JFLElBQWEsVUFBVTtJQUF2QjtJQUVBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksVUFBVTtJQVp0QixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQzdCLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsbUNBQWU7WUFDZixvREFBeUI7U0FDMUI7UUFDRCxPQUFPLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQ3hCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1FBQzNCLFNBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUM7R0FDVyxVQUFVLENBRXRCO0FBRlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tICcuL21haW4uY29tcG9uZW50JztcbmltcG9ydCB7IE1haW5Sb3V0ZU1vZHVsZSB9IGZyb20gJy4vbWFpbi1yb3V0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgTlNHcmFkaWVudERpcmVjdGl2ZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmctZ3JhZGllbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtNYWluQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgIE1haW5Sb3V0ZU1vZHVsZSxcbiAgICAgIE5TR3JhZGllbnREaXJlY3RpdmVNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtNYWluQ29tcG9uZW50XSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluTW9kdWxlIHtcblxufVxuIl19