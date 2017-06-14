"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var active_component_1 = require("./active.component");
var cycle_component_1 = require("./cycle/cycle.component");
var active_route_module_1 = require("./active-route.module");
var nativescript_ngx_slides_1 = require("nativescript-ngx-slides");
// import { ActiveCreateComponent } from './create/create.component';
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
// import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// import { NativeScriptModule } from "nativescript-angular/nativescript.module";
// import { ActiveComponent } from './active.component';
// import { CycleComponent } from './cycle/cycle.component';
// import { ActiveRouteModule } from './active-route.module';
// @NgModule({
//     declarations: [ActiveComponent, CycleComponent],
//     imports: [NativeScriptModule, NativeScriptFormsModule, ActiveRouteModule],
//     exports: [ActiveComponent],
//     schemas: [NO_ERRORS_SCHEMA],
//     providers: []
// })
// export class ActiveModule {
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx1REFBcUQ7QUFDckQsMkRBQXlEO0FBQ3pELDZEQUEwRDtBQUMxRCxtRUFBdUQ7QUFDdkQscUVBQXFFO0FBa0JyRSxJQUFhLFlBQVk7SUFBekI7SUFFQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFlBQVk7SUFoQnhCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLGtDQUFlO1lBQ2YsZ0NBQWM7U0FFZjtRQUNELE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsdUNBQWlCO1lBQ2pCLHNDQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQzFCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1FBQzNCLFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztHQUNXLFlBQVksQ0FFeEI7QUFGWSxvQ0FBWTtBQUd6Qiw4REFBOEQ7QUFDOUQsd0VBQXdFO0FBQ3hFLGlGQUFpRjtBQUNqRix3REFBd0Q7QUFDeEQsNERBQTREO0FBQzVELDZEQUE2RDtBQUU3RCxjQUFjO0FBQ2QsdURBQXVEO0FBQ3ZELGlGQUFpRjtBQUNqRixrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DLG9CQUFvQjtBQUNwQixLQUFLO0FBQ0wsOEJBQThCO0FBRTlCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFjdGl2ZUNvbXBvbmVudCB9IGZyb20gJy4vYWN0aXZlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDeWNsZUNvbXBvbmVudCB9IGZyb20gJy4vY3ljbGUvY3ljbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVJvdXRlTW9kdWxlIH0gZnJvbSAnLi9hY3RpdmUtcm91dGUubW9kdWxlJztcbmltcG9ydCB7IFNsaWRlc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzJztcbi8vIGltcG9ydCB7IEFjdGl2ZUNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBY3RpdmVDb21wb25lbnQsXG4gICAgQ3ljbGVDb21wb25lbnQsXG4gICAgLy8gQWN0aXZlQ3JlYXRlQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgQWN0aXZlUm91dGVNb2R1bGUsXG4gICAgU2xpZGVzTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtBY3RpdmVDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlTW9kdWxlIHtcblxufVxuLy8gaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG4vLyBpbXBvcnQgeyBBY3RpdmVDb21wb25lbnQgfSBmcm9tICcuL2FjdGl2ZS5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgQ3ljbGVDb21wb25lbnQgfSBmcm9tICcuL2N5Y2xlL2N5Y2xlLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBBY3RpdmVSb3V0ZU1vZHVsZSB9IGZyb20gJy4vYWN0aXZlLXJvdXRlLm1vZHVsZSc7XG5cbi8vIEBOZ01vZHVsZSh7XG4vLyAgICAgZGVjbGFyYXRpb25zOiBbQWN0aXZlQ29tcG9uZW50LCBDeWNsZUNvbXBvbmVudF0sXG4vLyAgICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSwgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIEFjdGl2ZVJvdXRlTW9kdWxlXSxcbi8vICAgICBleHBvcnRzOiBbQWN0aXZlQ29tcG9uZW50XSxcbi8vICAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4vLyAgICAgcHJvdmlkZXJzOiBbXVxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBBY3RpdmVNb2R1bGUge1xuXG4vLyB9XG4iXX0=