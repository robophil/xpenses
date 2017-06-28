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
    ActiveViewComponent.prototype.createCycle = function () {
        this.router.navigateByUrl('/create', { transition: transition });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyw0REFBNEQ7QUFDNUQsc0RBQStEO0FBTy9ELHFDQUFvQztBQUNwQyw4Q0FBNEQ7QUFFNUQsSUFBTSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQVFwRCxJQUFhLG1CQUFtQjtJQUs5Qiw2QkFDVSxLQUFzQixFQUN0QixNQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUVoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHdCQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCx1Q0FBUyxHQUFUO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHNDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNkNBQWUsR0FBZixjQUFvQixDQUFDO0lBQ3ZCLDBCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxtQkFBbUI7SUFOL0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztLQUMxQixDQUFDO3FDQU9pQixhQUFLO1FBQ0oseUJBQWdCO0dBUHZCLG1CQUFtQixDQXlCL0I7QUF6Qlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vIGltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5pbXBvcnQgeyBTbGlkZXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LXNsaWRlcyc7XG5pbXBvcnQgeyBTbGlkZXNDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LXNsaWRlcy9zbGlkZXMvYXBwL3NsaWRlcy9zbGlkZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEN5Y2xlSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2N5Y2xlLm1vZGVsJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSwgZ2V0Q3ljbGVzRGF0YSB9IGZyb20gXCIuLi8uLi8uLi9yZWR1Y2Vyc1wiO1xuXG5jb25zdCB0cmFuc2l0aW9uID0geyBuYW1lOiBcInNsaWRlXCIsIGR1cmF0aW9uOiAzMDAgfTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFjdGl2ZS12aWV3XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdmlldy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdmlldy5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgcGFnZTogUGFnZTtcbiAgcHVibGljIGRhdGEkOiBPYnNlcnZhYmxlPEN5Y2xlSW50ZXJmYWNlW10+O1xuICBwdWJsaWMgc2xpZGVzOiBTbGlkZXNDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICApIHtcbiAgICB0aGlzLmRhdGEkID0gdGhpcy5zdG9yZS5sZXQoZ2V0Q3ljbGVzRGF0YSgpKTtcbiAgfVxuXG4gIG9wZW5DeWNsZSgpIHtcbiAgICBjb25zb2xlLmxvZygnb3BlbicpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9hY3RpdmUvb3Blbi8nLCB7IHRyYW5zaXRpb24gfSk7XG4gIH1cblxuICBjcmVhdGVDeWNsZSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvY3JlYXRlJywgeyB0cmFuc2l0aW9uIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgfVxufVxuIl19