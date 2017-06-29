"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Component, OnInit, AfterViewInit } from '@angular/core';
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("@ngrx/store");
var reducers_1 = require("../../reducers");
var toMoney_1 = require("../../utils/toMoney");
var nativescript_ng_gradient_1 = require("nativescript-ng-gradient");
var HomeComponent = (function () {
    function HomeComponent(store, router) {
        this.store = store;
        this.router = router;
        this.title = "";
        this.hiddenBottom = true;
        this.gColors = ['rgb(233, 30, 99)', 'rgb(167, 11, 65)', 'rgb(109, 10, 44)'];
        this.gType = nativescript_ng_gradient_1.Types.LINEAR_GRADIENT;
        this.gOrient = nativescript_ng_gradient_1.Orientation.TOP_BOTTOM;
        this.data$ = this.store.let(reducers_1.getCyclesData()).map(function (cycles) {
            var totals = cycles.reduce(function (acc, _a) {
                var budget = _a.budget, expense = _a.expense;
                return { budget: acc.budget + budget.value, expense: acc.expense + expense.value };
            }, { budget: 0, expense: 0 });
            var count = cycles.length;
            return { count: count, totals: totals };
        });
    }
    HomeComponent.prototype.format = function (value) {
        return value && toMoney_1.default(value);
    };
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.showcaseLoaded = function (args) {
        this.showcase.nativeElement.android.getParent().setClipToPadding(false);
        this.showcase.nativeElement.android.getParent().setClipChildren(false);
    };
    HomeComponent.prototype.onSwipe = function (arg) {
        if (arg.direction == 2) {
            this.hiddenBottom = false;
            this.router.navigateByUrl('main/active');
        }
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild('showcase'),
    __metadata("design:type", core_1.ElementRef)
], HomeComponent.prototype, "showcase", void 0);
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.css']
    }),
    __metadata("design:paramtypes", [store_1.Store, router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9FQUFvRTtBQUNwRSxzQ0FBd0Y7QUFFeEYsMENBQXlEO0FBQ3pELHFDQUFvQztBQUNwQywyQ0FBb0U7QUFFcEUsK0NBQTBDO0FBRTFDLHFFQUE4RDtBQVE5RCxJQUFhLGFBQWE7SUFTeEIsdUJBQW9CLEtBQXNCLEVBQVUsTUFBYztRQUE5QyxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQbEUsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBRWIsWUFBTyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUN2RSxVQUFLLEdBQUcsZ0NBQUssQ0FBQyxlQUFlLENBQUM7UUFDOUIsWUFBTyxHQUFHLHNDQUFXLENBQUMsVUFBVSxDQUFDO1FBR3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsd0JBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBYTtZQUM3RCxJQUFNLE1BQU0sR0FDVixNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLEVBQW1CO29CQUFqQixrQkFBTSxFQUFFLG9CQUFPO2dCQUNuQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxHQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqRixDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFNUIsTUFBTSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sS0FBYTtRQUNsQixNQUFNLENBQUMsS0FBSyxJQUFJLGlCQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVGLGdDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsdUNBQWUsR0FBZjtJQUNDLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLEdBQTBCO1FBQ2hDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQTtZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxDQUFDO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQztBQXJDd0I7SUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7OEJBQVcsaUJBQVU7K0NBQUM7QUFKakMsYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ3BCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxxQkFBcUI7UUFDakMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO0tBQ3hCLENBQUM7cUNBVTJCLGFBQUssRUFBNEIsZUFBTTtHQVR2RCxhQUFhLENBeUN6QjtBQXpDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTd2lwZUdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd1aS9nZXN0dXJlcyc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCB7IEFwcFN0YXRlLCBnZXRDeWNsZXMsIGdldEN5Y2xlc0RhdGEgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcbmltcG9ydCB7IEN5Y2xlc01vZGVsLCBDeWNsZUludGVyZmFjZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY3ljbGUubW9kZWxcIjtcbmltcG9ydCB0b01vbmV5IGZyb20gXCIuLi8uLi91dGlscy90b01vbmV5XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgVHlwZXMsIE9yaWVudGF0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZy1ncmFkaWVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdob21lJyxcblx0dGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIGRhdGEkOiBPYnNlcnZhYmxlPHsgY291bnQ6IG51bWJlciwgdG90YWxzOiB7IGJ1ZGdldDogbnVtYmVyLCBleHBlbnNlczogbnVtYmVyIH0gfT47XG4gIHRpdGxlID0gXCJcIjtcbiAgaGlkZGVuQm90dG9tID0gdHJ1ZTtcbiAgQFZpZXdDaGlsZCgnc2hvd2Nhc2UnKSBzaG93Y2FzZTogRWxlbWVudFJlZjtcbiAgcHVibGljIGdDb2xvcnMgPSBbJ3JnYigyMzMsIDMwLCA5OSknLCAncmdiKDE2NywgMTEsIDY1KScsICdyZ2IoMTA5LCAxMCwgNDQpJ107XG4gIHB1YmxpYyBnVHlwZSA9IFR5cGVzLkxJTkVBUl9HUkFESUVOVDtcbiAgcHVibGljIGdPcmllbnQgPSBPcmllbnRhdGlvbi5UT1BfQk9UVE9NO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuZGF0YSQgPSB0aGlzLnN0b3JlLmxldChnZXRDeWNsZXNEYXRhKCkpLm1hcCgoY3ljbGVzOiBhbnlbXSkgPT4ge1xuICAgICAgY29uc3QgdG90YWxzOiB7IGJ1ZGdldDogbnVtYmVyLCBleHBlbnNlczogbnVtYmVyIH0gPVxuICAgICAgICBjeWNsZXMucmVkdWNlKChhY2MsIHsgYnVkZ2V0LCBleHBlbnNlIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4geyBidWRnZXQ6IGFjYy5idWRnZXQrYnVkZ2V0LnZhbHVlLCBleHBlbnNlOiBhY2MuZXhwZW5zZStleHBlbnNlLnZhbHVlIH07XG4gICAgICAgIH0sIHsgYnVkZ2V0OiAwLCBleHBlbnNlOiAwIH0pO1xuICAgICAgY29uc3QgY291bnQgPSBjeWNsZXMubGVuZ3RoO1xuXG4gICAgICByZXR1cm4geyBjb3VudCwgdG90YWxzIH07XG4gICAgfSk7XG4gIH1cblxuICBmb3JtYXQodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHRvTW9uZXkodmFsdWUpO1xuICB9XG5cblx0bmdPbkluaXQoKSB7fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgfVxuXG4gIHNob3djYXNlTG9hZGVkKGFyZ3MpIHtcbiAgICB0aGlzLnNob3djYXNlLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5nZXRQYXJlbnQoKS5zZXRDbGlwVG9QYWRkaW5nKGZhbHNlKTtcbiAgICB0aGlzLnNob3djYXNlLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5nZXRQYXJlbnQoKS5zZXRDbGlwQ2hpbGRyZW4oZmFsc2UpO1xuICB9XG5cbiAgb25Td2lwZShhcmc6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIGlmKGFyZy5kaXJlY3Rpb24gPT0gMikge1xuICAgICAgdGhpcy5oaWRkZW5Cb3R0b20gPSBmYWxzZVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnbWFpbi9hY3RpdmUnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==