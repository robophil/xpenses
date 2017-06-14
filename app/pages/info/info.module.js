"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var info_component_1 = require("./info.component");
var info_route_module_1 = require("./info-route.module");
var InfoModule = (function () {
    function InfoModule() {
    }
    return InfoModule;
}());
InfoModule = __decorate([
    core_1.NgModule({
        declarations: [info_component_1.InfoComponent],
        imports: [nativescript_module_1.NativeScriptModule, forms_1.NativeScriptFormsModule, info_route_module_1.InfoRouteModule],
        exports: [info_component_1.InfoComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        providers: []
    })
], InfoModule);
exports.InfoModule = InfoModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLG1EQUFpRDtBQUNqRCx5REFBc0Q7QUFTdEQsSUFBYSxVQUFVO0lBQXZCO0lBRUEsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxVQUFVO0lBUHRCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRSxDQUFDLDhCQUFhLENBQUM7UUFDN0IsT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUUsK0JBQXVCLEVBQUUsbUNBQWUsQ0FBQztRQUN2RSxPQUFPLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQ3hCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1FBQzNCLFNBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUM7R0FDVyxVQUFVLENBRXRCO0FBRlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IEluZm9Db21wb25lbnQgfSBmcm9tICcuL2luZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5mb1JvdXRlTW9kdWxlIH0gZnJvbSAnLi9pbmZvLXJvdXRlLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbSW5mb0NvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSwgSW5mb1JvdXRlTW9kdWxlXSxcclxuICAgIGV4cG9ydHM6IFtJbmZvQ29tcG9uZW50XSxcclxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxuICAgIHByb3ZpZGVyczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEluZm9Nb2R1bGUge1xyXG5cclxufVxyXG4iXX0=