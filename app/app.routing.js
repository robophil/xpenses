"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var create_1 = require("./pages/create");
var home_1 = require("./pages/home");
var main_1 = require("./pages/main");
var routes = [
    // { path: '', redirectTo: 'create', pathMatch: 'full' },
    { path: '', redirectTo: 'main/active', pathMatch: 'full' },
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
            home_1.HomeModule,
            create_1.CreateModule,
            main_1.MainModule,
        ],
        exports: [router_2.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBb0Q7QUFDcEQsc0RBQXdFO0FBRXhFLHlDQUE4QztBQUM5QyxxQ0FBMEM7QUFDMUMscUNBQTBDO0FBRTFDLElBQU0sTUFBTSxHQUFXO0lBQ3JCLHlEQUF5RDtJQUN6RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0NBRzNELENBQUM7QUFhRixJQUFhLGdCQUFnQjtJQUE3QjtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLGdCQUFnQjtJQVg1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUN2QyxrQkFBa0IsRUFBRSwwQkFBaUI7YUFDdEMsQ0FBQztZQUNGLGlCQUFVO1lBQ1YscUJBQVk7WUFDWixpQkFBVTtTQUNYO1FBQ0QsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDcEMsQ0FBQztHQUNXLGdCQUFnQixDQUFJO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFByZWxvYWRBbGxNb2R1bGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSwgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBDcmVhdGVNb2R1bGUgfSBmcm9tICcuL3BhZ2VzL2NyZWF0ZSc7XG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9wYWdlcy9ob21lJztcbmltcG9ydCB7IE1haW5Nb2R1bGUgfSBmcm9tICcuL3BhZ2VzL21haW4nO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgLy8geyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2NyZWF0ZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdtYWluL2FjdGl2ZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gIC8vIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdtYWluL2NhdGVnb3JpZXMnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAvLyB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7XG4gICAgICBwcmVsb2FkaW5nU3RyYXRlZ3k6IFByZWxvYWRBbGxNb2R1bGVzLFxuICAgIH0pLFxuICAgIEhvbWVNb2R1bGUsXG4gICAgQ3JlYXRlTW9kdWxlLFxuICAgIE1haW5Nb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=