"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var create_component_1 = require("./create.component");
var period_modal_component_1 = require("./period-modal.component");
var modal_1 = require("./../../components/modal");
var date_modal_component_1 = require("./date-modal.component");
var create_route_module_1 = require("./create-route.module");
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
            period_modal_component_1.PeriodModalComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            modal_1.ModalModule,
            create_route_module_1.ActiveRouteModule,
        ],
        exports: [create_component_1.CreateComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        entryComponents: [date_modal_component_1.DateModalComponent, period_modal_component_1.PeriodModalComponent],
        providers: []
    })
], CreateModule);
exports.CreateModule = CreateModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSx1REFBcUQ7QUFDckQsbUVBQWdFO0FBQ2hFLGtEQUF1RDtBQUN2RCwrREFBNEQ7QUFDNUQsNkRBQTBEO0FBbUIxRCxJQUFhLFlBQVk7SUFBekI7SUFBNEIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUE3QixJQUE2QjtBQUFoQixZQUFZO0lBakJ4QixlQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixrQ0FBZTtZQUNmLHlDQUFrQjtZQUNsQiw2Q0FBb0I7U0FDckI7UUFDRCxPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLG1CQUFXO1lBQ1gsdUNBQWlCO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFLENBQUMsa0NBQWUsQ0FBQztRQUMxQixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztRQUMzQixlQUFlLEVBQUUsQ0FBQyx5Q0FBa0IsRUFBRSw2Q0FBb0IsQ0FBQztRQUMzRCxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7R0FDVyxZQUFZLENBQUk7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IENyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZXJpb2RNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vcGVyaW9kLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9tb2RhbCc7XG5pbXBvcnQgeyBEYXRlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVJvdXRlTW9kdWxlIH0gZnJvbSAnLi9jcmVhdGUtcm91dGUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ3JlYXRlQ29tcG9uZW50LFxuICAgIERhdGVNb2RhbENvbXBvbmVudCxcbiAgICBQZXJpb2RNb2RhbENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE1vZGFsTW9kdWxlLFxuICAgIEFjdGl2ZVJvdXRlTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbQ3JlYXRlQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtEYXRlTW9kYWxDb21wb25lbnQsIFBlcmlvZE1vZGFsQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVNb2R1bGUgeyB9XG4iXX0=