"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Router, ActivatedRoute } from "@angular/router";
var router_1 = require("nativescript-angular/router");
var store_1 = require("@ngrx/store");
var reducers_1 = require("../../../reducers");
var transition = { name: "slide", duration: 300 };
var ActiveViewComponent = (function () {
    function ActiveViewComponent(store, router) {
        this.store = store;
        this.router = router;
        this.data$ = this.store.let(reducers_1.getCyclesData());
    }
    ActiveViewComponent.prototype.openCycle = function () {
        console.log('open');
        this.router.navigateByUrl('/active/open/', { transition: transition });
    };
    ActiveViewComponent.prototype.createExpense = function (params) {
        // createExpense({ id, amount, category }) {
        console.log('create yay!');
        console.dir(params);
        // this.store.dispatch(this.actions.create({ name }));
        // this.router.navigateByUrl('/create', { transition });
    };
    ActiveViewComponent.prototype.ngOnInit = function () {
    };
    ActiveViewComponent.prototype.ngAfterViewInit = function () { };
    return ActiveViewComponent;
}());
ActiveViewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "active-view",
        templateUrl: "./view.component.html",
        styleUrls: ["./view.css"],
    }),
    __metadata("design:paramtypes", [store_1.Store,
        router_1.RouterExtensions])
], ActiveViewComponent);
exports.ActiveViewComponent = ActiveViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyw0REFBNEQ7QUFDNUQsc0RBQStEO0FBTy9ELHFDQUFvQztBQUNwQyw4Q0FBNEQ7QUFFNUQsSUFBTSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQVFwRCxJQUFhLG1CQUFtQjtJQUs5Qiw2QkFDVSxLQUFzQixFQUN0QixNQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUVoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHdCQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCx1Q0FBUyxHQUFUO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELDJDQUFhLEdBQWIsVUFBYyxNQUFNO1FBQ3BCLDRDQUE0QztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsc0RBQXNEO1FBQ3RELHdEQUF3RDtJQUMxRCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw2Q0FBZSxHQUFmLGNBQW9CLENBQUM7SUFDdkIsMEJBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLG1CQUFtQjtJQU4vQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQzFCLENBQUM7cUNBT2lCLGFBQUs7UUFDSix5QkFBZ0I7R0FQdkIsbUJBQW1CLENBNkIvQjtBQTdCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuLy8gaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcbmltcG9ydCB7IFNsaWRlc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzJztcbmltcG9ydCB7IFNsaWRlc0NvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzL3NsaWRlcy9hcHAvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3ljbGVJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY3ljbGUubW9kZWwnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCB7IEFwcFN0YXRlLCBnZXRDeWNsZXNEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL3JlZHVjZXJzXCI7XG5cbmNvbnN0IHRyYW5zaXRpb24gPSB7IG5hbWU6IFwic2xpZGVcIiwgZHVyYXRpb246IDMwMCB9O1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWN0aXZlLXZpZXdcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi92aWV3LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi92aWV3LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBwYWdlOiBQYWdlO1xuICBwdWJsaWMgZGF0YSQ6IE9ic2VydmFibGU8Q3ljbGVJbnRlcmZhY2VbXT47XG4gIHB1YmxpYyBzbGlkZXM6IFNsaWRlc0NvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICkge1xuICAgIHRoaXMuZGF0YSQgPSB0aGlzLnN0b3JlLmxldChnZXRDeWNsZXNEYXRhKCkpO1xuICB9XG5cbiAgb3BlbkN5Y2xlKCkge1xuICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2FjdGl2ZS9vcGVuLycsIHsgdHJhbnNpdGlvbiB9KTtcbiAgfVxuXG4gIGNyZWF0ZUV4cGVuc2UocGFyYW1zKSB7XG4gIC8vIGNyZWF0ZUV4cGVuc2UoeyBpZCwgYW1vdW50LCBjYXRlZ29yeSB9KSB7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0ZSB5YXkhJyk7XG4gICAgY29uc29sZS5kaXIocGFyYW1zKTtcbiAgICAvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKHRoaXMuYWN0aW9ucy5jcmVhdGUoeyBuYW1lIH0pKTtcbiAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvY3JlYXRlJywgeyB0cmFuc2l0aW9uIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgfVxufVxuIl19