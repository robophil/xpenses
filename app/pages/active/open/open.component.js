"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var Observable_1 = require("rxjs/Observable");
var ActiveOpenComponent = (function () {
    function ActiveOpenComponent(router) {
        this.router = router;
    }
    ActiveOpenComponent.prototype.goBack = function () {
        // this.router.back();
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
        this.data$ = Observable_1.Observable.of(2).map(function (o) {
            var data = [];
            var rand = function () { return Math.floor(Math.random() * 1000); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcGVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUVoRyxzREFBMEU7QUFDMUUsOENBQTZDO0FBVTdDLElBQWEsbUJBQW1CO0lBTzlCLDZCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM1QyxDQUFDO0lBRUQsb0NBQU0sR0FBTjtRQUNFLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osMkJBQTJCO0lBQzdCLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNqQixnQ0FBZ0M7SUFDbEMsQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO1lBQ2pDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFNLElBQUksR0FBRyxjQUFNLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQWhDLENBQWdDLENBQUM7WUFFcEQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDNUIsSUFBTSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsTUFBSSxHQUFHLFdBQVcsR0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUM7Z0JBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksUUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztZQUNyQyxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDZDQUFlLEdBQWYsY0FBbUIsQ0FBQztJQUN0QiwwQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7S0FDMUIsQ0FBQztxQ0FRNEIseUJBQWdCO0dBUGpDLG1CQUFtQixDQTBDL0I7QUExQ1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFjdGl2ZS1vcGVuXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vb3Blbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vb3Blbi5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZU9wZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgZGF0YSQ6IE9ic2VydmFibGU8e1xuICAgIGlkOiBudW1iZXIsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHZhbHVlOiBudW1iZXJcbiAgfVtdPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xuICB9XG5cbiAgZ29CYWNrKCkge1xuICAgIC8vIHRoaXMucm91dGVyLmJhY2soKTtcbiAgICB0aGlzLnJvdXRlci5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgfVxuXG4gIG9uTG9hZGVkKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uTG9hZGVkJyk7XG4gIH1cblxuICBvbkl0ZW1Mb2FkaW5nKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uSXRlbUxvYWRpbmcnKTtcbiAgfVxuXG4gIG9uSXRlbVRhcChldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkl0ZW1UYXAnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YSQgPSBPYnNlcnZhYmxlLm9mKDIpLm1hcChvID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICAgIGNvbnN0IHJhbmQgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDEwOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcmFuZCgpLCBuYW1lID0gJ2NhdGVnb3J5XycrcmFuZCgpLCB2YWx1ZSA9IHJhbmQoKTtcbiAgICAgICAgZGF0YS5wdXNoKHsgaWQ6IGlkLCBuYW1lLCB2YWx1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XG59XG4iXX0=