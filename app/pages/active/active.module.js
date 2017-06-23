"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var active_component_1 = require("./active.component");
var create_component_1 = require("./create/create.component");
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
            create_component_1.ActiveCreateComponent,
            view_component_1.ActiveViewComponent,
            create_component_1.DateModalComponent,
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
        entryComponents: [create_component_1.DateModalComponent],
        providers: []
    })
], ActiveModule);
exports.ActiveModule = ActiveModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx1REFBcUQ7QUFDckQsOERBQXNGO0FBQ3RGLDZEQUEwRDtBQUMxRCxtRUFBdUQ7QUFDdkQsd0RBQTREO0FBQzVELGdFQUE4RDtBQUM5RCxtRUFBdUU7QUFDdkUscUVBQXFFO0FBdUJyRSxJQUFhLFlBQVk7SUFBekI7SUFBNEIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUE3QixJQUE2QjtBQUFoQixZQUFZO0lBckJ4QixlQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixrQ0FBZTtZQUNmLGdDQUFjO1lBQ2Qsd0NBQXFCO1lBQ3JCLG9DQUFtQjtZQUNuQixxQ0FBa0I7WUFDbEIsd0NBQXFCO1NBQ3RCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qix1Q0FBaUI7WUFDakIsb0RBQXlCO1lBQ3pCLHNDQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQzFCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1FBQzNCLGVBQWUsRUFBRSxDQUFDLHFDQUFrQixDQUFDO1FBQ3JDLFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztHQUNXLFlBQVksQ0FBSTtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQWN0aXZlQ29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZUNyZWF0ZUNvbXBvbmVudCwgRGF0ZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVSb3V0ZU1vZHVsZSB9IGZyb20gJy4vYWN0aXZlLXJvdXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBTbGlkZXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LXNsaWRlcyc7XG5pbXBvcnQgeyBBY3RpdmVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3ZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEN5Y2xlQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3L2N5Y2xlL2N5Y2xlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVTbGlkZXNDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTlNHcmFkaWVudERpcmVjdGl2ZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmctZ3JhZGllbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWN0aXZlQ29tcG9uZW50LFxuICAgIEN5Y2xlQ29tcG9uZW50LFxuICAgIEFjdGl2ZUNyZWF0ZUNvbXBvbmVudCxcbiAgICBBY3RpdmVWaWV3Q29tcG9uZW50LFxuICAgIERhdGVNb2RhbENvbXBvbmVudCxcbiAgICBBY3RpdmVTbGlkZXNDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgQWN0aXZlUm91dGVNb2R1bGUsXG4gICAgTlNHcmFkaWVudERpcmVjdGl2ZU1vZHVsZSxcbiAgICBTbGlkZXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0FjdGl2ZUNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgZW50cnlDb21wb25lbnRzOiBbRGF0ZU1vZGFsQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVNb2R1bGUgeyB9XG4iXX0=