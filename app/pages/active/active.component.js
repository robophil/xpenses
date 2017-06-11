"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var frame_1 = require("ui/frame");
var ActiveComponent = (function () {
    function ActiveComponent(
        // private zone: NgZone,
        router) {
        this.router = router;
    }
    ActiveComponent.prototype.format = function (input) {
        var suffix = input > 1000000 ? 'M' : 'K';
        var count = (input > 1000000 ? input / 1000000 : input / 1000).toFixed(1);
        return { count: count, suffix: suffix };
    };
    ActiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data$ = Observable_1.Observable.of(4).map(function (i) {
            var data = [];
            for (i; i > 0; i--) {
                var rand = function () { return Math.floor(Math.random() * 1000); };
                var expense = _this.format(rand() * i);
                var budget = _this.format(rand() * i);
                data.push({ expense: expense, budget: budget });
            }
            return data;
        });
    };
    ActiveComponent.prototype.ngAfterViewInit = function () {
        this.page = frame_1.topmost().currentPage;
        if (this.page) {
            this.page.actionBarHidden = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsMENBQXlEO0FBQ3pELDhDQUE2QztBQUk3QyxrQ0FBa0M7QUFRbEMsSUFBYSxlQUFlO0lBTzFCO1FBQ0Usd0JBQXdCO1FBQ2hCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXRCLENBQUM7SUFFSCxnQ0FBTSxHQUFOLFVBQU8sS0FBSztRQUNWLElBQU0sTUFBTSxHQUFHLEtBQUssR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzQyxJQUFNLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVFLE1BQU0sQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUNqQyxJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7WUFFaEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbkIsSUFBTSxJQUFJLEdBQUcsY0FBTSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO2dCQUNwRCxJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQseUNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQVMsZUFBTyxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ3hDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztRQUNyQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQztBQTVDWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7S0FDNUIsQ0FBQztxQ0FVa0IsZUFBTTtHQVRiLGVBQWUsQ0E0QzNCO0FBNUNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgR2VzdHVyZVR5cGVzLCBTd2lwZUdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSdcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIlxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWN0aXZlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWN0aXZlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9hY3RpdmUuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIHBhZ2U6IFBhZ2U7XG4gIHByaXZhdGUgZGF0YSQ6IE9ic2VydmFibGU8e1xuICAgIGV4cGVuc2U6IHsgY291bnQ6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgfSxcbiAgICBidWRnZXQ6IHsgY291bnQ6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgfVxuICB9W10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgKSB7XG4gICAgfVxuXG4gIGZvcm1hdChpbnB1dCkge1xuICAgIGNvbnN0IHN1ZmZpeCA9IGlucHV0ID4gMTAwMDAwMCA/ICdNJyA6ICdLJztcbiAgICBjb25zdCBjb3VudCA9IChpbnB1dCA+IDEwMDAwMDAgPyBpbnB1dCAvIDEwMDAwMDAgOiBpbnB1dCAvIDEwMDApLnRvRml4ZWQoMSk7XG4gICAgcmV0dXJuIHsgY291bnQsIHN1ZmZpeCB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRhJCA9IE9ic2VydmFibGUub2YoNCkubWFwKGkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IFtdO1xuXG4gICAgICBmb3IgKGk7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgcmFuZCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgICAgICBjb25zdCBleHBlbnNlID0gdGhpcy5mb3JtYXQocmFuZCgpICogaSk7XG4gICAgICAgIGNvbnN0IGJ1ZGdldCA9IHRoaXMuZm9ybWF0KHJhbmQoKSAqIGkpO1xuICAgICAgICBkYXRhLnB1c2goeyBleHBlbnNlLCBidWRnZXQgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5wYWdlID0gPFBhZ2U+dG9wbW9zdCgpLmN1cnJlbnRQYWdlO1xuICAgIGlmKHRoaXMucGFnZSkgIHtcbiAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5wYWdlLnN0YXR1c0JhclN0eWxlID0gJ2xpZ2h0JztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmRpcih0aGlzLnBhZ2UpO1xuICAgIH1cbiAgfVxufVxuIl19