"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var cycles_component_1 = require("./cycles.component");
var cycles_route_module_1 = require("./cycles-route.module");
var CyclesModule = (function () {
    function CyclesModule() {
    }
    return CyclesModule;
}());
CyclesModule = __decorate([
    core_1.NgModule({
        declarations: [cycles_component_1.CyclesComponent],
        imports: [nativescript_module_1.NativeScriptModule, forms_1.NativeScriptFormsModule, cycles_route_module_1.CyclesRouteModule],
        exports: [cycles_component_1.CyclesComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        providers: []
    })
], CyclesModule);
exports.CyclesModule = CyclesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN5Y2xlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx1REFBcUQ7QUFDckQsNkRBQTBEO0FBUzFELElBQWEsWUFBWTtJQUF6QjtJQUVBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksWUFBWTtJQVB4QixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQy9CLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixFQUFFLCtCQUF1QixFQUFFLHVDQUFpQixDQUFDO1FBQ3pFLE9BQU8sRUFBRSxDQUFDLGtDQUFlLENBQUM7UUFDMUIsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7UUFDM0IsU0FBUyxFQUFFLEVBQUU7S0FDaEIsQ0FBQztHQUNXLFlBQVksQ0FFeEI7QUFGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQ3ljbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9jeWNsZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEN5Y2xlc1JvdXRlTW9kdWxlIH0gZnJvbSAnLi9jeWNsZXMtcm91dGUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtDeWNsZXNDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLCBDeWNsZXNSb3V0ZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW0N5Y2xlc0NvbXBvbmVudF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ3ljbGVzTW9kdWxlIHtcblxufVxuIl19