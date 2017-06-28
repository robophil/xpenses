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
            { provide: core_1.NgModuleFactoryLoader, useClass: router_1.NSModuleFactoryLoader },
            modal_dialog_1.ModalDialogService
        ].concat(services_1.SERVICES, actions_1.ACTIONS),
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLHNEQUE4RjtBQUU5RixrREFBbUU7QUFDbkUsdUVBQThEO0FBQzlELDhEQUErRTtBQUMvRSxrRUFBdUU7QUFDdkUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUMvQyxxREFBd0Q7QUFFeEQsdUNBQW1DO0FBQ25DLHVDQUFzQztBQUN0QyxxQ0FBb0M7QUFDcEMscUNBQW9DO0FBOEJwQyxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUE1QnJCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDRCQUFZO1NBQ2I7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU87WUFDTCx3Q0FBa0I7WUFDbEIsNkJBQXNCO1lBQ3RCLGlDQUF3QjtZQUN4Qix5Q0FBNEI7WUFDNUIsOEJBQWdCO1lBQ2hCLHVDQUFvQjtZQUNwQiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLElBQUksRUFBRSwyQkFBMkI7Z0JBQ2pDLEtBQUssRUFBRSxtQ0FBbUM7YUFFM0MsQ0FBQztpQkFDQyxnQkFBSyxFQUNMLGlCQUFPLENBQ1g7UUFDRCxTQUFTO1lBQ1AsRUFBRSxPQUFPLEVBQUUsNEJBQXFCLEVBQUUsUUFBUSxFQUFFLDhCQUFxQixFQUFFO1lBQ25FLGlDQUFrQjtpQkFDZixtQkFBUSxFQUNSLGlCQUFPLENBQ1g7UUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUM1QixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsIE5TTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0QW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5TTmdSeERlYnVnZ2VyTW9kdWxlIH0gZnJvbSBcIm5zLW5ncngtZGVidWdnZXJcIjtcblxuaW1wb3J0IHsgU1RPUkUgfSBmcm9tICcuL3JlZHVjZXJzJztcbmltcG9ydCB7IFNFUlZJQ0VTIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBFRkZFQ1RTIH0gZnJvbSAnLi9lZmZlY3RzJztcbmltcG9ydCB7IEFDVElPTlMgfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0QW5pbWF0aW9uc01vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIE5TTmdSeERlYnVnZ2VyTW9kdWxlLFxuICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgJ2ZhJzogJy4vYXNzZXRzL2ZvbnQtYXdlc29tZS5jc3MnLFxuICAgICAgJ21kaSc6ICcuL2ZvbnRzL0dvb2dsZS9tYXRlcmlhbC1pY29ucy5jc3MnLFxuICAgICAgLy8gJ2lvbic6ICcuL2Fzc2V0cy9pb25pY29ucy5jc3MnXG4gICAgfSksXG4gICAgLi4uU1RPUkUsXG4gICAgLi4uRUZGRUNUUyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIHVzZUNsYXNzOiBOU01vZHVsZUZhY3RvcnlMb2FkZXIgfSxcbiAgICBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgLi4uU0VSVklDRVMsXG4gICAgLi4uQUNUSU9OUyxcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==