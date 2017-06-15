"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ActiveOpenComponent = (function () {
    function ActiveOpenComponent(router) {
        this.router = router;
    }
    ActiveOpenComponent.prototype.goBack = function () {
        // this.router.back();
        this.router.backToPreviousPage();
    };
    ActiveOpenComponent.prototype.ngOnInit = function () { };
    ActiveOpenComponent.prototype.ngAfterViewInit = function () { };
    return ActiveOpenComponent;
}());
ActiveOpenComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "active-open",
        templateUrl: "./open.component.html",
        styleUrls: ["./open.css"],
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], ActiveOpenComponent);
exports.ActiveOpenComponent = ActiveOpenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcGVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUVoRyxzREFBMEU7QUFXMUUsSUFBYSxtQkFBbUI7SUFFOUIsNkJBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzVDLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0Usc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0NBQVEsR0FBUixjQUFZLENBQUM7SUFFYiw2Q0FBZSxHQUFmLGNBQW1CLENBQUM7SUFDdEIsMEJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLG1CQUFtQjtJQU4vQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQzFCLENBQUM7cUNBRzRCLHlCQUFnQjtHQUZqQyxtQkFBbUIsQ0FhL0I7QUFiWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMsIFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSdcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIlxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWN0aXZlLW9wZW5cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9vcGVuLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9vcGVuLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlT3BlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgfVxuXG4gIGdvQmFjaygpIHtcbiAgICAvLyB0aGlzLnJvdXRlci5iYWNrKCk7XG4gICAgdGhpcy5yb3V0ZXIuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge31cbn1cbiJdfQ==