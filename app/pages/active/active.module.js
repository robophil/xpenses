"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var active_component_1 = require("./active.component");
var active_route_module_1 = require("./active-route.module");
var nativescript_ngx_slides_1 = require("nativescript-ngx-slides");
var view_component_1 = require("./view/view.component");
var cycle_component_1 = require("./view/cycle/cycle.component");
var slides_component_1 = require("./view/slides/slides.component");
var nativescript_ng_gradient_1 = require("nativescript-ng-gradient");
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
            view_component_1.ActiveViewComponent,
            slides_component_1.ActiveSlidesComponent,
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            active_route_module_1.ActiveRouteModule,
            nativescript_ng_gradient_1.NSGradientDirectiveModule,
            nativescript_ngx_slides_1.SlidesModule
        ],
        exports: [active_component_1.ActiveComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        providers: []
    })
], ActiveModule);
exports.ActiveModule = ActiveModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx1REFBcUQ7QUFDckQsNkRBQTBEO0FBQzFELG1FQUF1RDtBQUN2RCx3REFBNEQ7QUFDNUQsZ0VBQThEO0FBQzlELG1FQUF1RTtBQUN2RSxxRUFBcUU7QUFvQnJFLElBQWEsWUFBWTtJQUF6QjtJQUE0QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTdCLElBQTZCO0FBQWhCLFlBQVk7SUFsQnhCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLGtDQUFlO1lBQ2YsZ0NBQWM7WUFDZCxvQ0FBbUI7WUFDbkIsd0NBQXFCO1NBQ3RCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qix1Q0FBaUI7WUFDakIsb0RBQXlCO1lBQ3pCLHNDQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQzFCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1FBQzNCLFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztHQUNXLFlBQVksQ0FBSTtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQWN0aXZlQ29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVJvdXRlTW9kdWxlIH0gZnJvbSAnLi9hY3RpdmUtcm91dGUubW9kdWxlJztcbmltcG9ydCB7IFNsaWRlc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzJztcbmltcG9ydCB7IEFjdGl2ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3ljbGVDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvY3ljbGUvY3ljbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVNsaWRlc0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9zbGlkZXMvc2xpZGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOU0dyYWRpZW50RGlyZWN0aXZlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZy1ncmFkaWVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBY3RpdmVDb21wb25lbnQsXG4gICAgQ3ljbGVDb21wb25lbnQsXG4gICAgQWN0aXZlVmlld0NvbXBvbmVudCxcbiAgICBBY3RpdmVTbGlkZXNDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgQWN0aXZlUm91dGVNb2R1bGUsXG4gICAgTlNHcmFkaWVudERpcmVjdGl2ZU1vZHVsZSxcbiAgICBTbGlkZXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0FjdGl2ZUNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVNb2R1bGUgeyB9XG4iXX0=