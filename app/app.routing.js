"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
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
            router_2.NativeScriptRouterModule.forRoot(routes, {
                preloadingStrategy: router_1.PreloadAllModules,
            }),
            active_1.ActiveModule,
            categories_1.CategoriesModule,
            cycles_1.CyclesModule,
            expenses_1.ExpensesModule,
            info_1.InfoModule,
        ],
        exports: [router_2.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBb0Q7QUFDcEQsc0RBQXdFO0FBRXhFLHlDQUE4QztBQUM5QyxpREFBc0Q7QUFDdEQseUNBQThDO0FBQzlDLDZDQUFrRDtBQUNsRCxxQ0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtDQUN2RCxDQUFDO0FBZUYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQixnQkFBZ0I7SUFiNUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDdkMsa0JBQWtCLEVBQUUsMEJBQWlCO2FBQ3RDLENBQUM7WUFDRixxQkFBWTtZQUNaLDZCQUFnQjtZQUNoQixxQkFBWTtZQUNaLHlCQUFjO1lBQ2QsaUJBQVU7U0FDWDtRQUNELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3BDLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQcmVsb2FkQWxsTW9kdWxlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aXZlTW9kdWxlIH0gZnJvbSAnLi9wYWdlcy9hY3RpdmUnO1xuaW1wb3J0IHsgQ2F0ZWdvcmllc01vZHVsZSB9IGZyb20gJy4vcGFnZXMvY2F0ZWdvcmllcyc7XG5pbXBvcnQgeyBDeWNsZXNNb2R1bGUgfSBmcm9tICcuL3BhZ2VzL2N5Y2xlcyc7XG5pbXBvcnQgeyBFeHBlbnNlc01vZHVsZSB9IGZyb20gJy4vcGFnZXMvZXhwZW5zZXMnO1xuaW1wb3J0IHsgSW5mb01vZHVsZSB9IGZyb20gJy4vcGFnZXMvaW5mbyc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2FjdGl2ZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHtcbiAgICAgIHByZWxvYWRpbmdTdHJhdGVneTogUHJlbG9hZEFsbE1vZHVsZXMsXG4gICAgfSksXG4gICAgQWN0aXZlTW9kdWxlLFxuICAgIENhdGVnb3JpZXNNb2R1bGUsXG4gICAgQ3ljbGVzTW9kdWxlLFxuICAgIEV4cGVuc2VzTW9kdWxlLFxuICAgIEluZm9Nb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=