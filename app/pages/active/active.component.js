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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsMENBQXlEO0FBSXpELGtDQUFrQztBQVFsQyxJQUFhLGVBQWU7SUFHMUI7UUFDRSx3QkFBd0I7UUFDaEIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFdEIsQ0FBQztJQUVILGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQseUNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQVMsZUFBTyxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ3hDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDO1lBQ2Qsb0NBQW9DO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztRQUNyQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7S0FDNUIsQ0FBQztxQ0FNa0IsZUFBTTtHQUxiLGVBQWUsQ0FzQjNCO0FBdEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgR2VzdHVyZVR5cGVzLCBTd2lwZUdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhY3RpdmVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hY3RpdmUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2FjdGl2ZS5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgcGFnZTogUGFnZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICkge1xuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnBhZ2UgPSA8UGFnZT50b3Btb3N0KCkuY3VycmVudFBhZ2U7XG4gICAgaWYodGhpcy5wYWdlKSAge1xuICAgICAgLy8gdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICB0aGlzLnBhZ2Uuc3RhdHVzQmFyU3R5bGUgPSAnbGlnaHQnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZGlyKHRoaXMucGFnZSk7XG4gICAgfVxuICB9XG59XG4iXX0=