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
        this.router.navigateByUrl('/active/open', { transition: transition });
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
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], ActiveViewComponent);
exports.ActiveViewComponent = ActiveViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyw0REFBNEQ7QUFDNUQsc0RBQStEO0FBQy9ELDhDQUE2QztBQU03QyxJQUFNLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBUXBELElBQWEsbUJBQW1CO0lBUTlCLDZCQUNVLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzlCLENBQUM7SUFFTCx1Q0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELG9DQUFNLEdBQU4sVUFBTyxLQUFLO1FBQ1YsSUFBTSxNQUFNLEdBQUcsS0FBSyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNDLElBQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxLQUFLLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsTUFBTSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO1lBQ2pDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUVoQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNuQixJQUFNLElBQUksR0FBRyxjQUFNLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQWhDLENBQWdDLENBQUM7Z0JBQ3BELElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCw2Q0FBZSxHQUFmO0lBQ0EsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQztBQTNDWSxtQkFBbUI7SUFOL0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztLQUMxQixDQUFDO3FDQVVrQix5QkFBZ0I7R0FUdkIsbUJBQW1CLENBMkMvQjtBQTNDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuLy8gaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcbmltcG9ydCB7IFNsaWRlc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzJztcbmltcG9ydCB7IFNsaWRlc0NvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzL3NsaWRlcy9hcHAvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQnO1xuXG5jb25zdCB0cmFuc2l0aW9uID0geyBuYW1lOiBcInNsaWRlXCIsIGR1cmF0aW9uOiAzMDAgfTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFjdGl2ZS12aWV3XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdmlldy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdmlldy5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgcGFnZTogUGFnZTtcbiAgcHVibGljIGRhdGEkOiBPYnNlcnZhYmxlPHtcbiAgICBleHBlbnNlOiB7IGNvdW50OiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nIH0sXG4gICAgYnVkZ2V0OiB7IGNvdW50OiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nIH1cbiAgfVtdPjtcbiAgcHVibGljIHNsaWRlczogU2xpZGVzQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICApIHsgfVxuXG4gIG9wZW5DeWNsZSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvYWN0aXZlL29wZW4nLCB7IHRyYW5zaXRpb24gfSk7XG4gIH1cblxuICBjcmVhdGVDeWNsZSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvYWN0aXZlL2NyZWF0ZScsIHsgdHJhbnNpdGlvbiB9KTtcbiAgfVxuXG4gIGZvcm1hdChpbnB1dCkge1xuICAgIGNvbnN0IHN1ZmZpeCA9IGlucHV0ID4gMTAwMDAwMCA/ICdNJyA6ICdLJztcbiAgICBjb25zdCBjb3VudCA9IChpbnB1dCA+IDEwMDAwMDAgPyBpbnB1dCAvIDEwMDAwMDAgOiBpbnB1dCAvIDEwMDApLnRvRml4ZWQoMSk7XG4gICAgcmV0dXJuIHsgY291bnQsIHN1ZmZpeCB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRhJCA9IE9ic2VydmFibGUub2YoMikubWFwKGkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IFtdO1xuXG4gICAgICBmb3IgKGk7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgcmFuZCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgICAgICBjb25zdCBleHBlbnNlID0gdGhpcy5mb3JtYXQocmFuZCgpICogaSk7XG4gICAgICAgIGNvbnN0IGJ1ZGdldCA9IHRoaXMuZm9ybWF0KHJhbmQoKSAqIGkpO1xuICAgICAgICBkYXRhLnB1c2goeyBleHBlbnNlLCBidWRnZXQgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gIH1cbn1cbiJdfQ==