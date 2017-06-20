"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var store_1 = require("@ngrx/store");
var cycles_action_1 = require("../../../actions/cycles.action");
var cycles_service_1 = require("../../../services/cycles.service");
var ActiveCreateComponent = (function () {
    function ActiveCreateComponent(store, cycles, router) {
        this.store = store;
        this.cycles = cycles;
        this.router = router;
        this.sign = cycles_service_1.sign;
    }
    ActiveCreateComponent.prototype.onCreate = function (budget1, budget2) {
        var _this = this;
        var budget = (+budget1) + ((+budget2) / 100);
        this.store.dispatch(this.cycles.create({ budget: budget }));
        // alert('yay');
        setTimeout(function () { return _this.router.navigateByUrl('/active'); }, 2000);
    };
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
    __metadata("design:paramtypes", [store_1.Store,
        cycles_action_1.CyclesActions,
        router_1.RouterExtensions])
], ActiveCreateComponent);
exports.ActiveCreateComponent = ActiveCreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFFaEcsc0RBQTBFO0FBSTFFLHFDQUFvQztBQUVwQyxnRUFBK0Q7QUFDL0QsbUVBQXdEO0FBT3hELElBQWEscUJBQXFCO0lBR2hDLCtCQUNVLEtBQXNCLEVBQ3RCLE1BQXFCLEVBQ3JCLE1BQXdCO1FBRnhCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFMM0IsU0FBSSxHQUFHLHFCQUFJLENBQUM7SUFPbkIsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxPQUFPLEVBQUUsT0FBTztRQUF6QixpQkFLQztRQUpDLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BELGdCQUFnQjtRQUNoQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFwQyxDQUFvQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0Usc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsd0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCwrQ0FBZSxHQUFmLGNBQW9CLENBQUM7SUFDdkIsNEJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDO0FBekJZLHFCQUFxQjtJQU5qQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO0tBQzVCLENBQUM7cUNBS2lCLGFBQUs7UUFDSiw2QkFBYTtRQUNiLHlCQUFnQjtHQU52QixxQkFBcUIsQ0F5QmpDO0FBekJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdWNlcnNcIjtcbmltcG9ydCB7IEN5Y2xlc0FjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2N5Y2xlcy5hY3Rpb24nO1xuaW1wb3J0IHsgc2lnbiB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9jeWNsZXMuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFjdGl2ZS1jcmVhdGVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jcmVhdGUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2NyZWF0ZS5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBzaWduID0gc2lnbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXG4gICAgcHJpdmF0ZSBjeWNsZXM6IEN5Y2xlc0FjdGlvbnMsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgKSB7XG4gIH1cblxuICBvbkNyZWF0ZShidWRnZXQxLCBidWRnZXQyKSB7XG4gICAgY29uc3QgYnVkZ2V0ID0gKCtidWRnZXQxKSsoKCtidWRnZXQyKS8xMDApO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5jeWNsZXMuY3JlYXRlKHsgYnVkZ2V0IH0pKTtcbiAgICAvLyBhbGVydCgneWF5Jyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvYWN0aXZlJyksIDIwMDApO1xuICB9XG5cbiAgZ29CYWNrKCkge1xuICAgIC8vIHRoaXMucm91dGVyLmJhY2soKTtcbiAgICB0aGlzLnJvdXRlci5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkgeyB9XG59XG4iXX0=