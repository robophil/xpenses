"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var cycles_component_1 = require("./cycles.component");
var CyclesRouteModule = (function () {
    function CyclesRouteModule() {
    }
    return CyclesRouteModule;
}());
CyclesRouteModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forChild([
                { path: 'cycles', component: cycles_component_1.CyclesComponent }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], CyclesRouteModule);
exports.CyclesRouteModule = CyclesRouteModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGVzLXJvdXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN5Y2xlcy1yb3V0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0RBQXVFO0FBRXZFLHVEQUFxRDtBQVdyRCxJQUFhLGlCQUFpQjtJQUE5QjtJQUFpQyxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBQWxDLElBQWtDO0FBQXJCLGlCQUFpQjtJQVQ3QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0IsQ0FBQyxRQUFRLENBQUM7Z0JBQ2hDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTthQUMvQyxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUNwQyxDQUFDO0dBRVcsaUJBQWlCLENBQUk7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEN5Y2xlc0NvbXBvbmVudCB9IGZyb20gJy4vY3ljbGVzLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcbiAgICAgIHsgcGF0aDogJ2N5Y2xlcycsIGNvbXBvbmVudDogQ3ljbGVzQ29tcG9uZW50IH1cclxuICAgIF0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN5Y2xlc1JvdXRlTW9kdWxlIHsgfVxyXG4iXX0=