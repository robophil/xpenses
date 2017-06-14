"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var frame_1 = require("ui/frame");
var ActiveComponent = (function () {
    function ActiveComponent(
        // private zone: NgZone,
        router) {
        this.router = router;
    }
    ActiveComponent.prototype.onSlideContainerLoaded = function (slides, count) {
        this.slides = slides;
        slides.GoToSlide(count); // Switch to the last added active slide
    };
    ActiveComponent.prototype.createCycle = function () {
        // console.log('hello');
        this.router.navigateByUrl('/active/create');
    };
    ActiveComponent.prototype.format = function (input) {
        var suffix = input > 1000000 ? 'M' : 'K';
        var count = (input > 1000000 ? input / 1000000 : input / 1000).toFixed(1);
        return { count: count, suffix: suffix };
    };
    ActiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data$ = Observable_1.Observable.of(4).map(function (i) {
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
ActiveComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "active",
        templateUrl: "./active.component.html",
        styleUrls: ["./active.css"],
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ActiveComponent);
exports.ActiveComponent = ActiveComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsMENBQXlEO0FBQ3pELDhDQUE2QztBQUk3QyxrQ0FBa0M7QUFVbEMsSUFBYSxlQUFlO0lBUTFCO1FBQ0Usd0JBQXdCO1FBQ2hCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXRCLENBQUM7SUFFSCxnREFBc0IsR0FBdEIsVUFBdUIsTUFBdUIsRUFBRSxLQUFhO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx3Q0FBd0M7SUFDbkUsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDRSx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLEtBQUs7UUFDVixJQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0MsSUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxNQUFNLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7WUFDakMsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRWhCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ25CLElBQU0sSUFBSSxHQUFHLGNBQU0sT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztnQkFDcEQsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFTLGVBQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7UUFDckMsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7QUF2RFksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO0tBQzVCLENBQUM7cUNBV2tCLGVBQU07R0FWYixlQUFlLENBdUQzQjtBQXZEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcbmltcG9ydCB7IFNsaWRlc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzJztcbmltcG9ydCB7IFNsaWRlc0NvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzL3NsaWRlcy9hcHAvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWN0aXZlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWN0aXZlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9hY3RpdmUuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIHBhZ2U6IFBhZ2U7XG4gIHByaXZhdGUgZGF0YSQ6IE9ic2VydmFibGU8e1xuICAgIGV4cGVuc2U6IHsgY291bnQ6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgfSxcbiAgICBidWRnZXQ6IHsgY291bnQ6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgfVxuICB9W10+O1xuICBwdWJsaWMgc2xpZGVzOiBTbGlkZXNDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICApIHtcbiAgICB9XG5cbiAgb25TbGlkZUNvbnRhaW5lckxvYWRlZChzbGlkZXM6IFNsaWRlc0NvbXBvbmVudCwgY291bnQ6IG51bWJlcikge1xuICAgIHRoaXMuc2xpZGVzID0gc2xpZGVzO1xuICAgIHNsaWRlcy5Hb1RvU2xpZGUoY291bnQpOyAvLyBTd2l0Y2ggdG8gdGhlIGxhc3QgYWRkZWQgYWN0aXZlIHNsaWRlXG4gIH1cblxuICBjcmVhdGVDeWNsZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaGVsbG8nKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvYWN0aXZlL2NyZWF0ZScpO1xuICB9XG5cbiAgZm9ybWF0KGlucHV0KSB7XG4gICAgY29uc3Qgc3VmZml4ID0gaW5wdXQgPiAxMDAwMDAwID8gJ00nIDogJ0snO1xuICAgIGNvbnN0IGNvdW50ID0gKGlucHV0ID4gMTAwMDAwMCA/IGlucHV0IC8gMTAwMDAwMCA6IGlucHV0IC8gMTAwMCkudG9GaXhlZCgxKTtcbiAgICByZXR1cm4geyBjb3VudCwgc3VmZml4IH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGEkID0gT2JzZXJ2YWJsZS5vZig0KS5tYXAoaSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gW107XG5cbiAgICAgIGZvciAoaTsgaSA+IDA7IGktLSkge1xuICAgICAgICBjb25zdCByYW5kID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gICAgICAgIGNvbnN0IGV4cGVuc2UgPSB0aGlzLmZvcm1hdChyYW5kKCkgKiBpKTtcbiAgICAgICAgY29uc3QgYnVkZ2V0ID0gdGhpcy5mb3JtYXQocmFuZCgpICogaSk7XG4gICAgICAgIGRhdGEucHVzaCh7IGV4cGVuc2UsIGJ1ZGdldCB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnBhZ2UgPSA8UGFnZT50b3Btb3N0KCkuY3VycmVudFBhZ2U7XG4gICAgaWYodGhpcy5wYWdlKSAge1xuICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICB0aGlzLnBhZ2Uuc3RhdHVzQmFyU3R5bGUgPSAnbGlnaHQnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZGlyKHRoaXMucGFnZSk7XG4gICAgfVxuICB9XG59XG4iXX0=