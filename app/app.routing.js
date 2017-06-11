"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var active_1 = require("./pages/active");
var categories_1 = require("./pages/categories");
var cycles_1 = require("./pages/cycles");
var expenses_1 = require("./pages/expenses");
var info_1 = require("./pages/info");
var routes = [
    { path: '', redirectTo: '/active', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forRoot(routes),
            active_1.ActiveModule,
            categories_1.CategoriesModule,
            cycles_1.CyclesModule,
            expenses_1.ExpensesModule,
            info_1.InfoModule,
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUseUNBQThDO0FBQzlDLGlEQUFzRDtBQUN0RCx5Q0FBOEM7QUFDOUMsNkNBQWtEO0FBQ2xELHFDQUEwQztBQUUxQyxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0NBQ3ZELENBQUM7QUFhRixJQUFhLGdCQUFnQjtJQUE3QjtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLGdCQUFnQjtJQVg1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3hDLHFCQUFZO1lBQ1osNkJBQWdCO1lBQ2hCLHFCQUFZO1lBQ1oseUJBQWM7WUFDZCxpQkFBVTtTQUNYO1FBQ0QsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDcEMsQ0FBQztHQUNXLGdCQUFnQixDQUFJO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFjdGl2ZU1vZHVsZSB9IGZyb20gJy4vcGFnZXMvYWN0aXZlJztcbmltcG9ydCB7IENhdGVnb3JpZXNNb2R1bGUgfSBmcm9tICcuL3BhZ2VzL2NhdGVnb3JpZXMnO1xuaW1wb3J0IHsgQ3ljbGVzTW9kdWxlIH0gZnJvbSAnLi9wYWdlcy9jeWNsZXMnO1xuaW1wb3J0IHsgRXhwZW5zZXNNb2R1bGUgfSBmcm9tICcuL3BhZ2VzL2V4cGVuc2VzJztcbmltcG9ydCB7IEluZm9Nb2R1bGUgfSBmcm9tICcuL3BhZ2VzL2luZm8nO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9hY3RpdmUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcbiAgICBBY3RpdmVNb2R1bGUsXG4gICAgQ2F0ZWdvcmllc01vZHVsZSxcbiAgICBDeWNsZXNNb2R1bGUsXG4gICAgRXhwZW5zZXNNb2R1bGUsXG4gICAgSW5mb01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==