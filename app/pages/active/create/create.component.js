"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ActiveCreateComponent = (function () {
    function ActiveCreateComponent(router) {
        this.router = router;
    }
    ActiveCreateComponent.prototype.goBack = function () {
        // this.router.back();
        this.router.backToPreviousPage();
    };
    ActiveCreateComponent.prototype.ngOnInit = function () { };
    ActiveCreateComponent.prototype.ngAfterViewInit = function () { };
    return ActiveCreateComponent;
}());
ActiveCreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "active-create",
        templateUrl: "./create.component.html",
        styleUrls: ["./create.css"],
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], ActiveCreateComponent);
exports.ActiveCreateComponent = ActiveCreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFFaEcsc0RBQTBFO0FBVzFFLElBQWEscUJBQXFCO0lBRWhDLCtCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM1QyxDQUFDO0lBRUQsc0NBQU0sR0FBTjtRQUNFLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELHdDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsK0NBQWUsR0FBZixjQUFtQixDQUFDO0lBQ3RCLDRCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxxQkFBcUI7SUFOakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztLQUM1QixDQUFDO3FDQUc0Qix5QkFBZ0I7R0FGakMscUJBQXFCLENBYWpDO0FBYlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFjdGl2ZS1jcmVhdGVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jcmVhdGUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2NyZWF0ZS5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgfVxuXG4gIGdvQmFjaygpIHtcbiAgICAvLyB0aGlzLnJvdXRlci5iYWNrKCk7XG4gICAgdGhpcy5yb3V0ZXIuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge31cbn1cbiJdfQ==