"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var active_component_1 = require("./active.component");
var create_component_1 = require("./create/create.component");
var view_component_1 = require("./view/view.component");
// import { ActiveOpenComponent } from './open/open.component';
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
                    ] }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], ActiveRouteModule);
exports.ActiveRouteModule = ActiveRouteModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXJvdXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS1yb3V0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0RBQXVFO0FBQ3ZFLHVEQUFxRDtBQUNyRCw4REFBa0U7QUFDbEUsd0RBQTREO0FBQzVELCtEQUErRDtBQWtCL0QsSUFBYSxpQkFBaUI7SUFBOUI7SUFBaUMsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUFsQyxJQUFrQztBQUFyQixpQkFBaUI7SUFoQjdCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGlDQUF3QixDQUFDLFFBQVEsQ0FBQztnQkFDaEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFLFFBQVEsRUFBRTt3QkFDdEQsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxvQ0FBbUIsRUFBRTt3QkFDNUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx3Q0FBcUIsRUFBRTtxQkFLckQsRUFBQzthQUNILENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3BDLENBQUM7R0FFVyxpQkFBaUIsQ0FBSTtBQUFyQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2ZUNvbXBvbmVudCB9IGZyb20gJy4vYWN0aXZlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVDcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvdmlldy5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgQWN0aXZlT3BlbkNvbXBvbmVudCB9IGZyb20gJy4vb3Blbi9vcGVuLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAgeyBwYXRoOiAnYWN0aXZlJywgY29tcG9uZW50OiBBY3RpdmVDb21wb25lbnQsIGNoaWxkcmVuOiBbXG4gICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogQWN0aXZlVmlld0NvbXBvbmVudCB9LFxuICAgICAgICB7IHBhdGg6ICdjcmVhdGUnLCBjb21wb25lbnQ6IEFjdGl2ZUNyZWF0ZUNvbXBvbmVudCB9LFxuICAgICAgICAvLyB7IHBhdGg6ICdvcGVuJywgY2hpbGRyZW46IFtcbiAgICAgICAgLy8gLy8geyBwYXRoOiAnb3BlbicsIGNvbXBvbmVudDogQWN0aXZlT3BlbkNvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgLy8gICB7IHBhdGg6ICc6aWQnLCBjb21wb25lbnQ6IEFjdGl2ZU9wZW5Db21wb25lbnQgfSxcbiAgICAgICAgLy8gXX0sXG4gICAgICBdfVxuICAgIF0pXG4gIF0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuXG5leHBvcnQgY2xhc3MgQWN0aXZlUm91dGVNb2R1bGUgeyB9XG4iXX0=