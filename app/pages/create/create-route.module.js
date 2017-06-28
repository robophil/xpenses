"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var create_component_1 = require("./create.component");
var ActiveRouteModule = (function () {
    function ActiveRouteModule() {
    }
    return ActiveRouteModule;
}());
ActiveRouteModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forChild([
                { path: 'create', component: create_component_1.CreateComponent }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], ActiveRouteModule);
exports.ActiveRouteModule = ActiveRouteModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXJvdXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1yb3V0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0RBQXVFO0FBQ3ZFLHVEQUFxRDtBQVdyRCxJQUFhLGlCQUFpQjtJQUE5QjtJQUFpQyxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBQWxDLElBQWtDO0FBQXJCLGlCQUFpQjtJQVQ3QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0IsQ0FBQyxRQUFRLENBQUM7Z0JBQ2hDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTthQUMvQyxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUNwQyxDQUFDO0dBRVcsaUJBQWlCLENBQUk7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL2NyZWF0ZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHsgcGF0aDogJ2NyZWF0ZScsIGNvbXBvbmVudDogQ3JlYXRlQ29tcG9uZW50IH1cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIEFjdGl2ZVJvdXRlTW9kdWxlIHsgfVxuIl19