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
            nativescript_ngx_slides_1.SlidesModule
        ],
        exports: [active_component_1.ActiveComponent],
        entryComponents: [add_category_component_1.AddCategoryComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        providers: []
    })
], ActiveModule);
exports.ActiveModule = ActiveModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx1REFBcUQ7QUFDckQsNkRBQTBEO0FBQzFELG1FQUF1RDtBQUN2RCx3REFBNEQ7QUFDNUQsZ0VBQThEO0FBQzlELHFGQUFrRjtBQUNsRixxRUFBcUU7QUFDckUsa0RBQXVEO0FBdUJ2RCxJQUFhLFlBQVk7SUFBekI7SUFBNEIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUE3QixJQUE2QjtBQUFoQixZQUFZO0lBcEJ4QixlQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixrQ0FBZTtZQUNmLGdDQUFjO1lBQ2Qsb0NBQW1CO1lBQ25CLDZDQUFvQjtTQUNyQjtRQUNELE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsdUNBQWlCO1lBQ2pCLG9EQUF5QjtZQUN6QixtQkFBVztZQUNYLHNDQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQzFCLGVBQWUsRUFBRSxDQUFDLDZDQUFvQixDQUFDO1FBQ3ZDLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1FBQzNCLFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztHQUNXLFlBQVksQ0FBSTtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQWN0aXZlQ29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVJvdXRlTW9kdWxlIH0gZnJvbSAnLi9hY3RpdmUtcm91dGUubW9kdWxlJztcbmltcG9ydCB7IFNsaWRlc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzJztcbmltcG9ydCB7IEFjdGl2ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3ljbGVDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvY3ljbGUvY3ljbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTlNHcmFkaWVudERpcmVjdGl2ZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmctZ3JhZGllbnRcIjtcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL21vZGFsJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBY3RpdmVDb21wb25lbnQsXG4gICAgQ3ljbGVDb21wb25lbnQsXG4gICAgQWN0aXZlVmlld0NvbXBvbmVudCxcbiAgICBBZGRDYXRlZ29yeUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIEFjdGl2ZVJvdXRlTW9kdWxlLFxuICAgIE5TR3JhZGllbnREaXJlY3RpdmVNb2R1bGUsXG4gICAgTW9kYWxNb2R1bGUsXG4gICAgU2xpZGVzTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtBY3RpdmVDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBZGRDYXRlZ29yeUNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVNb2R1bGUgeyB9XG4iXX0=