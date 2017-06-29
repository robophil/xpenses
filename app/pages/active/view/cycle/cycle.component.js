"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var frame_1 = require("ui/frame");
var CycleComponent = (function () {
    function CycleComponent(router) {
        this.router = router;
        this.title = "Cycles";
        this.open = new core_1.EventEmitter();
        this.create = new core_1.EventEmitter();
        this.page = frame_1.topmost().currentPage;
    }
    CycleComponent.prototype.createCycle = function () {
        this.create.emit();
    };
    CycleComponent.prototype.getIsExpenseOk = function () {
        return true;
        // return this.cycle.budget > this.cycle.expense;
    };
    CycleComponent.prototype.addExpense = function () {
        console.log('add expense');
    };
    CycleComponent.prototype.doneCycle = function () {
    };
    CycleComponent.prototype.onLoaded = function (event) {
        // console.log('onLoaded');
    };
    CycleComponent.prototype.onItemLoading = function (event) {
        // console.log('onItemLoading');
    };
    CycleComponent.prototype.onItemTap = function (event) {
        // console.log('onItemTap');
    };
    CycleComponent.prototype.hasNext = function () {
        return this.position < this.total;
    };
    CycleComponent.prototype.hasPrev = function () {
        return this.position != 1;
    };
    CycleComponent.prototype.ngOnInit = function () {
        this.hidden = this.data.expense ? false : true;
        // console.log(this.hidden);
    };
    CycleComponent.prototype.ngAfterViewInit = function () {
    };
    return CycleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CycleComponent.prototype, "total", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CycleComponent.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CycleComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CycleComponent.prototype, "open", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CycleComponent.prototype, "create", void 0);
CycleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "Cycle",
        templateUrl: "./cycle.component.html",
        styleUrls: ["./cycle.css"],
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], CycleComponent);
exports.CycleComponent = CycleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3ljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZIO0FBRzdILHNEQUEwRTtBQUkxRSxrQ0FBa0M7QUFXbEMsSUFBYSxjQUFjO0lBVXpCLHdCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVByQyxVQUFLLEdBQUcsUUFBUSxDQUFDO1FBSVAsU0FBSSxHQUFHLElBQUksbUJBQVksRUFBUSxDQUFDO1FBQ2hDLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztRQUdqRCxJQUFJLENBQUMsSUFBSSxHQUFHLGVBQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHVDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ1osaURBQWlEO0lBQ25ELENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0NBQVMsR0FBVDtJQUVBLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNaLDJCQUEyQjtJQUM3QixDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLEtBQUs7UUFDakIsZ0NBQWdDO0lBQ2xDLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLDRCQUE0QjtJQUM5QixDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVELGdDQUFPLEdBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDL0MsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCx3Q0FBZSxHQUFmO0lBQ0EsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQXZEVTtJQUFSLFlBQUssRUFBRTs7NkNBQWU7QUFDZDtJQUFSLFlBQUssRUFBRTs7Z0RBQWtCO0FBQ2pCO0lBQVIsWUFBSyxFQUFFOzs0Q0FBc0I7QUFDcEI7SUFBVCxhQUFNLEVBQUU7OzRDQUF3QztBQUN2QztJQUFULGFBQU0sRUFBRTs7OENBQTBDO0FBUnhDLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsT0FBTztRQUNqQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUMzQixDQUFDO3FDQVc0Qix5QkFBZ0I7R0FWakMsY0FBYyxDQTJEMUI7QUEzRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgR2VzdHVyZVR5cGVzLCBTd2lwZUdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMsIFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSdcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5pbXBvcnQgeyBDeWNsZUludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9jeWNsZS5tb2RlbCc7XG5cbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiQ3ljbGVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jeWNsZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY3ljbGUuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBDeWNsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIGhpZGRlbjtcbiAgcHJpdmF0ZSBwYWdlOiBQYWdlO1xuICBwdWJsaWMgdGl0bGUgPSBcIkN5Y2xlc1wiO1xuICBASW5wdXQoKSB0b3RhbDogbnVtYmVyO1xuICBASW5wdXQoKSBwb3NpdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBkYXRhOiBDeWNsZUludGVyZmFjZTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcHVibGljIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIHRoaXMucGFnZSA9IHRvcG1vc3QoKS5jdXJyZW50UGFnZTtcbiAgfVxuXG4gIGNyZWF0ZUN5Y2xlKCkge1xuICAgIHRoaXMuY3JlYXRlLmVtaXQoKTtcbiAgfVxuXG4gIGdldElzRXhwZW5zZU9rKCkge1xuICAgIHJldHVybiB0cnVlO1xuICAgIC8vIHJldHVybiB0aGlzLmN5Y2xlLmJ1ZGdldCA+IHRoaXMuY3ljbGUuZXhwZW5zZTtcbiAgfVxuXG4gIGFkZEV4cGVuc2UoKSB7XG4gICAgY29uc29sZS5sb2coJ2FkZCBleHBlbnNlJyk7XG4gIH1cblxuICBkb25lQ3ljbGUoKSB7XG5cbiAgfVxuXG4gIG9uTG9hZGVkKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uTG9hZGVkJyk7XG4gIH1cblxuICBvbkl0ZW1Mb2FkaW5nKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uSXRlbUxvYWRpbmcnKTtcbiAgfVxuXG4gIG9uSXRlbVRhcChldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkl0ZW1UYXAnKTtcbiAgfVxuXG4gIGhhc05leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24gPCB0aGlzLnRvdGFsO1xuICB9XG5cbiAgaGFzUHJldigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiAhPSAxO1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmhpZGRlbiA9IHRoaXMuZGF0YS5leHBlbnNlID8gZmFsc2UgOiB0cnVlO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaGlkZGVuKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgfVxufVxuIl19