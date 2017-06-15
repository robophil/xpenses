"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var ActiveViewComponent = (function () {
    function ActiveViewComponent(
        // private zone: NgZone,
        router) {
        this.router = router;
    }
    ActiveViewComponent.prototype.onSlideContainerLoaded = function (slides, count) {
        this.slides = slides;
        debugger;
        // slides.GoToSlide(count); // Switch to the last added active slide
    };
    ActiveViewComponent.prototype.createCycle = function () {
        // console.log('hello');
        this.router.navigateByUrl('/active/create');
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
            for (i; i > 0; i--) {
                var rand = function () { return Math.floor(Math.random() * 1000); };
                var expense = _this.format(rand() * i);
                var budget = _this.format(rand() * i);
                data.push({ expense: expense, budget: budget });
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
    __metadata("design:paramtypes", [router_1.Router])
], ActiveViewComponent);
exports.ActiveViewComponent = ActiveViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRywwQ0FBeUQ7QUFDekQsOENBQTZDO0FBWTdDLElBQWEsbUJBQW1CO0lBUTlCO1FBQ0Usd0JBQXdCO1FBQ2hCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXRCLENBQUM7SUFFSCxvREFBc0IsR0FBdEIsVUFBdUIsTUFBdUIsRUFBRSxLQUFhO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLFFBQVEsQ0FBQTtRQUNSLG9FQUFvRTtJQUN0RSxDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUNFLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxvQ0FBTSxHQUFOLFVBQU8sS0FBSztRQUNWLElBQU0sTUFBTSxHQUFHLEtBQUssR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzQyxJQUFNLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVFLE1BQU0sQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUNqQyxJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7WUFFaEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbkIsSUFBTSxJQUFJLEdBQUcsY0FBTSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO2dCQUNwRCxJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsNkNBQWUsR0FBZjtJQUNBLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFoREQsSUFnREM7QUFoRFksbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7S0FDMUIsQ0FBQztxQ0FXa0IsZUFBTTtHQVZiLG1CQUFtQixDQWdEL0I7QUFoRFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcbmltcG9ydCB7IFNsaWRlc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzJztcbmltcG9ydCB7IFNsaWRlc0NvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzL3NsaWRlcy9hcHAvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWN0aXZlLXZpZXdcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi92aWV3LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi92aWV3LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBwYWdlOiBQYWdlO1xuICBwdWJsaWMgZGF0YSQ6IE9ic2VydmFibGU8e1xuICAgIGV4cGVuc2U6IHsgY291bnQ6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgfSxcbiAgICBidWRnZXQ6IHsgY291bnQ6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgfVxuICB9W10+O1xuICBwdWJsaWMgc2xpZGVzOiBTbGlkZXNDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICApIHtcbiAgICB9XG5cbiAgb25TbGlkZUNvbnRhaW5lckxvYWRlZChzbGlkZXM6IFNsaWRlc0NvbXBvbmVudCwgY291bnQ6IG51bWJlcikge1xuICAgIHRoaXMuc2xpZGVzID0gc2xpZGVzO1xuICAgIGRlYnVnZ2VyXG4gICAgLy8gc2xpZGVzLkdvVG9TbGlkZShjb3VudCk7IC8vIFN3aXRjaCB0byB0aGUgbGFzdCBhZGRlZCBhY3RpdmUgc2xpZGVcbiAgfVxuXG4gIGNyZWF0ZUN5Y2xlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9hY3RpdmUvY3JlYXRlJyk7XG4gIH1cblxuICBmb3JtYXQoaW5wdXQpIHtcbiAgICBjb25zdCBzdWZmaXggPSBpbnB1dCA+IDEwMDAwMDAgPyAnTScgOiAnSyc7XG4gICAgY29uc3QgY291bnQgPSAoaW5wdXQgPiAxMDAwMDAwID8gaW5wdXQgLyAxMDAwMDAwIDogaW5wdXQgLyAxMDAwKS50b0ZpeGVkKDEpO1xuICAgIHJldHVybiB7IGNvdW50LCBzdWZmaXggfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YSQgPSBPYnNlcnZhYmxlLm9mKDIpLm1hcChpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgICAgZm9yIChpOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IHJhbmQgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICAgICAgY29uc3QgZXhwZW5zZSA9IHRoaXMuZm9ybWF0KHJhbmQoKSAqIGkpO1xuICAgICAgICBjb25zdCBidWRnZXQgPSB0aGlzLmZvcm1hdChyYW5kKCkgKiBpKTtcbiAgICAgICAgZGF0YS5wdXNoKHsgZXhwZW5zZSwgYnVkZ2V0IH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICB9XG59XG4iXX0=