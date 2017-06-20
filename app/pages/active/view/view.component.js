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
        var count = +input.toFixed(2);
        return { count: count, suffix: suffix };
    };
    ActiveViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data$ = Observable_1.Observable.of(5).map(function (i) {
            var data = [];
            var rand = function () { return (Math.random() * 10000); };
            // const rand = () => Math.floor(Math.random() * 10000);
            var id = rand();
            var sign = '₦';
            for (i; i > 0; i--) {
                var expense = _this.format(rand());
                var budget = _this.format(rand());
                var categories = [];
                for (var j = 10; j > 0; j--) {
                    var id_2 = rand().toFixed(0), name_1 = 'Category_' + id_2, value = rand().toFixed(2);
                    categories.push({ id: id_2, name: name_1, value: value, created: new Date() });
                }
                data.push({ id: id, sign: sign, categories: categories, expense: expense, budget: budget, created: new Date });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyw0REFBNEQ7QUFDNUQsc0RBQStEO0FBQy9ELDhDQUE2QztBQU83QyxJQUFNLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBUXBELElBQWEsbUJBQW1CO0lBSzlCLDZCQUNVLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzlCLENBQUM7SUFFTCx1Q0FBUyxHQUFUO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsb0NBQU0sR0FBTixVQUFPLEtBQUs7UUFDVixJQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0MsSUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkF1QkM7UUF0QkMsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO1lBQ2pDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFNLElBQUksR0FBRyxjQUFNLE9BQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUM7WUFDM0Msd0RBQXdEO1lBQ3hELElBQU0sRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDO1lBQ2xCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUVqQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNuQixJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3BDLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbkMsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUV0QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUM1QixJQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBSSxHQUFHLFdBQVcsR0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkYsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQUVELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzFFLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsNkNBQWUsR0FBZjtJQUNBLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFuREQsSUFtREM7QUFuRFksbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7S0FDMUIsQ0FBQztxQ0FPa0IseUJBQWdCO0dBTnZCLG1CQUFtQixDQW1EL0I7QUFuRFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vIGltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5pbXBvcnQgeyBTbGlkZXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LXNsaWRlcyc7XG5pbXBvcnQgeyBTbGlkZXNDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LXNsaWRlcy9zbGlkZXMvYXBwL3NsaWRlcy9zbGlkZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEN5Y2xlSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2N5Y2xlLm1vZGVsJztcblxuY29uc3QgdHJhbnNpdGlvbiA9IHsgbmFtZTogXCJzbGlkZVwiLCBkdXJhdGlvbjogMzAwIH07XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhY3RpdmUtdmlld1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXcuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3ZpZXcuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIHBhZ2U6IFBhZ2U7XG4gIHB1YmxpYyBkYXRhJDogT2JzZXJ2YWJsZTxDeWNsZUludGVyZmFjZVtdPjtcbiAgcHVibGljIHNsaWRlczogU2xpZGVzQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICApIHsgfVxuXG4gIG9wZW5DeWNsZSgpIHtcbiAgICBjb25zb2xlLmxvZygnb3BlbicpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9hY3RpdmUvb3Blbi8nLCB7IHRyYW5zaXRpb24gfSk7XG4gIH1cblxuICBjcmVhdGVDeWNsZSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvYWN0aXZlL2NyZWF0ZScsIHsgdHJhbnNpdGlvbiB9KTtcbiAgfVxuXG4gIGZvcm1hdChpbnB1dCkge1xuICAgIGNvbnN0IHN1ZmZpeCA9IGlucHV0ID4gMTAwMDAwMCA/ICdNJyA6ICdLJztcbiAgICBjb25zdCBjb3VudCA9ICtpbnB1dC50b0ZpeGVkKDIpO1xuICAgIHJldHVybiB7IGNvdW50LCBzdWZmaXggfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YSQgPSBPYnNlcnZhYmxlLm9mKDUpLm1hcChpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICAgIGNvbnN0IHJhbmQgPSAoKSA9PiAoTWF0aC5yYW5kb20oKSAqIDEwMDAwKTtcbiAgICAgIC8vIGNvbnN0IHJhbmQgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XG4gICAgICBjb25zdCBpZCA9IHJhbmQoKTtcbiAgICAgIGNvbnN0IHNpZ24gPSAn4oKmJztcblxuICAgICAgZm9yIChpOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGV4cGVuc2UgPSB0aGlzLmZvcm1hdChyYW5kKCkpO1xuICAgICAgICBjb25zdCBidWRnZXQgPSB0aGlzLmZvcm1hdChyYW5kKCkpO1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDEwOyBqID4gMDsgai0tKSB7XG4gICAgICAgICAgY29uc3QgaWRfMiA9IHJhbmQoKS50b0ZpeGVkKDApLCBuYW1lID0gJ0NhdGVnb3J5XycraWRfMiwgdmFsdWUgPSByYW5kKCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goeyBpZDogaWRfMiwgbmFtZSwgdmFsdWUsIGNyZWF0ZWQ6IG5ldyBEYXRlKCkgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLnB1c2goeyBpZCwgc2lnbiwgY2F0ZWdvcmllcywgZXhwZW5zZSwgYnVkZ2V0LCBjcmVhdGVkOiBuZXcgRGF0ZSB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgfVxufVxuIl19