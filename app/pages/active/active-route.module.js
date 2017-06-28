"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var active_component_1 = require("./active.component");
var view_component_1 = require("./view/view.component");
var ActiveRouteModule = (function () {
    function ActiveRouteModule() {
    }
    return ActiveRouteModule;
}());
ActiveRouteModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forChild([
                { path: '', component: active_component_1.ActiveComponent, children: [
                        { path: '', component: view_component_1.ActiveViewComponent },
                    ] }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], ActiveRouteModule);
exports.ActiveRouteModule = ActiveRouteModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXJvdXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS1yb3V0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0RBQXVFO0FBQ3ZFLHVEQUFxRDtBQUNyRCx3REFBNEQ7QUFhNUQsSUFBYSxpQkFBaUI7SUFBOUI7SUFBaUMsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUFsQyxJQUFrQztBQUFyQixpQkFBaUI7SUFYN0IsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsaUNBQXdCLENBQUMsUUFBUSxDQUFDO2dCQUNoQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsUUFBUSxFQUFFO3dCQUNoRCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLG9DQUFtQixFQUFFO3FCQUM3QyxFQUFDO2FBQ0gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDcEMsQ0FBQztHQUVXLGlCQUFpQixDQUFJO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZlQ29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvdmlldy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogQWN0aXZlQ29tcG9uZW50LCBjaGlsZHJlbjogW1xuICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEFjdGl2ZVZpZXdDb21wb25lbnQgfSxcbiAgICAgIF19XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBY3RpdmVSb3V0ZU1vZHVsZSB7IH1cbiJdfQ==