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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXJvdXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS1yb3V0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0RBQXVFO0FBQ3ZFLHVEQUFxRDtBQUNyRCw4REFBa0U7QUFDbEUsd0RBQTREO0FBQzVELCtEQUErRDtBQWtCL0QsSUFBYSxpQkFBaUI7SUFBOUI7SUFBaUMsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUFsQyxJQUFrQztBQUFyQixpQkFBaUI7SUFoQjdCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGlDQUF3QixDQUFDLFFBQVEsQ0FBQztnQkFDaEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFLFFBQVEsRUFBRTt3QkFDdEQsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxvQ0FBbUIsRUFBRTt3QkFDNUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx3Q0FBcUIsRUFBRTtxQkFLckQsRUFBQzthQUNILENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3BDLENBQUM7R0FFVyxpQkFBaUIsQ0FBSTtBQUFyQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBY3RpdmVDb21wb25lbnQgfSBmcm9tICcuL2FjdGl2ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3RpdmVDcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWN0aXZlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy92aWV3LmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IEFjdGl2ZU9wZW5Db21wb25lbnQgfSBmcm9tICcuL29wZW4vb3Blbi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgICB7IHBhdGg6ICdhY3RpdmUnLCBjb21wb25lbnQ6IEFjdGl2ZUNvbXBvbmVudCwgY2hpbGRyZW46IFtcclxuICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEFjdGl2ZVZpZXdDb21wb25lbnQgfSxcclxuICAgICAgICB7IHBhdGg6ICdjcmVhdGUnLCBjb21wb25lbnQ6IEFjdGl2ZUNyZWF0ZUNvbXBvbmVudCB9LFxyXG4gICAgICAgIC8vIHsgcGF0aDogJ29wZW4nLCBjaGlsZHJlbjogW1xyXG4gICAgICAgIC8vIC8vIHsgcGF0aDogJ29wZW4nLCBjb21wb25lbnQ6IEFjdGl2ZU9wZW5Db21wb25lbnQsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgLy8gICB7IHBhdGg6ICc6aWQnLCBjb21wb25lbnQ6IEFjdGl2ZU9wZW5Db21wb25lbnQgfSxcclxuICAgICAgICAvLyBdfSxcclxuICAgICAgXX1cclxuICAgIF0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdGl2ZVJvdXRlTW9kdWxlIHsgfVxyXG4iXX0=