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
var slides_component_1 = require("./slides/slides.component");
var open_component_1 = require("./open/open.component");
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
            open_component_1.ActiveOpenComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx1REFBcUQ7QUFDckQsMkRBQXlEO0FBQ3pELDZEQUEwRDtBQUMxRCxtRUFBdUQ7QUFDdkQsOERBQWtFO0FBQ2xFLHdEQUE0RDtBQUM1RCw4REFBa0U7QUFDbEUsd0RBQTREO0FBcUI1RCxJQUFhLFlBQVk7SUFBekI7SUFBNEIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUE3QixJQUE2QjtBQUFoQixZQUFZO0lBbkJ4QixlQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixrQ0FBZTtZQUNmLGdDQUFjO1lBQ2Qsd0NBQXFCO1lBQ3JCLG9DQUFtQjtZQUNuQixvQ0FBbUI7WUFDbkIsd0NBQXFCO1NBQ3RCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qix1Q0FBaUI7WUFDakIsc0NBQVk7U0FDYjtRQUNELE9BQU8sRUFBRSxDQUFDLGtDQUFlLENBQUM7UUFDMUIsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7UUFDM0IsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0dBQ1csWUFBWSxDQUFJO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBY3RpdmVDb21wb25lbnQgfSBmcm9tICcuL2FjdGl2ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3ljbGVDb21wb25lbnQgfSBmcm9tICcuL2N5Y2xlL2N5Y2xlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVSb3V0ZU1vZHVsZSB9IGZyb20gJy4vYWN0aXZlLXJvdXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBTbGlkZXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LXNsaWRlcyc7XG5pbXBvcnQgeyBBY3RpdmVDcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlU2xpZGVzQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZXMvc2xpZGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVPcGVuQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuL29wZW4uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWN0aXZlQ29tcG9uZW50LFxuICAgIEN5Y2xlQ29tcG9uZW50LFxuICAgIEFjdGl2ZUNyZWF0ZUNvbXBvbmVudCxcbiAgICBBY3RpdmVPcGVuQ29tcG9uZW50LFxuICAgIEFjdGl2ZVZpZXdDb21wb25lbnQsXG4gICAgQWN0aXZlU2xpZGVzQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgQWN0aXZlUm91dGVNb2R1bGUsXG4gICAgU2xpZGVzTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtBY3RpdmVDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlTW9kdWxlIHsgfVxuIl19