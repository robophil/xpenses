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
    ActiveViewComponent.prototype.createCycle = function () {
        console.log('hello');
        this.router.navigateByUrl('/active/create');
        // this.create.emit();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRywwQ0FBeUQ7QUFDekQsOENBQTZDO0FBWTdDLElBQWEsbUJBQW1CO0lBUTlCO1FBQ0Usd0JBQXdCO1FBQ2hCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXRCLENBQUM7SUFFSCx5Q0FBVyxHQUFYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLHNCQUFzQjtJQUN4QixDQUFDO0lBRUQsb0NBQU0sR0FBTixVQUFPLEtBQUs7UUFDVixJQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0MsSUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxNQUFNLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7WUFDakMsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRWhCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ25CLElBQU0sSUFBSSxHQUFHLGNBQU0sT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztnQkFDcEQsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDZDQUFlLEdBQWY7SUFDQSxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBM0NELElBMkNDO0FBM0NZLG1CQUFtQjtJQU4vQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQzFCLENBQUM7cUNBV2tCLGVBQU07R0FWYixtQkFBbUIsQ0EyQy9CO0FBM0NZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5pbXBvcnQgeyBTbGlkZXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LXNsaWRlcyc7XG5pbXBvcnQgeyBTbGlkZXNDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LXNsaWRlcy9zbGlkZXMvYXBwL3NsaWRlcy9zbGlkZXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFjdGl2ZS12aWV3XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdmlldy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdmlldy5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgcGFnZTogUGFnZTtcbiAgcHVibGljIGRhdGEkOiBPYnNlcnZhYmxlPHtcbiAgICBleHBlbnNlOiB7IGNvdW50OiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nIH0sXG4gICAgYnVkZ2V0OiB7IGNvdW50OiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nIH1cbiAgfVtdPjtcbiAgcHVibGljIHNsaWRlczogU2xpZGVzQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgKSB7XG4gICAgfVxuXG4gIGNyZWF0ZUN5Y2xlKCkge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9hY3RpdmUvY3JlYXRlJyk7XG4gICAgLy8gdGhpcy5jcmVhdGUuZW1pdCgpO1xuICB9XG5cbiAgZm9ybWF0KGlucHV0KSB7XG4gICAgY29uc3Qgc3VmZml4ID0gaW5wdXQgPiAxMDAwMDAwID8gJ00nIDogJ0snO1xuICAgIGNvbnN0IGNvdW50ID0gKGlucHV0ID4gMTAwMDAwMCA/IGlucHV0IC8gMTAwMDAwMCA6IGlucHV0IC8gMTAwMCkudG9GaXhlZCgxKTtcbiAgICByZXR1cm4geyBjb3VudCwgc3VmZml4IH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGEkID0gT2JzZXJ2YWJsZS5vZigyKS5tYXAoaSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gW107XG5cbiAgICAgIGZvciAoaTsgaSA+IDA7IGktLSkge1xuICAgICAgICBjb25zdCByYW5kID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gICAgICAgIGNvbnN0IGV4cGVuc2UgPSB0aGlzLmZvcm1hdChyYW5kKCkgKiBpKTtcbiAgICAgICAgY29uc3QgYnVkZ2V0ID0gdGhpcy5mb3JtYXQocmFuZCgpICogaSk7XG4gICAgICAgIGRhdGEucHVzaCh7IGV4cGVuc2UsIGJ1ZGdldCB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgfVxufVxuIl19