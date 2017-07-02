"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Router, ActivatedRoute } from "@angular/router";
var router_1 = require("nativescript-angular/router");
var store_1 = require("@ngrx/store");
var reducers_1 = require("../../../reducers");
var cycles_action_1 = require("../../../actions/cycles.action");
var transition = { name: "slide", duration: 300 };
var ActiveViewComponent = (function () {
    function ActiveViewComponent(store, router, actions) {
        this.store = store;
        this.router = router;
        this.actions = actions;
        this.data$ = this.store.let(reducers_1.getCyclesData());
    }
    ActiveViewComponent.prototype.openCycle = function () {
        console.log('open');
        this.router.navigateByUrl('/active/open/', { transition: transition });
    };
    ActiveViewComponent.prototype.createExpense = function (_a) {
        var id = _a.id, amount = _a.amount, category = _a.category;
        this.store.dispatch(this.actions.add_category({ id: id, amount: amount, category: category }));
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
        router_1.RouterExtensions,
        cycles_action_1.CyclesActions])
], ActiveViewComponent);
exports.ActiveViewComponent = ActiveViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyw0REFBNEQ7QUFDNUQsc0RBQStEO0FBTy9ELHFDQUFvQztBQUNwQyw4Q0FBNEQ7QUFDNUQsZ0VBQStEO0FBRS9ELElBQU0sVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFRcEQsSUFBYSxtQkFBbUI7SUFLOUIsNkJBQ1UsS0FBc0IsRUFDdEIsTUFBd0IsRUFDeEIsT0FBc0I7UUFGdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUU5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHdCQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCx1Q0FBUyxHQUFUO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELDJDQUFhLEdBQWIsVUFBYyxFQUF3QjtZQUF0QixVQUFFLEVBQUUsa0JBQU0sRUFBRSxzQkFBUTtRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDZDQUFlLEdBQWYsY0FBb0IsQ0FBQztJQUN2QiwwQkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7S0FDMUIsQ0FBQztxQ0FPaUIsYUFBSztRQUNKLHlCQUFnQjtRQUNmLDZCQUFhO0dBUnJCLG1CQUFtQixDQTBCL0I7QUExQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vIGltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5pbXBvcnQgeyBTbGlkZXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LXNsaWRlcyc7XG5pbXBvcnQgeyBTbGlkZXNDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LXNsaWRlcy9zbGlkZXMvYXBwL3NsaWRlcy9zbGlkZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEN5Y2xlSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2N5Y2xlLm1vZGVsJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSwgZ2V0Q3ljbGVzRGF0YSB9IGZyb20gXCIuLi8uLi8uLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgQ3ljbGVzQWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zL2N5Y2xlcy5hY3Rpb25cIjtcblxuY29uc3QgdHJhbnNpdGlvbiA9IHsgbmFtZTogXCJzbGlkZVwiLCBkdXJhdGlvbjogMzAwIH07XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhY3RpdmUtdmlld1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXcuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3ZpZXcuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIHBhZ2U6IFBhZ2U7XG4gIHB1YmxpYyBkYXRhJDogT2JzZXJ2YWJsZTxDeWNsZUludGVyZmFjZVtdPjtcbiAgcHVibGljIHNsaWRlczogU2xpZGVzQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGFjdGlvbnM6IEN5Y2xlc0FjdGlvbnMsXG4gICkge1xuICAgIHRoaXMuZGF0YSQgPSB0aGlzLnN0b3JlLmxldChnZXRDeWNsZXNEYXRhKCkpO1xuICB9XG5cbiAgb3BlbkN5Y2xlKCkge1xuICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2FjdGl2ZS9vcGVuLycsIHsgdHJhbnNpdGlvbiB9KTtcbiAgfVxuXG4gIGNyZWF0ZUV4cGVuc2UoeyBpZCwgYW1vdW50LCBjYXRlZ29yeSB9KSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLmFjdGlvbnMuYWRkX2NhdGVnb3J5KHsgaWQsIGFtb3VudCwgY2F0ZWdvcnkgfSkpO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgfVxufVxuIl19