"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var main_component_1 = require("./main.component");
var MainRouteModule = (function () {
    function MainRouteModule() {
    }
    return MainRouteModule;
}());
MainRouteModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forChild([
                { path: 'main', component: main_component_1.MainComponent, children: [
                        { path: '', redirectTo: 'active', pathMatch: 'full' },
                        { path: 'cycles', loadChildren: 'pages/cycles#CyclesModule' },
                        { path: 'active', loadChildren: 'pages/active#ActiveModule' },
                        { path: 'categories', loadChildren: 'pages/categories#CategoriesModule' },
                        { path: 'expenses', loadChildren: 'pages/expenses#ExpensesModule' },
                        { path: 'info', loadChildren: 'pages/info#InfoModule' },
                    ] },
            ]),
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], MainRouteModule);
exports.MainRouteModule = MainRouteModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1yb3V0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLXJvdXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsbURBQWlEO0FBa0JqRCxJQUFhLGVBQWU7SUFBNUI7SUFBK0IsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUFoQyxJQUFnQztBQUFuQixlQUFlO0lBaEIzQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0IsQ0FBQyxRQUFRLENBQUM7Z0JBQ2hDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxRQUFRLEVBQUU7d0JBQ2xELEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7d0JBQ3JELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsMkJBQTJCLEVBQUU7d0JBQzdELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsMkJBQTJCLEVBQUU7d0JBQzdELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsbUNBQW1DLEVBQUU7d0JBQ3pFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUU7d0JBQ25FLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUU7cUJBQ3hELEVBQUM7YUFDSCxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUNwQyxDQUFDO0dBRVcsZUFBZSxDQUFJO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tICcuL21haW4uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7IHBhdGg6ICdtYWluJywgY29tcG9uZW50OiBNYWluQ29tcG9uZW50LCBjaGlsZHJlbjogW1xuICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnYWN0aXZlJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICAgICAgeyBwYXRoOiAnY3ljbGVzJywgbG9hZENoaWxkcmVuOiAncGFnZXMvY3ljbGVzI0N5Y2xlc01vZHVsZScgfSxcbiAgICAgICAgeyBwYXRoOiAnYWN0aXZlJywgbG9hZENoaWxkcmVuOiAncGFnZXMvYWN0aXZlI0FjdGl2ZU1vZHVsZScgfSxcbiAgICAgICAgeyBwYXRoOiAnY2F0ZWdvcmllcycsIGxvYWRDaGlsZHJlbjogJ3BhZ2VzL2NhdGVnb3JpZXMjQ2F0ZWdvcmllc01vZHVsZScgfSxcbiAgICAgICAgeyBwYXRoOiAnZXhwZW5zZXMnLCBsb2FkQ2hpbGRyZW46ICdwYWdlcy9leHBlbnNlcyNFeHBlbnNlc01vZHVsZScgfSxcbiAgICAgICAgeyBwYXRoOiAnaW5mbycsIGxvYWRDaGlsZHJlbjogJ3BhZ2VzL2luZm8jSW5mb01vZHVsZScgfSxcbiAgICAgIF19LFxuICAgIF0pLFxuICBdLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIE1haW5Sb3V0ZU1vZHVsZSB7IH1cbiJdfQ==