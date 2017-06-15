"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var active_component_1 = require("./active.component");
var create_component_1 = require("./create/create.component");
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
                // { path: 'active', component: ActiveViewComponent }
                // { path: 'active', component: ActiveComponent }
                { path: 'active', component: active_component_1.ActiveComponent, children: [
                        { path: '', component: view_component_1.ActiveViewComponent },
                        { path: 'create', component: create_component_1.ActiveCreateComponent }
                    ] }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], ActiveRouteModule);
exports.ActiveRouteModule = ActiveRouteModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXJvdXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS1yb3V0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0RBQXVFO0FBQ3ZFLHVEQUFxRDtBQUNyRCw4REFBa0U7QUFDbEUsd0RBQTREO0FBZ0I1RCxJQUFhLGlCQUFpQjtJQUE5QjtJQUFpQyxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBQWxDLElBQWtDO0FBQXJCLGlCQUFpQjtJQWQ3QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0IsQ0FBQyxRQUFRLENBQUM7Z0JBQ2hDLHFEQUFxRDtnQkFDckQsaURBQWlEO2dCQUNqRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsUUFBUSxFQUFFO3dCQUN0RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLG9DQUFtQixFQUFFO3dCQUM1QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHdDQUFxQixFQUFFO3FCQUNyRCxFQUFDO2FBQ0gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDcEMsQ0FBQztHQUVXLGlCQUFpQixDQUFJO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZlQ29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZUNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy92aWV3LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAgLy8geyBwYXRoOiAnYWN0aXZlJywgY29tcG9uZW50OiBBY3RpdmVWaWV3Q29tcG9uZW50IH1cbiAgICAgIC8vIHsgcGF0aDogJ2FjdGl2ZScsIGNvbXBvbmVudDogQWN0aXZlQ29tcG9uZW50IH1cbiAgICAgIHsgcGF0aDogJ2FjdGl2ZScsIGNvbXBvbmVudDogQWN0aXZlQ29tcG9uZW50LCBjaGlsZHJlbjogW1xuICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEFjdGl2ZVZpZXdDb21wb25lbnQgfSxcbiAgICAgICAgeyBwYXRoOiAnY3JlYXRlJywgY29tcG9uZW50OiBBY3RpdmVDcmVhdGVDb21wb25lbnQgfVxuICAgICAgXX1cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIEFjdGl2ZVJvdXRlTW9kdWxlIHsgfVxuIl19