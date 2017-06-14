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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN5Y2xlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx1REFBcUQ7QUFDckQsNkRBQTBEO0FBUzFELElBQWEsWUFBWTtJQUF6QjtJQUVBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksWUFBWTtJQVB4QixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQy9CLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixFQUFFLCtCQUF1QixFQUFFLHVDQUFpQixDQUFDO1FBQ3pFLE9BQU8sRUFBRSxDQUFDLGtDQUFlLENBQUM7UUFDMUIsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7UUFDM0IsU0FBUyxFQUFFLEVBQUU7S0FDaEIsQ0FBQztHQUNXLFlBQVksQ0FFeEI7QUFGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQ3ljbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9jeWNsZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3ljbGVzUm91dGVNb2R1bGUgfSBmcm9tICcuL2N5Y2xlcy1yb3V0ZS5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0N5Y2xlc0NvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSwgQ3ljbGVzUm91dGVNb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW0N5Y2xlc0NvbXBvbmVudF0sXHJcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbiAgICBwcm92aWRlcnM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDeWNsZXNNb2R1bGUge1xyXG5cclxufVxyXG4iXX0=