"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var expenses_component_1 = require("./expenses.component");
var ExpensesRouteModule = (function () {
    function ExpensesRouteModule() {
    }
    return ExpensesRouteModule;
}());
ExpensesRouteModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forChild([
                { path: 'expenses', component: expenses_component_1.ExpensesComponent }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], ExpensesRouteModule);
exports.ExpensesRouteModule = ExpensesRouteModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMtcm91dGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMtcm91dGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSwyREFBeUQ7QUFXekQsSUFBYSxtQkFBbUI7SUFBaEM7SUFBbUMsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQyxBQUFwQyxJQUFvQztBQUF2QixtQkFBbUI7SUFUL0IsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsaUNBQXdCLENBQUMsUUFBUSxDQUFDO2dCQUNoQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO2FBQ25ELENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3BDLENBQUM7R0FFVyxtQkFBbUIsQ0FBSTtBQUF2QixrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgRXhwZW5zZXNDb21wb25lbnQgfSBmcm9tICcuL2V4cGVuc2VzLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcbiAgICAgIHsgcGF0aDogJ2V4cGVuc2VzJywgY29tcG9uZW50OiBFeHBlbnNlc0NvbXBvbmVudCB9XHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlc1JvdXRlTW9kdWxlIHsgfVxyXG4iXX0=