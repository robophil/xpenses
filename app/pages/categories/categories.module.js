"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var categories_component_1 = require("./categories.component");
var categories_route_module_1 = require("./categories-route.module");
var modal_1 = require("./../../components/modal");
var create_modal_component_1 = require("./create-modal.component");
var CategoriesModule = (function () {
    function CategoriesModule() {
    }
    return CategoriesModule;
}());
CategoriesModule = __decorate([
    core_1.NgModule({
        declarations: [
            categories_component_1.CategoriesComponent,
            create_modal_component_1.CreateModalComponent,
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            modal_1.ModalModule,
            categories_route_module_1.CategoriesRouteModule
        ],
        exports: [categories_component_1.CategoriesComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        entryComponents: [create_modal_component_1.CreateModalComponent],
        providers: []
    })
], CategoriesModule);
exports.CategoriesModule = CategoriesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yaWVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLCtEQUE2RDtBQUM3RCxxRUFBa0U7QUFDbEUsa0RBQXVEO0FBQ3ZELG1FQUFnRTtBQWtCaEUsSUFBYSxnQkFBZ0I7SUFBN0I7SUFFQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLGdCQUFnQjtJQWhCNUIsZUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1osMENBQW1CO1lBQ25CLDZDQUFvQjtTQUNyQjtRQUNELE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsbUJBQVc7WUFDWCwrQ0FBcUI7U0FDdEI7UUFDRCxPQUFPLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztRQUM5QixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztRQUMzQixlQUFlLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztRQUN2QyxTQUFTLEVBQUUsRUFBRTtLQUNoQixDQUFDO0dBQ1csZ0JBQWdCLENBRTVCO0FBRlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBDYXRlZ29yaWVzQ29tcG9uZW50IH0gZnJvbSAnLi9jYXRlZ29yaWVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXRlZ29yaWVzUm91dGVNb2R1bGUgfSBmcm9tICcuL2NhdGVnb3JpZXMtcm91dGUubW9kdWxlJztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL21vZGFsJztcbmltcG9ydCB7IENyZWF0ZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jcmVhdGUtbW9kYWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIENhdGVnb3JpZXNDb21wb25lbnQsXG4gICAgICBDcmVhdGVNb2RhbENvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgTW9kYWxNb2R1bGUsXG4gICAgICBDYXRlZ29yaWVzUm91dGVNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtDYXRlZ29yaWVzQ29tcG9uZW50XSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbQ3JlYXRlTW9kYWxDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc01vZHVsZSB7XG5cbn1cbiJdfQ==