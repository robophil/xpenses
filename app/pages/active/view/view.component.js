"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Router, ActivatedRoute } from "@angular/router";
var router_1 = require("nativescript-angular/router");
var Observable_1 = require("rxjs/Observable");
var transition = { name: "slide", duration: 300 };
var ActiveViewComponent = (function () {
    function ActiveViewComponent(router) {
        this.router = router;
    }
    ActiveViewComponent.prototype.openCycle = function () {
        console.log('open');
        this.router.navigateByUrl('/active/open/', { transition: transition });
    };
    ActiveViewComponent.prototype.createCycle = function () {
        this.router.navigateByUrl('/active/create', { transition: transition });
    };
    ActiveViewComponent.prototype.format = function (input) {
        var suffix = input > 1000000 ? 'M' : 'K';
        var count = (input > 1000000 ? input / 1000000 : input / 1000).toFixed(1);
        return { count: count, suffix: suffix };
    };
    ActiveViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data$ = Observable_1.Observable.of(2).map(function (i) {
            var data = [];
            var rand = function () { return Math.floor(Math.random() * 1000); };
            var id = rand();
            for (i; i > 0; i--) {
                var expense = _this.format(rand() * i);
                var budget = _this.format(rand() * i);
                var categories = [];
                for (i = 10; i > 0; i--) {
                    var id_2 = rand(), name_1 = 'category_' + rand(), value = rand();
                    categories.push({ id: id_2, name: name_1, value: value });
                }
                data.push({ id: id, categories: categories, expense: expense, budget: budget });
            }
            return data;
        });
    };
    ActiveViewComponent.prototype.ngAfterViewInit = function () {
    };
    return ActiveViewComponent;
}());
ActiveViewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "active-view",
        templateUrl: "./view.component.html",
        styleUrls: ["./view.css"],
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], ActiveViewComponent);
exports.ActiveViewComponent = ActiveViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyw0REFBNEQ7QUFDNUQsc0RBQStEO0FBQy9ELDhDQUE2QztBQU03QyxJQUFNLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBUXBELElBQWEsbUJBQW1CO0lBVTlCLDZCQUNVLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzlCLENBQUM7SUFFTCx1Q0FBUyxHQUFUO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsb0NBQU0sR0FBTixVQUFPLEtBQUs7UUFDVixJQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0MsSUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxNQUFNLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUNqQyxJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBTSxJQUFJLEdBQUcsY0FBTSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO1lBQ3BELElBQU0sRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDO1lBRWxCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ25CLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFFdEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ3hCLElBQU0sSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFLE1BQUksR0FBRyxXQUFXLEdBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDO29CQUMvRCxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDZDQUFlLEdBQWY7SUFDQSxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDO0FBdERZLG1CQUFtQjtJQU4vQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQzFCLENBQUM7cUNBWWtCLHlCQUFnQjtHQVh2QixtQkFBbUIsQ0FzRC9CO0FBdERZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vLyBpbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSdcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIlxuaW1wb3J0IHsgU2xpZGVzTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1zbGlkZXMnO1xuaW1wb3J0IHsgU2xpZGVzQ29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1zbGlkZXMvc2xpZGVzL2FwcC9zbGlkZXMvc2xpZGVzLmNvbXBvbmVudCc7XG5cbmNvbnN0IHRyYW5zaXRpb24gPSB7IG5hbWU6IFwic2xpZGVcIiwgZHVyYXRpb246IDMwMCB9O1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWN0aXZlLXZpZXdcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi92aWV3LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi92aWV3LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBwYWdlOiBQYWdlO1xuICBwdWJsaWMgZGF0YSQ6IE9ic2VydmFibGU8e1xuICAgIGlkOiBudW1iZXIsXG4gICAgY2F0ZWdvcmllczogc3RyaW5nW10sXG4gICAgZXhwZW5zZTogeyBjb3VudDogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyB9LFxuICAgIGJ1ZGdldDogeyBjb3VudDogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyB9XG4gIH1bXT47XG4gIHB1YmxpYyBzbGlkZXM6IFNsaWRlc0NvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgKSB7IH1cblxuICBvcGVuQ3ljbGUoKSB7XG4gICAgY29uc29sZS5sb2coJ29wZW4nKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvYWN0aXZlL29wZW4vJywgeyB0cmFuc2l0aW9uIH0pO1xuICB9XG5cbiAgY3JlYXRlQ3ljbGUoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2FjdGl2ZS9jcmVhdGUnLCB7IHRyYW5zaXRpb24gfSk7XG4gIH1cblxuICBmb3JtYXQoaW5wdXQpIHtcbiAgICBjb25zdCBzdWZmaXggPSBpbnB1dCA+IDEwMDAwMDAgPyAnTScgOiAnSyc7XG4gICAgY29uc3QgY291bnQgPSAoaW5wdXQgPiAxMDAwMDAwID8gaW5wdXQgLyAxMDAwMDAwIDogaW5wdXQgLyAxMDAwKS50b0ZpeGVkKDEpO1xuICAgIHJldHVybiB7IGNvdW50LCBzdWZmaXggfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YSQgPSBPYnNlcnZhYmxlLm9mKDIpLm1hcChpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICAgIGNvbnN0IHJhbmQgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICAgIGNvbnN0IGlkID0gcmFuZCgpO1xuXG4gICAgICBmb3IgKGk7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgZXhwZW5zZSA9IHRoaXMuZm9ybWF0KHJhbmQoKSAqIGkpO1xuICAgICAgICBjb25zdCBidWRnZXQgPSB0aGlzLmZvcm1hdChyYW5kKCkgKiBpKTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFtdO1xuXG4gICAgICAgIGZvciAoaSA9IDEwOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgY29uc3QgaWRfMiA9IHJhbmQoKSwgbmFtZSA9ICdjYXRlZ29yeV8nK3JhbmQoKSwgdmFsdWUgPSByYW5kKCk7XG4gICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKHsgaWQ6IGlkXzIsIG5hbWUsIHZhbHVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5wdXNoKHsgaWQsIGNhdGVnb3JpZXMsIGV4cGVuc2UsIGJ1ZGdldCB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgfVxufVxuIl19