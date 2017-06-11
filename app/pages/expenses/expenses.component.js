"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ExpensesComponent = (function () {
    function ExpensesComponent(zone, router) {
        this.zone = zone;
        this.router = router;
    }
    ExpensesComponent.prototype.ngOnInit = function () {
    };
    return ExpensesComponent;
}());
ExpensesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "expenses",
        templateUrl: "./expenses.component.html",
        styleUrls: ["./expenses.css"],
    }),
    __metadata("design:paramtypes", [core_1.NgZone,
        router_1.Router])
], ExpensesComponent);
exports.ExpensesComponent = ExpensesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlGO0FBQ2pGLDBDQUF5RDtBQWF6RCxJQUFhLGlCQUFpQjtJQUc1QiwyQkFDVSxJQUFZLEVBQ1osTUFBYztRQURkLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXRCLENBQUM7SUFFSCxvQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO0tBQzlCLENBQUM7cUNBS2dCLGFBQU07UUFDSixlQUFNO0dBTGIsaUJBQWlCLENBVzdCO0FBWFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgR2VzdHVyZVR5cGVzLCBTd2lwZUdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSdcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIlxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiZXhwZW5zZXNcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9leHBlbnNlcy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZXhwZW5zZXMuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBlbnNlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgcGFnZTogUGFnZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICkge1xuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIl19