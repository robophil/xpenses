"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var create_component_1 = require("./create.component");
var period_modal_component_1 = require("./period-modal.component");
var date_modal_component_1 = require("./date-modal.component");
var create_route_module_1 = require("./create-route.module");
var nativescript_ngx_slides_1 = require("nativescript-ngx-slides");
var nativescript_ng_gradient_1 = require("nativescript-ng-gradient");
var CreateModule = (function () {
    function CreateModule() {
    }
    return CreateModule;
}());
CreateModule = __decorate([
    core_1.NgModule({
        declarations: [
            create_component_1.CreateComponent,
            date_modal_component_1.DateModalComponent,
            date_modal_component_1.DateModalComponent,
            period_modal_component_1.PeriodModalComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            create_route_module_1.ActiveRouteModule,
            nativescript_ng_gradient_1.NSGradientDirectiveModule,
            nativescript_ngx_slides_1.SlidesModule
        ],
        exports: [create_component_1.CreateComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        entryComponents: [date_modal_component_1.DateModalComponent, period_modal_component_1.PeriodModalComponent],
        providers: []
    })
], CreateModule);
exports.CreateModule = CreateModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx1REFBcUQ7QUFDckQsbUVBQWdFO0FBQ2hFLCtEQUE0RDtBQUM1RCw2REFBMEQ7QUFDMUQsbUVBQXVEO0FBQ3ZELHFFQUFxRTtBQXFCckUsSUFBYSxZQUFZO0lBQXpCO0lBQTRCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFBN0IsSUFBNkI7QUFBaEIsWUFBWTtJQW5CeEIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osa0NBQWU7WUFDZix5Q0FBa0I7WUFDbEIseUNBQWtCO1lBQ2xCLDZDQUFvQjtTQUNyQjtRQUNELE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsdUNBQWlCO1lBQ2pCLG9EQUF5QjtZQUN6QixzQ0FBWTtTQUNiO1FBQ0QsT0FBTyxFQUFFLENBQUMsa0NBQWUsQ0FBQztRQUMxQixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztRQUMzQixlQUFlLEVBQUUsQ0FBQyx5Q0FBa0IsRUFBRSw2Q0FBb0IsQ0FBQztRQUMzRCxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7R0FDVyxZQUFZLENBQUk7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IENyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZXJpb2RNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vcGVyaW9kLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVJvdXRlTW9kdWxlIH0gZnJvbSAnLi9jcmVhdGUtcm91dGUubW9kdWxlJztcbmltcG9ydCB7IFNsaWRlc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzJztcbmltcG9ydCB7IE5TR3JhZGllbnREaXJlY3RpdmVNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW5nLWdyYWRpZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENyZWF0ZUNvbXBvbmVudCxcbiAgICBEYXRlTW9kYWxDb21wb25lbnQsXG4gICAgRGF0ZU1vZGFsQ29tcG9uZW50LFxuICAgIFBlcmlvZE1vZGFsQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgQWN0aXZlUm91dGVNb2R1bGUsXG4gICAgTlNHcmFkaWVudERpcmVjdGl2ZU1vZHVsZSxcbiAgICBTbGlkZXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0NyZWF0ZUNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgZW50cnlDb21wb25lbnRzOiBbRGF0ZU1vZGFsQ29tcG9uZW50LCBQZXJpb2RNb2RhbENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlTW9kdWxlIHsgfVxuIl19