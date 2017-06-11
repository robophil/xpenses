"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var gestures_1 = require("ui/gestures");
var CycleComponent = (function () {
    function CycleComponent(zone, router) {
        this.zone = zone;
        this.router = router;
    }
    CycleComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // console.dir(this.data)
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
    CycleComponent.prototype.ngOnInit = function () {
    };
    return CycleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CycleComponent.prototype, "data", void 0);
__decorate([
    core_1.ViewChild('card'),
    __metadata("design:type", core_1.ElementRef)
], CycleComponent.prototype, "cardUi", void 0);
CycleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "Cycle",
        templateUrl: "./cycle.component.html",
        styleUrls: ["./cycle.css"],
    }),
    __metadata("design:paramtypes", [core_1.NgZone,
        router_1.Router])
], CycleComponent);
exports.CycleComponent = CycleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3ljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVHO0FBQ3ZHLDBDQUF5RDtBQUN6RCx3Q0FBa0U7QUFRbEUsSUFBYSxjQUFjO0lBUXpCLHdCQUNVLElBQVksRUFDWixNQUFjO1FBRGQsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFdEIsQ0FBQztJQUVILHdDQUFlLEdBQWY7UUFBQSxpQkFxQkM7UUFwQkMseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyx1QkFBWSxDQUFDLEtBQUssRUFBRSxVQUFDLElBQTJCO1lBQzNFOzs7OztlQUtHO1lBRUgsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQztZQUVELEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQXJDVTtJQUFSLFlBQUssRUFBRTs7NENBR0o7QUFDZTtJQUFsQixnQkFBUyxDQUFDLE1BQU0sQ0FBQzs4QkFBUyxpQkFBVTs4Q0FBQztBQU4zQixjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDM0IsQ0FBQztxQ0FVZ0IsYUFBTTtRQUNKLGVBQU07R0FWYixjQUFjLENBdUMxQjtBQXZDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJDeWNsZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2N5Y2xlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jeWNsZS5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEN5Y2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBpc1Nob3dUb3A6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRhdGE6IHtcbiAgICBleHBlbnNlOiB7IGNvdW50OiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nIH0sXG4gICAgYnVkZ2V0OiB7IGNvdW50OiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nIH1cbiAgfVtdO1xuICBAVmlld0NoaWxkKCdjYXJkJykgY2FyZFVpOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgKSB7XG4gICAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmRpcih0aGlzLmRhdGEpXG4gICAgdGhpcy5jYXJkVWkubmF0aXZlRWxlbWVudC5vbihHZXN0dXJlVHlwZXMuc3dpcGUsIChhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogOCAtIGRvd25cbiAgICAgICAqIDQgLSB1cFxuICAgICAgICogMiAtIHJpZ2h0XG4gICAgICAgKiAxIC0gbGVmdFxuICAgICAgICovXG5cbiAgICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gOCkge1xuICAgICAgICB0aGlzLmlzU2hvd1RvcCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gNCkge1xuICAgICAgICB0aGlzLmlzU2hvd1RvcCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IDApO1xuICAgICAgY29uc29sZS5sb2coXCJTd2lwZSBEaXJlY3Rpb246IFwiICsgYXJncy5kaXJlY3Rpb24sIHRoaXMuaXNTaG93VG9wKTtcbiAgICB9KTtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cbiJdfQ==