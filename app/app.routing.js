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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUseUNBQThDO0FBQzlDLGlEQUFzRDtBQUN0RCx5Q0FBOEM7QUFDOUMsNkNBQWtEO0FBQ2xELHFDQUEwQztBQUUxQyxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0NBQ3ZELENBQUM7QUFhRixJQUFhLGdCQUFnQjtJQUE3QjtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLGdCQUFnQjtJQVg1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3hDLHFCQUFZO1lBQ1osNkJBQWdCO1lBQ2hCLHFCQUFZO1lBQ1oseUJBQWM7WUFDZCxpQkFBVTtTQUNYO1FBQ0QsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDcEMsQ0FBQztHQUNXLGdCQUFnQixDQUFJO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2ZU1vZHVsZSB9IGZyb20gJy4vcGFnZXMvYWN0aXZlJztcclxuaW1wb3J0IHsgQ2F0ZWdvcmllc01vZHVsZSB9IGZyb20gJy4vcGFnZXMvY2F0ZWdvcmllcyc7XHJcbmltcG9ydCB7IEN5Y2xlc01vZHVsZSB9IGZyb20gJy4vcGFnZXMvY3ljbGVzJztcclxuaW1wb3J0IHsgRXhwZW5zZXNNb2R1bGUgfSBmcm9tICcuL3BhZ2VzL2V4cGVuc2VzJztcclxuaW1wb3J0IHsgSW5mb01vZHVsZSB9IGZyb20gJy4vcGFnZXMvaW5mbyc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2FjdGl2ZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcclxuICAgIEFjdGl2ZU1vZHVsZSxcclxuICAgIENhdGVnb3JpZXNNb2R1bGUsXHJcbiAgICBDeWNsZXNNb2R1bGUsXHJcbiAgICBFeHBlbnNlc01vZHVsZSxcclxuICAgIEluZm9Nb2R1bGUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIl19