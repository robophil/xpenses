"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var Observable_1 = require("rxjs/Observable");
var ActiveOpenComponent = (function () {
    function ActiveOpenComponent(router) {
        this.router = router;
        this.title = "";
    }
    ActiveOpenComponent.prototype.getIsExpenseOk = function () {
        return this.cycle.budget > this.cycle.expense;
    };
    ActiveOpenComponent.prototype.addExpense = function () {
    };
    ActiveOpenComponent.prototype.doneCycle = function () {
    };
    ActiveOpenComponent.prototype.goBack = function () {
        this.router.backToPreviousPage();
    };
    ActiveOpenComponent.prototype.onLoaded = function (event) {
        // console.log('onLoaded');
    };
    ActiveOpenComponent.prototype.onItemLoading = function (event) {
        // console.log('onItemLoading');
    };
    ActiveOpenComponent.prototype.onItemTap = function (event) {
        // console.log('onItemTap');
    };
    ActiveOpenComponent.prototype.ngOnInit = function () {
        var rand = function () { return Math.floor(Math.random() * 1000); };
        this.cycle = { expense: rand(), budget: rand() };
        this.data$ = Observable_1.Observable.of(2).map(function (o) {
            var data = [];
            for (var i = 10; i > 0; i--) {
                var id = rand(), name_1 = 'category_' + rand(), value = rand();
                data.push({ id: id, name: name_1, value: value });
            }
            return data;
        });
    };
    ActiveOpenComponent.prototype.ngAfterViewInit = function () { };
    return ActiveOpenComponent;
}());
ActiveOpenComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "active-open",
        templateUrl: "./open.component.html",
        styleUrls: ["./open.css"],
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], ActiveOpenComponent);
exports.ActiveOpenComponent = ActiveOpenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcGVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUVoRyxzREFBMEU7QUFDMUUsOENBQTZDO0FBVTdDLElBQWEsbUJBQW1CO0lBWTlCLDZCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVhyQyxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBWWxCLENBQUM7SUFFRCw0Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFFRCx3Q0FBVSxHQUFWO0lBRUEsQ0FBQztJQUVELHVDQUFTLEdBQVQ7SUFFQSxDQUFDO0lBRUQsb0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLEtBQUs7UUFDWiwyQkFBMkI7SUFDN0IsQ0FBQztJQUVELDJDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2pCLGdDQUFnQztJQUNsQyxDQUFDO0lBRUQsdUNBQVMsR0FBVCxVQUFVLEtBQUs7UUFDYiw0QkFBNEI7SUFDOUIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRSxJQUFNLElBQUksR0FBRyxjQUFNLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQWhDLENBQWdDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7WUFDakMsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRWhCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzVCLElBQU0sRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLE1BQUksR0FBRyxXQUFXLEdBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDO2dCQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7WUFDckMsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCw2Q0FBZSxHQUFmLGNBQW1CLENBQUM7SUFDdEIsMEJBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDO0FBM0RZLG1CQUFtQjtJQU4vQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQzFCLENBQUM7cUNBYTRCLHlCQUFnQjtHQVpqQyxtQkFBbUIsQ0EyRC9CO0FBM0RZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhY3RpdmUtb3BlblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL29wZW4uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL29wZW4uY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVPcGVuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIHRpdGxlID0gXCJcIjtcbiAgcHVibGljIGN5Y2xlOiB7XG4gICAgZXhwZW5zZTogbnVtYmVyO1xuICAgIGJ1ZGdldDogbnVtYmVyO1xuICB9O1xuICBwdWJsaWMgZGF0YSQ6IE9ic2VydmFibGU8e1xuICAgIGlkOiBudW1iZXIsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHZhbHVlOiBudW1iZXJcbiAgfVtdPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xuICB9XG5cbiAgZ2V0SXNFeHBlbnNlT2soKSB7XG4gICAgcmV0dXJuIHRoaXMuY3ljbGUuYnVkZ2V0ID4gdGhpcy5jeWNsZS5leHBlbnNlO1xuICB9XG5cbiAgYWRkRXhwZW5zZSgpIHtcblxuICB9XG5cbiAgZG9uZUN5Y2xlKCkge1xuXG4gIH1cblxuICBnb0JhY2soKSB7XG4gICAgdGhpcy5yb3V0ZXIuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gIH1cblxuICBvbkxvYWRlZChldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkxvYWRlZCcpO1xuICB9XG5cbiAgb25JdGVtTG9hZGluZyhldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkl0ZW1Mb2FkaW5nJyk7XG4gIH1cblxuICBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb25JdGVtVGFwJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCByYW5kID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gICAgdGhpcy5jeWNsZSA9IHsgZXhwZW5zZTogcmFuZCgpLCBidWRnZXQ6IHJhbmQoKSB9O1xuICAgIHRoaXMuZGF0YSQgPSBPYnNlcnZhYmxlLm9mKDIpLm1hcChvID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDEwOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcmFuZCgpLCBuYW1lID0gJ2NhdGVnb3J5XycrcmFuZCgpLCB2YWx1ZSA9IHJhbmQoKTtcbiAgICAgICAgZGF0YS5wdXNoKHsgaWQ6IGlkLCBuYW1lLCB2YWx1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XG59XG4iXX0=