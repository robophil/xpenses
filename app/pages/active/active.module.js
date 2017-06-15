"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var active_component_1 = require("./active.component");
var cycle_component_1 = require("./cycle/cycle.component");
var active_route_module_1 = require("./active-route.module");
var nativescript_ngx_slides_1 = require("nativescript-ngx-slides");
var create_component_1 = require("./create/create.component");
var view_component_1 = require("./view/view.component");
var slides_component_1 = require("./view/slides.component");
var ActiveModule = (function () {
    function ActiveModule() {
    }
    return ActiveModule;
}());
ActiveModule = __decorate([
    core_1.NgModule({
        declarations: [
            active_component_1.ActiveComponent,
            cycle_component_1.CycleComponent,
            create_component_1.ActiveCreateComponent,
            view_component_1.ActiveViewComponent,
            slides_component_1.ActiveSlidesComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            active_route_module_1.ActiveRouteModule,
            nativescript_ngx_slides_1.SlidesModule
        ],
        exports: [active_component_1.ActiveComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        providers: []
    })
], ActiveModule);
exports.ActiveModule = ActiveModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx1REFBcUQ7QUFDckQsMkRBQXlEO0FBQ3pELDZEQUEwRDtBQUMxRCxtRUFBdUQ7QUFDdkQsOERBQWtFO0FBQ2xFLHdEQUE0RDtBQUM1RCw0REFBZ0U7QUFvQmhFLElBQWEsWUFBWTtJQUF6QjtJQUE0QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTdCLElBQTZCO0FBQWhCLFlBQVk7SUFsQnhCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLGtDQUFlO1lBQ2YsZ0NBQWM7WUFDZCx3Q0FBcUI7WUFDckIsb0NBQW1CO1lBQ25CLHdDQUFxQjtTQUN0QjtRQUNELE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsdUNBQWlCO1lBQ2pCLHNDQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQzFCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1FBQzNCLFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztHQUNXLFlBQVksQ0FBSTtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQWN0aXZlQ29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUuY29tcG9uZW50JztcbmltcG9ydCB7IEN5Y2xlQ29tcG9uZW50IH0gZnJvbSAnLi9jeWNsZS9jeWNsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlUm91dGVNb2R1bGUgfSBmcm9tICcuL2FjdGl2ZS1yb3V0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgU2xpZGVzTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1zbGlkZXMnO1xuaW1wb3J0IHsgQWN0aXZlQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3ZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVNsaWRlc0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9zbGlkZXMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWN0aXZlQ29tcG9uZW50LFxuICAgIEN5Y2xlQ29tcG9uZW50LFxuICAgIEFjdGl2ZUNyZWF0ZUNvbXBvbmVudCxcbiAgICBBY3RpdmVWaWV3Q29tcG9uZW50LFxuICAgIEFjdGl2ZVNsaWRlc0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIEFjdGl2ZVJvdXRlTW9kdWxlLFxuICAgIFNsaWRlc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbQWN0aXZlQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZU1vZHVsZSB7IH1cbiJdfQ==