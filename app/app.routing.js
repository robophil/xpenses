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
    { path: '', redirectTo: 'main/categories', pathMatch: 'full' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBb0Q7QUFDcEQsc0RBQXdFO0FBRXhFLHlDQUE4QztBQUM5QyxxQ0FBMEM7QUFDMUMscUNBQTBDO0FBRTFDLElBQU0sTUFBTSxHQUFXO0lBQ3JCLHlEQUF5RDtJQUN6RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7Q0FFL0QsQ0FBQztBQWFGLElBQWEsZ0JBQWdCO0lBQTdCO0lBQWdDLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFBakMsSUFBaUM7QUFBcEIsZ0JBQWdCO0lBWDVCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZDLGtCQUFrQixFQUFFLDBCQUFpQjthQUN0QyxDQUFDO1lBQ0YsaUJBQVU7WUFDVixxQkFBWTtZQUNaLGlCQUFVO1NBQ1g7UUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUNwQyxDQUFDO0dBQ1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUHJlbG9hZEFsbE1vZHVsZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IENyZWF0ZU1vZHVsZSB9IGZyb20gJy4vcGFnZXMvY3JlYXRlJztcbmltcG9ydCB7IEhvbWVNb2R1bGUgfSBmcm9tICcuL3BhZ2VzL2hvbWUnO1xuaW1wb3J0IHsgTWFpbk1vZHVsZSB9IGZyb20gJy4vcGFnZXMvbWFpbic7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAvLyB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnY3JlYXRlJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ21haW4vY2F0ZWdvcmllcycsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gIC8vIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHtcbiAgICAgIHByZWxvYWRpbmdTdHJhdGVneTogUHJlbG9hZEFsbE1vZHVsZXMsXG4gICAgfSksXG4gICAgSG9tZU1vZHVsZSxcbiAgICBDcmVhdGVNb2R1bGUsXG4gICAgTWFpbk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==