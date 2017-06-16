"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var frame_1 = require("ui/frame");
var ActiveComponent = (function () {
    function ActiveComponent(
        // private zone: NgZone,
        router) {
        this.router = router;
        this.title = "Active Cycles";
    }
    ActiveComponent.prototype.ngOnInit = function () {
    };
    ActiveComponent.prototype.ngAfterViewInit = function () {
        this.page = frame_1.topmost().currentPage;
        if (this.page) {
            // this.page.actionBarHidden = true;
            this.page.statusBarStyle = 'light';
        }
        else {
            console.dir(this.page);
        }
    };
    return ActiveComponent;
}());
ActiveComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "active",
        templateUrl: "./active.component.html",
        styleUrls: ["./active.css"],
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ActiveComponent);
exports.ActiveComponent = ActiveComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsMENBQXlEO0FBSXpELGtDQUFrQztBQVFsQyxJQUFhLGVBQWU7SUFJMUI7UUFDRSx3QkFBd0I7UUFDaEIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKakIsVUFBSyxHQUFHLGVBQWUsQ0FBQztJQU03QixDQUFDO0lBRUgsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBUyxlQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDeEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUM7WUFDZCxvQ0FBb0M7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBQ3JDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLGVBQWU7SUFOM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztLQUM1QixDQUFDO3FDQU9rQixlQUFNO0dBTmIsZUFBZSxDQXVCM0I7QUF2QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFjdGl2ZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FjdGl2ZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYWN0aXZlLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBwYWdlOiBQYWdlO1xuICBwdWJsaWMgdGl0bGUgPSBcIkFjdGl2ZSBDeWNsZXNcIjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICkge1xuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnBhZ2UgPSA8UGFnZT50b3Btb3N0KCkuY3VycmVudFBhZ2U7XG4gICAgaWYodGhpcy5wYWdlKSAge1xuICAgICAgLy8gdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICB0aGlzLnBhZ2Uuc3RhdHVzQmFyU3R5bGUgPSAnbGlnaHQnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZGlyKHRoaXMucGFnZSk7XG4gICAgfVxuICB9XG59XG4iXX0=