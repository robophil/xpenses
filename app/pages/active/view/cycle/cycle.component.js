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
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(add_category_component_1.AddCategoryComponent, options).then(function (params) {
            if (params) {
                _this.create.emit({ id: _this.data.id, amount: params.amount, category: params.category });
            }
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
        console.dir(this.data.categories);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3ljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStJO0FBRy9JLHNEQUEwRTtBQUkxRSxrQ0FBa0M7QUFFbEMsa0VBQXVFO0FBQ3ZFLGlGQUE4RTtBQVU5RSxJQUFhLGNBQWM7SUFTekIsd0JBQ1UsTUFBd0IsRUFDeEIsS0FBeUIsRUFDekIsS0FBdUI7UUFGdkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFWMUIsVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUlQLFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztRQUNoQyxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUE0QixDQUFDO1FBT3JFLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBTyxFQUFFLENBQUMsV0FBVyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNaLGlEQUFpRDtJQUNuRCxDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxPQUFPLEdBQUc7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQzdCLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyw2Q0FBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQzdELEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzNGLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBUyxHQUFUO0lBRUEsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osMkJBQTJCO0lBQzdCLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNqQixnQ0FBZ0M7SUFDbEMsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxnQ0FBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsd0NBQWUsR0FBZjtJQUNBLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFqRUQsSUFpRUM7QUE5RFU7SUFBUixZQUFLLEVBQUU7OzZDQUFlO0FBQ2Q7SUFBUixZQUFLLEVBQUU7O2dEQUFrQjtBQUNqQjtJQUFSLFlBQUssRUFBRTs7NENBQXNCO0FBQ3BCO0lBQVQsYUFBTSxFQUFFOzs0Q0FBd0M7QUFDdkM7SUFBVCxhQUFNLEVBQUU7OzhDQUE4RDtBQVA1RCxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDM0IsQ0FBQztxQ0FXa0IseUJBQWdCO1FBQ2pCLGlDQUFrQjtRQUNsQix1QkFBZ0I7R0FadEIsY0FBYyxDQWlFMUI7QUFqRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgR2VzdHVyZVR5cGVzLCBTd2lwZUdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMsIFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSdcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5pbXBvcnQgeyBDeWNsZUludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9jeWNsZS5tb2RlbCc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgQWRkQ2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tIFwiLi4vYWRkLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS5jb21wb25lbnRcIjtcblxuZGVjbGFyZSBjb25zdCBhbmRyb2lkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJDeWNsZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2N5Y2xlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jeWNsZS5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEN5Y2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBwYWdlOiBQYWdlO1xuICBwdWJsaWMgdGl0bGUgPSBcIkN5Y2xlc1wiO1xuICBASW5wdXQoKSB0b3RhbDogbnVtYmVyO1xuICBASW5wdXQoKSBwb3NpdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBkYXRhOiBDeWNsZUludGVyZmFjZTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcHVibGljIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpZCwgYW1vdW50LCBjYXRlZ29yeSB9PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICkge1xuICAgIHRoaXMucGFnZSA9IHRvcG1vc3QoKS5jdXJyZW50UGFnZTtcbiAgfVxuXG4gIGdldElzRXhwZW5zZU9rKCkge1xuICAgIHJldHVybiB0cnVlO1xuICAgIC8vIHJldHVybiB0aGlzLmN5Y2xlLmJ1ZGdldCA+IHRoaXMuY3ljbGUuZXhwZW5zZTtcbiAgfVxuXG4gIGFkZEV4cGVuc2UoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBjb250ZXh0OiB7fSxcbiAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgIH07XG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoQWRkQ2F0ZWdvcnlDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocGFyYW1zID0+IHtcbiAgICAgIGlmKHBhcmFtcykge1xuICAgICAgICB0aGlzLmNyZWF0ZS5lbWl0KHsgaWQ6IHRoaXMuZGF0YS5pZCwgYW1vdW50OiBwYXJhbXMuYW1vdW50LCBjYXRlZ29yeTogcGFyYW1zLmNhdGVnb3J5IH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZG9uZUN5Y2xlKCkge1xuXG4gIH1cblxuICBvbkxvYWRlZChldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkxvYWRlZCcpO1xuICB9XG5cbiAgb25JdGVtTG9hZGluZyhldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkl0ZW1Mb2FkaW5nJyk7XG4gIH1cblxuICBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb25JdGVtVGFwJyk7XG4gIH1cblxuICBoYXNOZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uIDwgdGhpcy50b3RhbDtcbiAgfVxuXG4gIGhhc1ByZXYoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24gIT0gMTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUuZGlyKHRoaXMuZGF0YS5jYXRlZ29yaWVzKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgfVxufVxuIl19