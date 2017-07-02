"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var frame_1 = require("ui/frame");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var add_category_component_1 = require("../add-category/add-category.component");
var CycleComponent = (function () {
    function CycleComponent(router, modal, vcRef) {
        this.router = router;
        this.modal = modal;
        this.vcRef = vcRef;
        this.title = "Cycles";
        this.open = new core_1.EventEmitter();
        this.create = new core_1.EventEmitter();
        this.page = frame_1.topmost().currentPage;
    }
    CycleComponent.prototype.getIsExpenseOk = function () {
        return true;
        // return this.cycle.budget > this.cycle.expense;
    };
    CycleComponent.prototype.addExpense = function () {
        var _this = this;
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(add_category_component_1.AddCategoryComponent, options).then(function (_a) {
            var amount = _a.amount, category = _a.category;
            _this.create.emit({ id: _this.data.id, amount: amount, category: category });
        });
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
    __metadata("design:paramtypes", [router_1.RouterExtensions,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], CycleComponent);
exports.CycleComponent = CycleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3ljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStJO0FBRy9JLHNEQUEwRTtBQUkxRSxrQ0FBa0M7QUFFbEMsa0VBQXVFO0FBQ3ZFLGlGQUE4RTtBQVU5RSxJQUFhLGNBQWM7SUFVekIsd0JBQ1UsTUFBd0IsRUFDeEIsS0FBeUIsRUFDekIsS0FBdUI7UUFGdkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFWMUIsVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUlQLFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztRQUNoQyxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUE0QixDQUFDO1FBT3JFLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBTyxFQUFFLENBQUMsV0FBVyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNaLGlEQUFpRDtJQUNuRCxDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxPQUFPLEdBQUc7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQzdCLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyw2Q0FBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFtQjtnQkFBakIsa0JBQU0sRUFBRSxzQkFBUTtZQUMxRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQVMsR0FBVDtJQUVBLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNaLDJCQUEyQjtJQUM3QixDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLEtBQUs7UUFDakIsZ0NBQWdDO0lBQ2xDLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLDRCQUE0QjtJQUM5QixDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVELGdDQUFPLEdBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDL0MsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCx3Q0FBZSxHQUFmO0lBQ0EsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWxFRCxJQWtFQztBQTlEVTtJQUFSLFlBQUssRUFBRTs7NkNBQWU7QUFDZDtJQUFSLFlBQUssRUFBRTs7Z0RBQWtCO0FBQ2pCO0lBQVIsWUFBSyxFQUFFOzs0Q0FBc0I7QUFDcEI7SUFBVCxhQUFNLEVBQUU7OzRDQUF3QztBQUN2QztJQUFULGFBQU0sRUFBRTs7OENBQThEO0FBUjVELGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsT0FBTztRQUNqQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUMzQixDQUFDO3FDQVlrQix5QkFBZ0I7UUFDakIsaUNBQWtCO1FBQ2xCLHVCQUFnQjtHQWJ0QixjQUFjLENBa0UxQjtBQWxFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcbmltcG9ydCB7IEN5Y2xlSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL2N5Y2xlLm1vZGVsJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgeyBBZGRDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gXCIuLi9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LmNvbXBvbmVudFwiO1xuXG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcIkN5Y2xlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY3ljbGUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2N5Y2xlLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQ3ljbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBoaWRkZW47XG4gIHByaXZhdGUgcGFnZTogUGFnZTtcbiAgcHVibGljIHRpdGxlID0gXCJDeWNsZXNcIjtcbiAgQElucHV0KCkgdG90YWw6IG51bWJlcjtcbiAgQElucHV0KCkgcG9zaXRpb246IG51bWJlcjtcbiAgQElucHV0KCkgZGF0YTogQ3ljbGVJbnRlcmZhY2U7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaWQsIGFtb3VudCwgY2F0ZWdvcnkgfT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICApIHtcbiAgICB0aGlzLnBhZ2UgPSB0b3Btb3N0KCkuY3VycmVudFBhZ2U7XG4gIH1cblxuICBnZXRJc0V4cGVuc2VPaygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyByZXR1cm4gdGhpcy5jeWNsZS5idWRnZXQgPiB0aGlzLmN5Y2xlLmV4cGVuc2U7XG4gIH1cblxuICBhZGRFeHBlbnNlKCkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgY29udGV4dDoge30sXG4gICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgIH07XG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoQWRkQ2F0ZWdvcnlDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKHsgYW1vdW50LCBjYXRlZ29yeX0pID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlLmVtaXQoeyBpZDogdGhpcy5kYXRhLmlkLCBhbW91bnQsIGNhdGVnb3J5IH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZG9uZUN5Y2xlKCkge1xuXG4gIH1cblxuICBvbkxvYWRlZChldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkxvYWRlZCcpO1xuICB9XG5cbiAgb25JdGVtTG9hZGluZyhldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkl0ZW1Mb2FkaW5nJyk7XG4gIH1cblxuICBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb25JdGVtVGFwJyk7XG4gIH1cblxuICBoYXNOZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uIDwgdGhpcy50b3RhbDtcbiAgfVxuXG4gIGhhc1ByZXYoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24gIT0gMTtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5oaWRkZW4gPSB0aGlzLmRhdGEuZXhwZW5zZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmhpZGRlbik7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gIH1cbn1cbiJdfQ==