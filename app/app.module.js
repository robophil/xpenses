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
        providers: [
            modal_dialog_1.ModalDialogService
        ].concat(services_1.SERVICES, actions_1.ACTIONS),
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUV2RSxrREFBbUU7QUFDbkUsdUVBQThEO0FBQzlELDhEQUErRTtBQUMvRSxrRUFBdUU7QUFDdkUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUMvQyxpREFBK0M7QUFFL0MsdUNBQW1DO0FBQ25DLHVDQUFzQztBQUN0QyxxQ0FBb0M7QUFDcEMscUNBQW9DO0FBNkJwQyxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUEzQnJCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osNEJBQVk7U0FDYjtRQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsT0FBTztZQUNMLHdDQUFrQjtZQUNsQiw2QkFBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLHlDQUE0QjtZQUM1Qiw4QkFBZ0I7WUFDaEIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUN4QixJQUFJLEVBQUUsMkJBQTJCO2dCQUNqQyxLQUFLLEVBQUUsbUNBQW1DO2FBRTNDLENBQUM7aUJBQ0MsZ0JBQUssRUFDTCxpQkFBTyxDQUNYO1FBQ0QsU0FBUztZQUNQLGlDQUFrQjtpQkFDZixtQkFBUSxFQUNSLGlCQUFPLENBQ1g7UUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUM1QixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmdyeERlYnVnZ2VyIH0gZnJvbSBcIi4vbmdyeC1kZWJ1Z2dlclwiO1xuXG5pbXBvcnQgeyBTVE9SRSB9IGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgU0VSVklDRVMgfSBmcm9tICcuL3NlcnZpY2VzJztcbmltcG9ydCB7IEVGRkVDVFMgfSBmcm9tICcuL2VmZmVjdHMnO1xuaW1wb3J0IHsgQUNUSU9OUyB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBOZ3J4RGVidWdnZXIsXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0QW5pbWF0aW9uc01vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgJ2ZhJzogJy4vYXNzZXRzL2ZvbnQtYXdlc29tZS5jc3MnLFxuICAgICAgJ21kaSc6ICcuL2ZvbnRzL0dvb2dsZS9tYXRlcmlhbC1pY29ucy5jc3MnLFxuICAgICAgLy8gJ2lvbic6ICcuL2Fzc2V0cy9pb25pY29ucy5jc3MnXG4gICAgfSksXG4gICAgLi4uU1RPUkUsXG4gICAgLi4uRUZGRUNUUyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgIC4uLlNFUlZJQ0VTLFxuICAgIC4uLkFDVElPTlMsXG4gIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=