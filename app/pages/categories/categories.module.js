"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var categories_component_1 = require("./categories.component");
var categories_route_module_1 = require("./categories-route.module");
var CategoriesModule = (function () {
    function CategoriesModule() {
    }
    return CategoriesModule;
}());
CategoriesModule = __decorate([
    core_1.NgModule({
        declarations: [categories_component_1.CategoriesComponent],
        imports: [nativescript_module_1.NativeScriptModule, forms_1.NativeScriptFormsModule, categories_route_module_1.CategoriesRouteModule],
        exports: [categories_component_1.CategoriesComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        providers: []
    })
], CategoriesModule);
exports.CategoriesModule = CategoriesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yaWVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLCtEQUE2RDtBQUM3RCxxRUFBa0U7QUFTbEUsSUFBYSxnQkFBZ0I7SUFBN0I7SUFFQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLGdCQUFnQjtJQVA1QixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztRQUNuQyxPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSwrQkFBdUIsRUFBRSwrQ0FBcUIsQ0FBQztRQUM3RSxPQUFPLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztRQUM5QixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztRQUMzQixTQUFTLEVBQUUsRUFBRTtLQUNoQixDQUFDO0dBQ1csZ0JBQWdCLENBRTVCO0FBRlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBDYXRlZ29yaWVzQ29tcG9uZW50IH0gZnJvbSAnLi9jYXRlZ29yaWVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhdGVnb3JpZXNSb3V0ZU1vZHVsZSB9IGZyb20gJy4vY2F0ZWdvcmllcy1yb3V0ZS5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0NhdGVnb3JpZXNDb21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSwgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIENhdGVnb3JpZXNSb3V0ZU1vZHVsZV0sXHJcbiAgICBleHBvcnRzOiBbQ2F0ZWdvcmllc0NvbXBvbmVudF0sXHJcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbiAgICBwcm92aWRlcnM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzTW9kdWxlIHtcclxuXHJcbn1cclxuIl19