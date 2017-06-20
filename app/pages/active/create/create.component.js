"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var store_1 = require("@ngrx/store");
var cycles_action_1 = require("../../../actions/cycles.action");
var ActiveCreateComponent = (function () {
    function ActiveCreateComponent(store, cycles, router) {
        this.store = store;
        this.cycles = cycles;
        this.router = router;
    }
    ActiveCreateComponent.prototype.onCreate = function (budget1, budget2) {
        var budget = (+budget1) + ((+budget2) / 100);
        this.store.dispatch(this.cycles.create({ budget: budget }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFFaEcsc0RBQTBFO0FBSTFFLHFDQUFvQztBQUVwQyxnRUFBK0Q7QUFRL0QsSUFBYSxxQkFBcUI7SUFFaEMsK0JBQ1UsS0FBc0IsRUFDdEIsTUFBcUIsRUFDckIsTUFBd0I7UUFGeEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUVsQyxDQUFDO0lBRUQsd0NBQVEsR0FBUixVQUFTLE9BQU8sRUFBRSxPQUFPO1FBQ3ZCLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0Usc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsd0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCwrQ0FBZSxHQUFmLGNBQW9CLENBQUM7SUFDdkIsNEJBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJZLHFCQUFxQjtJQU5qQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO0tBQzVCLENBQUM7cUNBSWlCLGFBQUs7UUFDSiw2QkFBYTtRQUNiLHlCQUFnQjtHQUx2QixxQkFBcUIsQ0FzQmpDO0FBdEJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdWNlcnNcIjtcbmltcG9ydCB7IEN5Y2xlc0FjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2N5Y2xlcy5hY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWN0aXZlLWNyZWF0ZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY3JlYXRlLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXG4gICAgcHJpdmF0ZSBjeWNsZXM6IEN5Y2xlc0FjdGlvbnMsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgKSB7XG4gIH1cblxuICBvbkNyZWF0ZShidWRnZXQxLCBidWRnZXQyKSB7XG4gICAgY29uc3QgYnVkZ2V0ID0gKCtidWRnZXQxKSsoKCtidWRnZXQyKS8xMDApO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5jeWNsZXMuY3JlYXRlKHsgYnVkZ2V0IH0pKTtcbiAgfVxuXG4gIGdvQmFjaygpIHtcbiAgICAvLyB0aGlzLnJvdXRlci5iYWNrKCk7XG4gICAgdGhpcy5yb3V0ZXIuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgfVxufVxuIl19