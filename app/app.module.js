"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var http_1 = require("nativescript-angular/http");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var animations_1 = require("nativescript-angular/animations");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var ngrx_debugger_1 = require("./ngrx-debugger");
var reducers_1 = require("./reducers");
var services_1 = require("./services");
var effects_1 = require("./effects");
var actions_1 = require("./actions");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            ngrx_debugger_1.NgrxDebugger,
        ],
        bootstrap: [app_component_1.AppComponent],
        imports: [
            nativescript_module_1.NativeScriptModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            animations_1.NativeScriptAnimationsModule,
            app_routing_1.AppRoutingModule,
            nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                'fa': './assets/font-awesome.css',
                'mdi': './fonts/Google/material-icons.css',
            })
        ].concat(reducers_1.STORE, effects_1.EFFECTS),
        providers: services_1.SERVICES.concat(actions_1.ACTIONS),
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUV2RSxrREFBbUU7QUFDbkUsdUVBQThEO0FBQzlELDhEQUErRTtBQUMvRSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBQy9DLGlEQUErQztBQUUvQyx1Q0FBbUM7QUFDbkMsdUNBQXNDO0FBQ3RDLHFDQUFvQztBQUNwQyxxQ0FBb0M7QUE0QnBDLElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQTFCckIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osNEJBQVk7WUFDWiw0QkFBWTtTQUNiO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN6QixPQUFPO1lBQ0wsd0NBQWtCO1lBQ2xCLDZCQUFzQjtZQUN0QixpQ0FBd0I7WUFDeEIseUNBQTRCO1lBQzVCLDhCQUFnQjtZQUNoQiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLElBQUksRUFBRSwyQkFBMkI7Z0JBQ2pDLEtBQUssRUFBRSxtQ0FBbUM7YUFFM0MsQ0FBQztpQkFDQyxnQkFBSyxFQUNMLGlCQUFPLENBQ1g7UUFDRCxTQUFTLEVBQ0osbUJBQVEsUUFDUixpQkFBTyxDQUNYO1FBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7S0FDNUIsQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0QW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5ncnhEZWJ1Z2dlciB9IGZyb20gXCIuL25ncngtZGVidWdnZXJcIjtcblxuaW1wb3J0IHsgU1RPUkUgfSBmcm9tICcuL3JlZHVjZXJzJztcbmltcG9ydCB7IFNFUlZJQ0VTIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBFRkZFQ1RTIH0gZnJvbSAnLi9lZmZlY3RzJztcbmltcG9ydCB7IEFDVElPTlMgfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgTmdyeERlYnVnZ2VyLFxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEFuaW1hdGlvbnNNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICdmYSc6ICcuL2Fzc2V0cy9mb250LWF3ZXNvbWUuY3NzJyxcbiAgICAgICdtZGknOiAnLi9mb250cy9Hb29nbGUvbWF0ZXJpYWwtaWNvbnMuY3NzJyxcbiAgICAgIC8vICdpb24nOiAnLi9hc3NldHMvaW9uaWNvbnMuY3NzJ1xuICAgIH0pLFxuICAgIC4uLlNUT1JFLFxuICAgIC4uLkVGRkVDVFMsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLlNFUlZJQ0VTLFxuICAgIC4uLkFDVElPTlMsXG4gIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=