"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var Observable_1 = require("rxjs/Observable");
var ActiveOpenComponent = (function () {
    function ActiveOpenComponent(router) {
        this.router = router;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcGVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUVoRyxzREFBMEU7QUFDMUUsOENBQTZDO0FBVTdDLElBQWEsbUJBQW1CO0lBVzlCLDZCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM1QyxDQUFDO0lBRUQsNENBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBRUQsd0NBQVUsR0FBVjtJQUVBLENBQUM7SUFFRCx1Q0FBUyxHQUFUO0lBRUEsQ0FBQztJQUVELG9DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osMkJBQTJCO0lBQzdCLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNqQixnQ0FBZ0M7SUFDbEMsQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0UsSUFBTSxJQUFJLEdBQUcsY0FBTSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO1lBQ2pDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUVoQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM1QixJQUFNLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxNQUFJLEdBQUcsV0FBVyxHQUFDLElBQUksRUFBRSxFQUFFLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsNkNBQWUsR0FBZixjQUFtQixDQUFDO0lBQ3RCLDBCQUFDO0FBQUQsQ0FBQyxBQTFERCxJQTBEQztBQTFEWSxtQkFBbUI7SUFOL0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztLQUMxQixDQUFDO3FDQVk0Qix5QkFBZ0I7R0FYakMsbUJBQW1CLENBMEQvQjtBQTFEWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMsIFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSdcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIlxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWN0aXZlLW9wZW5cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9vcGVuLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9vcGVuLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlT3BlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBjeWNsZToge1xuICAgIGV4cGVuc2U6IG51bWJlcjtcbiAgICBidWRnZXQ6IG51bWJlcjtcbiAgfTtcbiAgcHVibGljIGRhdGEkOiBPYnNlcnZhYmxlPHtcbiAgICBpZDogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICB2YWx1ZTogbnVtYmVyXG4gIH1bXT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgfVxuXG4gIGdldElzRXhwZW5zZU9rKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xlLmJ1ZGdldCA+IHRoaXMuY3ljbGUuZXhwZW5zZTtcbiAgfVxuXG4gIGFkZEV4cGVuc2UoKSB7XG5cbiAgfVxuXG4gIGRvbmVDeWNsZSgpIHtcblxuICB9XG5cbiAgZ29CYWNrKCkge1xuICAgIHRoaXMucm91dGVyLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICB9XG5cbiAgb25Mb2FkZWQoZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb25Mb2FkZWQnKTtcbiAgfVxuXG4gIG9uSXRlbUxvYWRpbmcoZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb25JdGVtTG9hZGluZycpO1xuICB9XG5cbiAgb25JdGVtVGFwKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uSXRlbVRhcCcpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgcmFuZCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgIHRoaXMuY3ljbGUgPSB7IGV4cGVuc2U6IHJhbmQoKSwgYnVkZ2V0OiByYW5kKCkgfTtcbiAgICB0aGlzLmRhdGEkID0gT2JzZXJ2YWJsZS5vZigyKS5tYXAobyA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAxMDsgaSA+IDA7IGktLSkge1xuICAgICAgICBjb25zdCBpZCA9IHJhbmQoKSwgbmFtZSA9ICdjYXRlZ29yeV8nK3JhbmQoKSwgdmFsdWUgPSByYW5kKCk7XG4gICAgICAgIGRhdGEucHVzaCh7IGlkOiBpZCwgbmFtZSwgdmFsdWUgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7fVxufVxuIl19