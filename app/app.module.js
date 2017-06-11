"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var animations_1 = require("nativescript-angular/animations");
// import { AppRoutingModule } from "./app.routing";
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            animations_1.NativeScriptAnimationsModule,
            // AppRoutingModule
            nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                // 'fa': './assets/font-awesome.css',
                'fa': './assets/font-awesome.min.css',
            })
        ],
        declarations: [
            app_component_1.AppComponent,
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsdUVBQThEO0FBQzlELGdGQUE4RTtBQUM5RSw4REFBK0U7QUFDL0Usb0RBQW9EO0FBQ3BELGlEQUErQztBQXdCL0MsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBdEJyQixlQUFRLENBQUM7UUFDUixTQUFTLEVBQUU7WUFDVCw0QkFBWTtTQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLHlDQUE0QjtZQUM1QixtQkFBbUI7WUFDckIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUN6QixxQ0FBcUM7Z0JBQ3JDLElBQUksRUFBRSwrQkFBK0I7YUFHckMsQ0FBQztTQUNEO1FBQ0QsWUFBWSxFQUFFO1lBQ1osNEJBQVk7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0QW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9hbmltYXRpb25zXCI7XG4vLyBpbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgYm9vdHN0cmFwOiBbXG4gICAgQXBwQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0QW5pbWF0aW9uc01vZHVsZSxcbiAgICAvLyBBcHBSb3V0aW5nTW9kdWxlXG5cdFx0VE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG5cdFx0XHQvLyAnZmEnOiAnLi9hc3NldHMvZm9udC1hd2Vzb21lLmNzcycsXG5cdFx0XHQnZmEnOiAnLi9hc3NldHMvZm9udC1hd2Vzb21lLm1pbi5jc3MnLFxuXHRcdFx0Ly8gJ21hdCc6ICcuL2ZvbnRzL0dvb2dsZS9tYXRlcmlhbC1pY29ucy5jc3MnLFxuXHRcdFx0Ly8gJ2lvbic6ICcuL2Fzc2V0cy9pb25pY29ucy5jc3MnXG5cdFx0fSlcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==