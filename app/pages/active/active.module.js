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
            view_component_1.ActiveViewComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx1REFBcUQ7QUFDckQsMkRBQXlEO0FBQ3pELDZEQUEwRDtBQUMxRCxtRUFBdUQ7QUFDdkQsOERBQWtFO0FBQ2xFLHdEQUE0RDtBQW1CNUQsSUFBYSxZQUFZO0lBQXpCO0lBQTRCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFBN0IsSUFBNkI7QUFBaEIsWUFBWTtJQWpCeEIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osa0NBQWU7WUFDZixnQ0FBYztZQUNkLHdDQUFxQjtZQUNyQixvQ0FBbUI7U0FDcEI7UUFDRCxPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLHVDQUFpQjtZQUNqQixzQ0FBWTtTQUNiO1FBQ0QsT0FBTyxFQUFFLENBQUMsa0NBQWUsQ0FBQztRQUMxQixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztRQUMzQixTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7R0FDVyxZQUFZLENBQUk7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFjdGl2ZUNvbXBvbmVudCB9IGZyb20gJy4vYWN0aXZlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDeWNsZUNvbXBvbmVudCB9IGZyb20gJy4vY3ljbGUvY3ljbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVJvdXRlTW9kdWxlIH0gZnJvbSAnLi9hY3RpdmUtcm91dGUubW9kdWxlJztcbmltcG9ydCB7IFNsaWRlc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzJztcbmltcG9ydCB7IEFjdGl2ZUNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy92aWV3LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFjdGl2ZUNvbXBvbmVudCxcbiAgICBDeWNsZUNvbXBvbmVudCxcbiAgICBBY3RpdmVDcmVhdGVDb21wb25lbnQsXG4gICAgQWN0aXZlVmlld0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIEFjdGl2ZVJvdXRlTW9kdWxlLFxuICAgIFNsaWRlc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbQWN0aXZlQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZU1vZHVsZSB7IH1cbiJdfQ==