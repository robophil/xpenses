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
        entryComponents: [create_component_1.DateModalComponent],
        providers: []
    })
], ActiveModule);
exports.ActiveModule = ActiveModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx1REFBcUQ7QUFDckQsOERBQXNGO0FBQ3RGLDZEQUEwRDtBQUMxRCxtRUFBdUQ7QUFDdkQsd0RBQTREO0FBQzVELGdFQUE4RDtBQUM5RCxtRUFBdUU7QUFzQnZFLElBQWEsWUFBWTtJQUF6QjtJQUE0QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTdCLElBQTZCO0FBQWhCLFlBQVk7SUFwQnhCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLGtDQUFlO1lBQ2YsZ0NBQWM7WUFDZCx3Q0FBcUI7WUFDckIsb0NBQW1CO1lBQ25CLHFDQUFrQjtZQUNsQix3Q0FBcUI7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLHVDQUFpQjtZQUNqQixzQ0FBWTtTQUNiO1FBQ0QsT0FBTyxFQUFFLENBQUMsa0NBQWUsQ0FBQztRQUMxQixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztRQUMzQixlQUFlLEVBQUUsQ0FBQyxxQ0FBa0IsQ0FBQztRQUNyQyxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7R0FDVyxZQUFZLENBQUk7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFjdGl2ZUNvbXBvbmVudCB9IGZyb20gJy4vYWN0aXZlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVDcmVhdGVDb21wb25lbnQsIERhdGVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlUm91dGVNb2R1bGUgfSBmcm9tICcuL2FjdGl2ZS1yb3V0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgU2xpZGVzTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1zbGlkZXMnO1xuaW1wb3J0IHsgQWN0aXZlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy92aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDeWNsZUNvbXBvbmVudCB9IGZyb20gJy4vdmlldy9jeWNsZS9jeWNsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlU2xpZGVzQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3NsaWRlcy9zbGlkZXMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWN0aXZlQ29tcG9uZW50LFxuICAgIEN5Y2xlQ29tcG9uZW50LFxuICAgIEFjdGl2ZUNyZWF0ZUNvbXBvbmVudCxcbiAgICBBY3RpdmVWaWV3Q29tcG9uZW50LFxuICAgIERhdGVNb2RhbENvbXBvbmVudCxcbiAgICBBY3RpdmVTbGlkZXNDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBBY3RpdmVSb3V0ZU1vZHVsZSxcbiAgICBTbGlkZXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0FjdGl2ZUNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgZW50cnlDb21wb25lbnRzOiBbRGF0ZU1vZGFsQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVNb2R1bGUgeyB9XG4iXX0=