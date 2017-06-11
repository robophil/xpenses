"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var gestures_1 = require("ui/gestures");
var frame_1 = require("ui/frame");
var ActiveComponent = (function () {
    function ActiveComponent(zone, router) {
        this.zone = zone;
        this.router = router;
        this.isShowTop = false;
        this.suffix = 'K';
    }
    ActiveComponent.prototype.format = function (input) {
        var suffix = input > 1000000 ? 'M' : 'K';
        var count = (input > 1000000 ? input / 1000000 : input / 1000).toFixed(1);
        return { count: count, suffix: suffix };
    };
    ActiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expenses = { count: 12, suffix: 'k' };
        this.budget = { count: 12, suffix: 'k' };
        this.data$ = Observable_1.Observable.of(10).map(function (i) {
            var data = [];
            for (i; i > 0; i--) {
                var rand = function () { return Math.floor(Math.random() * 1000); };
                var expense = _this.format(rand() * i);
                var budget = _this.format(rand() * i);
                data.push({ expense: expense, budget: budget });
            }
            return data;
        });
        // .do(x => console.dir(x))
        // .subscribe();
        this.cardUi.nativeElement.on(gestures_1.GestureTypes.swipe, function (args) {
            /**
             * 8 - down
             * 4 - up
             * 2 - right
             * 1 - left
             */
            if (args.direction === 8) {
                _this.isShowTop = true;
            }
            else if (args.direction === 4) {
                _this.isShowTop = false;
            }
            _this.zone.run(function () { return 0; });
            console.log("Swipe Direction: " + args.direction, _this.isShowTop);
        });
    };
    ActiveComponent.prototype.ngAfterViewInit = function () {
        this.page = frame_1.topmost().currentPage;
        if (this.page) {
            this.page.actionBarHidden = true;
            this.page.statusBarStyle = 'light';
        }
        else {
            console.dir(this.page);
        }
    };
    return ActiveComponent;
}());
__decorate([
    core_1.ViewChild('card'),
    __metadata("design:type", core_1.ElementRef)
], ActiveComponent.prototype, "cardUi", void 0);
ActiveComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "active",
        templateUrl: "./active.component.html",
        styleUrls: ["./active.css"],
    }),
    __metadata("design:paramtypes", [core_1.NgZone,
        router_1.Router])
], ActiveComponent);
exports.ActiveComponent = ActiveComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsMENBQXlEO0FBQ3pELDhDQUE2QztBQUM3Qyx3Q0FBa0U7QUFHbEUsa0NBQWtDO0FBUWxDLElBQWEsZUFBZTtJQVkxQix5QkFDVSxJQUFZLEVBQ1osTUFBYztRQURkLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUmhCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsV0FBTSxHQUFXLEdBQUcsQ0FBQztJQVMzQixDQUFDO0lBRUgsZ0NBQU0sR0FBTixVQUFPLEtBQUs7UUFDVixJQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0MsSUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxNQUFNLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBc0NDO1FBckNDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFekMsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO1lBQ2xDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUVoQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNuQixJQUFNLElBQUksR0FBRyxjQUFNLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQWhDLENBQWdDLENBQUM7Z0JBQ3BELElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQTtRQUNGLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFFaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLHVCQUFZLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBMkI7WUFDM0U7Ozs7O2VBS0c7WUFFSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDO1lBRUQsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFTLGVBQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7UUFDckMsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUExRUQsSUEwRUM7QUFoRW9CO0lBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDOzhCQUFTLGlCQUFVOytDQUFDO0FBVjNCLGVBQWU7SUFOM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztLQUM1QixDQUFDO3FDQWNnQixhQUFNO1FBQ0osZUFBTTtHQWRiLGVBQWUsQ0EwRTNCO0FBMUVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgR2VzdHVyZVR5cGVzLCBTd2lwZUdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSdcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIlxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWN0aXZlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWN0aXZlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9hY3RpdmUuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIHBhZ2U6IFBhZ2U7XG4gIHByaXZhdGUgZGF0YSQ6IE9ic2VydmFibGU8e1xuICAgIGV4cGVuc2U6IHsgY291bnQ6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgfSxcbiAgICBidWRnZXQ6IHsgY291bnQ6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgfVxuICB9W10+O1xuICBwcml2YXRlIGlzU2hvd1RvcDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHN1ZmZpeDogc3RyaW5nID0gJ0snO1xuICBleHBlbnNlcztcbiAgYnVkZ2V0O1xuICBAVmlld0NoaWxkKCdjYXJkJykgY2FyZFVpOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgKSB7XG4gICAgfVxuXG4gIGZvcm1hdChpbnB1dCkge1xuICAgIGNvbnN0IHN1ZmZpeCA9IGlucHV0ID4gMTAwMDAwMCA/ICdNJyA6ICdLJztcbiAgICBjb25zdCBjb3VudCA9IChpbnB1dCA+IDEwMDAwMDAgPyBpbnB1dCAvIDEwMDAwMDAgOiBpbnB1dCAvIDEwMDApLnRvRml4ZWQoMSk7XG4gICAgcmV0dXJuIHsgY291bnQsIHN1ZmZpeCB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5leHBlbnNlcyA9IHsgY291bnQ6IDEyLCBzdWZmaXg6ICdrJyB9O1xuICAgIHRoaXMuYnVkZ2V0ID0geyBjb3VudDogMTIsIHN1ZmZpeDogJ2snIH07XG5cbiAgICB0aGlzLmRhdGEkID0gT2JzZXJ2YWJsZS5vZigxMCkubWFwKGkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IFtdO1xuXG4gICAgICBmb3IgKGk7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgcmFuZCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgICAgICBjb25zdCBleHBlbnNlID0gdGhpcy5mb3JtYXQocmFuZCgpICogaSk7XG4gICAgICAgIGNvbnN0IGJ1ZGdldCA9IHRoaXMuZm9ybWF0KHJhbmQoKSAqIGkpO1xuICAgICAgICBkYXRhLnB1c2goeyBleHBlbnNlLCBidWRnZXQgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pXG4gICAgLy8gLmRvKHggPT4gY29uc29sZS5kaXIoeCkpXG4gICAgLy8gLnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy5jYXJkVWkubmF0aXZlRWxlbWVudC5vbihHZXN0dXJlVHlwZXMuc3dpcGUsIChhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogOCAtIGRvd25cbiAgICAgICAqIDQgLSB1cFxuICAgICAgICogMiAtIHJpZ2h0XG4gICAgICAgKiAxIC0gbGVmdFxuICAgICAgICovXG5cbiAgICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gOCkge1xuICAgICAgICB0aGlzLmlzU2hvd1RvcCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gNCkge1xuICAgICAgICB0aGlzLmlzU2hvd1RvcCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IDApO1xuICAgICAgY29uc29sZS5sb2coXCJTd2lwZSBEaXJlY3Rpb246IFwiICsgYXJncy5kaXJlY3Rpb24sIHRoaXMuaXNTaG93VG9wKTtcbiAgICB9KTtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucGFnZSA9IDxQYWdlPnRvcG1vc3QoKS5jdXJyZW50UGFnZTtcbiAgICBpZih0aGlzLnBhZ2UpICB7XG4gICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMucGFnZS5zdGF0dXNCYXJTdHlsZSA9ICdsaWdodCc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5kaXIodGhpcy5wYWdlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==