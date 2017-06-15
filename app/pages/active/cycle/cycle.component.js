"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CycleComponent = (function () {
    function CycleComponent(zone, router) {
        this.zone = zone;
        this.router = router;
        this.open = new core_1.EventEmitter();
    }
    CycleComponent.prototype.openCycle = function () {
        this.open.emit();
    };
    CycleComponent.prototype.ngAfterViewInit = function () {
        // console.dir(this.data)
        // this.cardUi.nativeElement.on(GestureTypes.swipe, (args: SwipeGestureEventData) => {
        //   //  * 8 - down
        //   //  * 4 - up
        //   //  * 2 - right
        //   //  * 1 - left
        //   if (args.direction === 8) {
        //     this.isShowTop = true;
        //   }
        //   else if (args.direction === 4) {
        //     this.isShowTop = false;
        //   }
        //   this.zone.run(() => 0);
        //   console.log("Swipe Direction: " + args.direction, this.isShowTop);
        // });
    };
    CycleComponent.prototype.ngOnInit = function () {
    };
    return CycleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CycleComponent.prototype, "item", void 0);
__decorate([
    core_1.ViewChild('card'),
    __metadata("design:type", core_1.ElementRef)
], CycleComponent.prototype, "cardUi", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CycleComponent.prototype, "open", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3ljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZIO0FBQzdILDBDQUF5RDtBQVN6RCxJQUFhLGNBQWM7SUFRekIsd0JBQ1UsSUFBWSxFQUNaLE1BQWM7UUFEZCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUpQLFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztJQU0vQyxDQUFDO0lBRUgsa0NBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDRSx5QkFBeUI7UUFDekIsc0ZBQXNGO1FBQ3RGLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUVuQixnQ0FBZ0M7UUFDaEMsNkJBQTZCO1FBQzdCLE1BQU07UUFDTixxQ0FBcUM7UUFDckMsOEJBQThCO1FBQzlCLE1BQU07UUFFTiw0QkFBNEI7UUFDNUIsdUVBQXVFO1FBQ3ZFLE1BQU07SUFFUixDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUF4Q1U7SUFBUixZQUFLLEVBQUU7OzRDQUdKO0FBQ2U7SUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7OEJBQVMsaUJBQVU7OENBQUM7QUFDNUI7SUFBVCxhQUFNLEVBQUU7OzRDQUF3QztBQU50QyxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDM0IsQ0FBQztxQ0FVZ0IsYUFBTTtRQUNKLGVBQU07R0FWYixjQUFjLENBeUMxQjtBQXpDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiQ3ljbGVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jeWNsZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY3ljbGUuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBDeWNsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IHtcbiAgICBleHBlbnNlOiB7IGNvdW50OiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nIH0sXG4gICAgYnVkZ2V0OiB7IGNvdW50OiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nIH1cbiAgfVtdO1xuICBAVmlld0NoaWxkKCdjYXJkJykgY2FyZFVpOiBFbGVtZW50UmVmO1xuICBAT3V0cHV0KCkgcHVibGljIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICApIHtcbiAgICB9XG5cbiAgb3BlbkN5Y2xlKCkge1xuICAgIHRoaXMub3Blbi5lbWl0KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gY29uc29sZS5kaXIodGhpcy5kYXRhKVxuICAgIC8vIHRoaXMuY2FyZFVpLm5hdGl2ZUVsZW1lbnQub24oR2VzdHVyZVR5cGVzLnN3aXBlLCAoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSA9PiB7XG4gICAgLy8gICAvLyAgKiA4IC0gZG93blxuICAgIC8vICAgLy8gICogNCAtIHVwXG4gICAgLy8gICAvLyAgKiAyIC0gcmlnaHRcbiAgICAvLyAgIC8vICAqIDEgLSBsZWZ0XG5cbiAgICAvLyAgIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gOCkge1xuICAgIC8vICAgICB0aGlzLmlzU2hvd1RvcCA9IHRydWU7XG4gICAgLy8gICB9XG4gICAgLy8gICBlbHNlIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gNCkge1xuICAgIC8vICAgICB0aGlzLmlzU2hvd1RvcCA9IGZhbHNlO1xuICAgIC8vICAgfVxuXG4gICAgLy8gICB0aGlzLnpvbmUucnVuKCgpID0+IDApO1xuICAgIC8vICAgY29uc29sZS5sb2coXCJTd2lwZSBEaXJlY3Rpb246IFwiICsgYXJncy5kaXJlY3Rpb24sIHRoaXMuaXNTaG93VG9wKTtcbiAgICAvLyB9KTtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cbiJdfQ==