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
var add_category_component_1 = require("./view/add-category/add-category.component");
var nativescript_ng_gradient_1 = require("nativescript-ng-gradient");
var modal_1 = require("./../../components/modal");
var angular_1 = require("nativescript-drop-down/angular");
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
            add_category_component_1.AddCategoryComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            active_route_module_1.ActiveRouteModule,
            nativescript_ng_gradient_1.NSGradientDirectiveModule,
            modal_1.ModalModule,
            angular_1.DropDownModule,
            nativescript_ngx_slides_1.SlidesModule
        ],
        exports: [active_component_1.ActiveComponent],
        entryComponents: [add_category_component_1.AddCategoryComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        providers: []
    })
], ActiveModule);
exports.ActiveModule = ActiveModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx1REFBcUQ7QUFDckQsNkRBQTBEO0FBQzFELG1FQUF1RDtBQUN2RCx3REFBNEQ7QUFDNUQsZ0VBQThEO0FBQzlELHFGQUFrRjtBQUNsRixxRUFBcUU7QUFDckUsa0RBQXVEO0FBQ3ZELDBEQUFnRTtBQXVCaEUsSUFBYSxZQUFZO0lBQXpCO0lBQTRCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFBN0IsSUFBNkI7QUFBaEIsWUFBWTtJQXJCeEIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osa0NBQWU7WUFDZixnQ0FBYztZQUNkLG9DQUFtQjtZQUNuQiw2Q0FBb0I7U0FDckI7UUFDRCxPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLHVDQUFpQjtZQUNqQixvREFBeUI7WUFDekIsbUJBQVc7WUFDWCx3QkFBYztZQUNkLHNDQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQzFCLGVBQWUsRUFBRSxDQUFDLDZDQUFvQixDQUFDO1FBQ3ZDLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1FBQzNCLFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztHQUNXLFlBQVksQ0FBSTtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQWN0aXZlQ29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVJvdXRlTW9kdWxlIH0gZnJvbSAnLi9hY3RpdmUtcm91dGUubW9kdWxlJztcbmltcG9ydCB7IFNsaWRlc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzJztcbmltcG9ydCB7IEFjdGl2ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3ljbGVDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvY3ljbGUvY3ljbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTlNHcmFkaWVudERpcmVjdGl2ZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmctZ3JhZGllbnRcIjtcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL21vZGFsJztcbmltcG9ydCB7IERyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWN0aXZlQ29tcG9uZW50LFxuICAgIEN5Y2xlQ29tcG9uZW50LFxuICAgIEFjdGl2ZVZpZXdDb21wb25lbnQsXG4gICAgQWRkQ2F0ZWdvcnlDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBBY3RpdmVSb3V0ZU1vZHVsZSxcbiAgICBOU0dyYWRpZW50RGlyZWN0aXZlTW9kdWxlLFxuICAgIE1vZGFsTW9kdWxlLFxuICAgIERyb3BEb3duTW9kdWxlLFxuICAgIFNsaWRlc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbQWN0aXZlQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQWRkQ2F0ZWdvcnlDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlTW9kdWxlIHsgfVxuIl19