"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var active_component_1 = require("./active.component");
var create_component_1 = require("./create/create.component");
var view_component_1 = require("./view/view.component");
var open_component_1 = require("./open/open.component");
var ActiveRouteModule = (function () {
    function ActiveRouteModule() {
    }
    return ActiveRouteModule;
}());
ActiveRouteModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forChild([
                { path: 'active', component: active_component_1.ActiveComponent, children: [
                        { path: '', component: view_component_1.ActiveViewComponent },
                        { path: 'create', component: create_component_1.ActiveCreateComponent },
                        { path: 'open', children: [
                                // { path: 'open', component: ActiveOpenComponent, children: [
                                { path: ':id', component: open_component_1.ActiveOpenComponent },
                            ] },
                    ] }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], ActiveRouteModule);
exports.ActiveRouteModule = ActiveRouteModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXJvdXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS1yb3V0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0RBQXVFO0FBQ3ZFLHVEQUFxRDtBQUNyRCw4REFBa0U7QUFDbEUsd0RBQTREO0FBQzVELHdEQUE0RDtBQWtCNUQsSUFBYSxpQkFBaUI7SUFBOUI7SUFBaUMsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUFsQyxJQUFrQztBQUFyQixpQkFBaUI7SUFoQjdCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGlDQUF3QixDQUFDLFFBQVEsQ0FBQztnQkFDaEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFLFFBQVEsRUFBRTt3QkFDdEQsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxvQ0FBbUIsRUFBRTt3QkFDNUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx3Q0FBcUIsRUFBRTt3QkFDcEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtnQ0FDMUIsOERBQThEO2dDQUM1RCxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLG9DQUFtQixFQUFFOzZCQUNoRCxFQUFDO3FCQUNILEVBQUM7YUFDSCxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUNwQyxDQUFDO0dBRVcsaUJBQWlCLENBQUk7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmVDb21wb25lbnQgfSBmcm9tICcuL2FjdGl2ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3ZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZU9wZW5Db21wb25lbnQgfSBmcm9tICcuL29wZW4vb3Blbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHsgcGF0aDogJ2FjdGl2ZScsIGNvbXBvbmVudDogQWN0aXZlQ29tcG9uZW50LCBjaGlsZHJlbjogW1xuICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEFjdGl2ZVZpZXdDb21wb25lbnQgfSxcbiAgICAgICAgeyBwYXRoOiAnY3JlYXRlJywgY29tcG9uZW50OiBBY3RpdmVDcmVhdGVDb21wb25lbnQgfSxcbiAgICAgICAgeyBwYXRoOiAnb3BlbicsIGNoaWxkcmVuOiBbXG4gICAgICAgIC8vIHsgcGF0aDogJ29wZW4nLCBjb21wb25lbnQ6IEFjdGl2ZU9wZW5Db21wb25lbnQsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyBwYXRoOiAnOmlkJywgY29tcG9uZW50OiBBY3RpdmVPcGVuQ29tcG9uZW50IH0sXG4gICAgICAgIF19LFxuICAgICAgXX1cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIEFjdGl2ZVJvdXRlTW9kdWxlIHsgfVxuIl19