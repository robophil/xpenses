"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var http_1 = require("nativescript-angular/http");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var animations_1 = require("nativescript-angular/animations");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var ns_ngrx_debugger_1 = require("ns-ngrx-debugger");
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
        ],
        bootstrap: [app_component_1.AppComponent],
        imports: [
            nativescript_module_1.NativeScriptModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            animations_1.NativeScriptAnimationsModule,
            app_routing_1.AppRoutingModule,
            ns_ngrx_debugger_1.NSNgRxDebuggerModule,
            nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                'fa': './assets/font-awesome.css',
                'mdi': './fonts/Google/material-icons.css',
            })
        ].concat(reducers_1.STORE, effects_1.EFFECTS),
        providers: [
            modal_dialog_1.ModalDialogService
        ].concat(services_1.SERVICES, actions_1.ACTIONS),
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUV2RSxrREFBbUU7QUFDbkUsdUVBQThEO0FBQzlELDhEQUErRTtBQUMvRSxrRUFBdUU7QUFDdkUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUMvQyxxREFBd0Q7QUFFeEQsdUNBQW1DO0FBQ25DLHVDQUFzQztBQUN0QyxxQ0FBb0M7QUFDcEMscUNBQW9DO0FBNkJwQyxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUEzQnJCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDRCQUFZO1NBQ2I7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU87WUFDTCx3Q0FBa0I7WUFDbEIsNkJBQXNCO1lBQ3RCLGlDQUF3QjtZQUN4Qix5Q0FBNEI7WUFDNUIsOEJBQWdCO1lBQ2hCLHVDQUFvQjtZQUNwQiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLElBQUksRUFBRSwyQkFBMkI7Z0JBQ2pDLEtBQUssRUFBRSxtQ0FBbUM7YUFFM0MsQ0FBQztpQkFDQyxnQkFBSyxFQUNMLGlCQUFPLENBQ1g7UUFDRCxTQUFTO1lBQ1AsaUNBQWtCO2lCQUNmLG1CQUFRLEVBQ1IsaUJBQU8sQ0FDWDtRQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzVCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOU05nUnhEZWJ1Z2dlck1vZHVsZSB9IGZyb20gXCJucy1uZ3J4LWRlYnVnZ2VyXCI7XG5cbmltcG9ydCB7IFNUT1JFIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBTRVJWSUNFUyB9IGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IHsgRUZGRUNUUyB9IGZyb20gJy4vZWZmZWN0cyc7XG5pbXBvcnQgeyBBQ1RJT05TIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEFuaW1hdGlvbnNNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBOU05nUnhEZWJ1Z2dlck1vZHVsZSxcbiAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICdmYSc6ICcuL2Fzc2V0cy9mb250LWF3ZXNvbWUuY3NzJyxcbiAgICAgICdtZGknOiAnLi9mb250cy9Hb29nbGUvbWF0ZXJpYWwtaWNvbnMuY3NzJyxcbiAgICAgIC8vICdpb24nOiAnLi9hc3NldHMvaW9uaWNvbnMuY3NzJ1xuICAgIH0pLFxuICAgIC4uLlNUT1JFLFxuICAgIC4uLkVGRkVDVFMsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAuLi5TRVJWSUNFUyxcbiAgICAuLi5BQ1RJT05TLFxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19