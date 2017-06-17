"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var toLocaleString_1 = require("../../../../utils/toLocaleString");
var CycleComponent = (function () {
    function CycleComponent(router) {
        this.router = router;
        this.title = "Cycles";
        this.open = new core_1.EventEmitter();
        this.create = new core_1.EventEmitter();
    }
    Object.defineProperty(CycleComponent.prototype, "balance", {
        get: function () {
            return toLocaleString_1.default(this.data.budget.count - this.data.expense.count);
        },
        enumerable: true,
        configurable: true
    });
    CycleComponent.prototype.createCycle = function () {
        this.create.emit();
    };
    CycleComponent.prototype.getIsExpenseOk = function () {
        return true;
        // return this.cycle.budget > this.cycle.expense;
    };
    CycleComponent.prototype.addExpense = function () {
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
    CycleComponent.prototype.ngAfterViewInit = function () { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3ljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZIO0FBRzdILHNEQUEwRTtBQUkxRSxtRUFBOEQ7QUFVOUQsSUFBYSxjQUFjO0lBT3pCLHdCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUxyQyxVQUFLLEdBQUcsUUFBUSxDQUFDO1FBRVAsU0FBSSxHQUFHLElBQUksbUJBQVksRUFBUSxDQUFDO1FBQ2hDLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztJQUduRCxDQUFDO0lBRUQsc0JBQUksbUNBQU87YUFBWDtZQUNFLE1BQU0sQ0FBQyx3QkFBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRSxDQUFDOzs7T0FBQTtJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNaLGlEQUFpRDtJQUNuRCxDQUFDO0lBRUQsbUNBQVUsR0FBVjtJQUVBLENBQUM7SUFFRCxrQ0FBUyxHQUFUO0lBRUEsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osMkJBQTJCO0lBQzdCLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNqQixnQ0FBZ0M7SUFDbEMsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQy9DLDRCQUE0QjtJQUM5QixDQUFDO0lBRUQsd0NBQWUsR0FBZixjQUFtQixDQUFDO0lBQ3RCLHFCQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQztBQTlDVTtJQUFSLFlBQUssRUFBRTs7NENBQXNCO0FBQ3BCO0lBQVQsYUFBTSxFQUFFOzs0Q0FBd0M7QUFDdkM7SUFBVCxhQUFNLEVBQUU7OzhDQUEwQztBQUx4QyxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDM0IsQ0FBQztxQ0FRNEIseUJBQWdCO0dBUGpDLGNBQWMsQ0FpRDFCO0FBakRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcbmltcG9ydCB0b0xvY2FsZVN0cmluZyBmcm9tICcuLi8uLi8uLi8uLi91dGlscy90b0xvY2FsZVN0cmluZyc7XG4vLyBpbXBvcnQgdG9Mb2NhbGVTdHJpbmcgZnJvbSAnYXBwL3V0aWxzL3RvTG9jYWxlU3RyaW5nJztcbmltcG9ydCB7IEN5Y2xlSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL2N5Y2xlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcIkN5Y2xlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY3ljbGUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2N5Y2xlLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQ3ljbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBoaWRkZW47XG4gIHB1YmxpYyB0aXRsZSA9IFwiQ3ljbGVzXCI7XG4gIEBJbnB1dCgpIGRhdGE6IEN5Y2xlSW50ZXJmYWNlO1xuICBAT3V0cHV0KCkgcHVibGljIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gIH1cblxuICBnZXQgYmFsYW5jZSAoKSB7XG4gICAgcmV0dXJuIHRvTG9jYWxlU3RyaW5nKHRoaXMuZGF0YS5idWRnZXQuY291bnQgLSB0aGlzLmRhdGEuZXhwZW5zZS5jb3VudCk7XG4gIH1cblxuICBjcmVhdGVDeWNsZSgpIHtcbiAgICB0aGlzLmNyZWF0ZS5lbWl0KCk7XG4gIH1cblxuICBnZXRJc0V4cGVuc2VPaygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyByZXR1cm4gdGhpcy5jeWNsZS5idWRnZXQgPiB0aGlzLmN5Y2xlLmV4cGVuc2U7XG4gIH1cblxuICBhZGRFeHBlbnNlKCkge1xuXG4gIH1cblxuICBkb25lQ3ljbGUoKSB7XG5cbiAgfVxuXG4gIG9uTG9hZGVkKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uTG9hZGVkJyk7XG4gIH1cblxuICBvbkl0ZW1Mb2FkaW5nKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uSXRlbUxvYWRpbmcnKTtcbiAgfVxuXG4gIG9uSXRlbVRhcChldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkl0ZW1UYXAnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaGlkZGVuID0gdGhpcy5kYXRhLmV4cGVuc2UgPyBmYWxzZSA6IHRydWU7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5oaWRkZW4pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge31cbn1cbiJdfQ==