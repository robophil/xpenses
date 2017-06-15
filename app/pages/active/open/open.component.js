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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcGVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUVoRyxzREFBMEU7QUFDMUUsOENBQTZDO0FBVTdDLElBQWEsbUJBQW1CO0lBTzlCLDZCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM1QyxDQUFDO0lBRUQsb0NBQU0sR0FBTjtRQUNFLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7WUFDakMsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQU0sSUFBSSxHQUFHLGNBQU0sT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztZQUVwRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM1QixJQUFNLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxNQUFJLEdBQUcsV0FBVyxHQUFDLElBQUksRUFBRSxFQUFFLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsNkNBQWUsR0FBZixjQUFtQixDQUFDO0lBQ3RCLDBCQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQztBQTlCWSxtQkFBbUI7SUFOL0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztLQUMxQixDQUFDO3FDQVE0Qix5QkFBZ0I7R0FQakMsbUJBQW1CLENBOEIvQjtBQTlCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMsIFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSdcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIlxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWN0aXZlLW9wZW5cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9vcGVuLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9vcGVuLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlT3BlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBkYXRhJDogT2JzZXJ2YWJsZTx7XG4gICAgaWQ6IG51bWJlcixcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdmFsdWU6IG51bWJlclxuICB9W10+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gIH1cblxuICBnb0JhY2soKSB7XG4gICAgLy8gdGhpcy5yb3V0ZXIuYmFjaygpO1xuICAgIHRoaXMucm91dGVyLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRhJCA9IE9ic2VydmFibGUub2YoMikubWFwKG8gPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IFtdO1xuICAgICAgY29uc3QgcmFuZCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMTA7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgaWQgPSByYW5kKCksIG5hbWUgPSAnY2F0ZWdvcnlfJytyYW5kKCksIHZhbHVlID0gcmFuZCgpO1xuICAgICAgICBkYXRhLnB1c2goeyBpZDogaWQsIG5hbWUsIHZhbHVlIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge31cbn1cbiJdfQ==