"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var categories_component_1 = require("./categories.component");
var categories_route_module_1 = require("./categories-route.module");
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
            categories_route_module_1.CategoriesRouteModule
        ],
        exports: [categories_component_1.CategoriesComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        entryComponents: [create_modal_component_1.CreateModalComponent],
        providers: []
    })
], CategoriesModule);
exports.CategoriesModule = CategoriesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yaWVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLCtEQUE2RDtBQUM3RCxxRUFBa0U7QUFDbEUsbUVBQWdFO0FBaUJoRSxJQUFhLGdCQUFnQjtJQUE3QjtJQUVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksZ0JBQWdCO0lBZjVCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNaLDBDQUFtQjtZQUNuQiw2Q0FBb0I7U0FDckI7UUFDRCxPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLCtDQUFxQjtTQUN0QjtRQUNELE9BQU8sRUFBRSxDQUFDLDBDQUFtQixDQUFDO1FBQzlCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1FBQzNCLGVBQWUsRUFBRSxDQUFDLDZDQUFvQixDQUFDO1FBQ3ZDLFNBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUM7R0FDVyxnQkFBZ0IsQ0FFNUI7QUFGWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IENhdGVnb3JpZXNDb21wb25lbnQgfSBmcm9tICcuL2NhdGVnb3JpZXMuY29tcG9uZW50JztcbmltcG9ydCB7IENhdGVnb3JpZXNSb3V0ZU1vZHVsZSB9IGZyb20gJy4vY2F0ZWdvcmllcy1yb3V0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ3JlYXRlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NyZWF0ZS1tb2RhbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgQ2F0ZWdvcmllc0NvbXBvbmVudCxcbiAgICAgIENyZWF0ZU1vZGFsQ29tcG9uZW50LFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICBDYXRlZ29yaWVzUm91dGVNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtDYXRlZ29yaWVzQ29tcG9uZW50XSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbQ3JlYXRlTW9kYWxDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc01vZHVsZSB7XG5cbn1cbiJdfQ==