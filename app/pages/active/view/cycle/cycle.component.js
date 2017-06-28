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
    CycleComponent.prototype.ngOnInit = function () {
        this.hidden = this.data.expense ? false : true;
        // console.log(this.hidden);
    };
    CycleComponent.prototype.ngAfterViewInit = function () {
        var btn = this.page.getViewById('newBtn');
        // debugger;
        // drop shadow
        this.newBtnEl.nativeElement;
        // this.newBtnEl.nativeElement
        // view
        // .android.setBackgroundResource(android.R.drawable.dialog_holo_light_frame)
    };
    return CycleComponent;
}());
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
__decorate([
    core_1.ViewChild('newBtn'),
    __metadata("design:type", core_1.ElementRef)
], CycleComponent.prototype, "newBtnEl", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3ljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZIO0FBRzdILHNEQUEwRTtBQUkxRSxrQ0FBa0M7QUFXbEMsSUFBYSxjQUFjO0lBU3pCLHdCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQU5yQyxVQUFLLEdBQUcsUUFBUSxDQUFDO1FBRVAsU0FBSSxHQUFHLElBQUksbUJBQVksRUFBUSxDQUFDO1FBQ2hDLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztRQUlqRCxJQUFJLENBQUMsSUFBSSxHQUFHLGVBQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHVDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ1osaURBQWlEO0lBQ25ELENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0NBQVMsR0FBVDtJQUVBLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNaLDJCQUEyQjtJQUM3QixDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLEtBQUs7UUFDakIsZ0NBQWdDO0lBQ2xDLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLDRCQUE0QjtJQUM5QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztRQUMvQyw0QkFBNEI7SUFDOUIsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDRSxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxZQUFZO1FBQ1osY0FBYztRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFBO1FBQzNCLDhCQUE4QjtRQUM5QixPQUFPO1FBQ0wsNkVBQTZFO0lBQ2pGLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF4REQsSUF3REM7QUFwRFU7SUFBUixZQUFLLEVBQUU7OzRDQUFzQjtBQUNwQjtJQUFULGFBQU0sRUFBRTs7NENBQXdDO0FBQ3ZDO0lBQVQsYUFBTSxFQUFFOzs4Q0FBMEM7QUFDOUI7SUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7OEJBQVcsaUJBQVU7Z0RBQUM7QUFQL0IsY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO0tBQzNCLENBQUM7cUNBVTRCLHlCQUFnQjtHQVRqQyxjQUFjLENBd0QxQjtBQXhEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcbmltcG9ydCB7IEN5Y2xlSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL2N5Y2xlLm1vZGVsJztcblxuZGVjbGFyZSBjb25zdCBhbmRyb2lkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJDeWNsZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2N5Y2xlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jeWNsZS5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEN5Y2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgaGlkZGVuO1xuICBwcml2YXRlIHBhZ2U6IFBhZ2U7XG4gIHB1YmxpYyB0aXRsZSA9IFwiQ3ljbGVzXCI7XG4gIEBJbnB1dCgpIGRhdGE6IEN5Y2xlSW50ZXJmYWNlO1xuICBAT3V0cHV0KCkgcHVibGljIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAVmlld0NoaWxkKCduZXdCdG4nKSBuZXdCdG5FbDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIHRoaXMucGFnZSA9IHRvcG1vc3QoKS5jdXJyZW50UGFnZTtcbiAgfVxuXG4gIGNyZWF0ZUN5Y2xlKCkge1xuICAgIHRoaXMuY3JlYXRlLmVtaXQoKTtcbiAgfVxuXG4gIGdldElzRXhwZW5zZU9rKCkge1xuICAgIHJldHVybiB0cnVlO1xuICAgIC8vIHJldHVybiB0aGlzLmN5Y2xlLmJ1ZGdldCA+IHRoaXMuY3ljbGUuZXhwZW5zZTtcbiAgfVxuXG4gIGFkZEV4cGVuc2UoKSB7XG4gICAgY29uc29sZS5sb2coJ2FkZCBleHBlbnNlJyk7XG4gIH1cblxuICBkb25lQ3ljbGUoKSB7XG5cbiAgfVxuXG4gIG9uTG9hZGVkKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uTG9hZGVkJyk7XG4gIH1cblxuICBvbkl0ZW1Mb2FkaW5nKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uSXRlbUxvYWRpbmcnKTtcbiAgfVxuXG4gIG9uSXRlbVRhcChldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkl0ZW1UYXAnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaGlkZGVuID0gdGhpcy5kYXRhLmV4cGVuc2UgPyBmYWxzZSA6IHRydWU7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5oaWRkZW4pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGJ0biA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZCgnbmV3QnRuJyk7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgLy8gZHJvcCBzaGFkb3dcbiAgICB0aGlzLm5ld0J0bkVsLm5hdGl2ZUVsZW1lbnRcbiAgICAvLyB0aGlzLm5ld0J0bkVsLm5hdGl2ZUVsZW1lbnRcbiAgICAvLyB2aWV3XG4gICAgICAvLyAuYW5kcm9pZC5zZXRCYWNrZ3JvdW5kUmVzb3VyY2UoYW5kcm9pZC5SLmRyYXdhYmxlLmRpYWxvZ19ob2xvX2xpZ2h0X2ZyYW1lKVxuICB9XG59XG4iXX0=