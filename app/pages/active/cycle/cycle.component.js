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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3ljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZIO0FBQzdILDBDQUF5RDtBQVN6RCxJQUFhLGNBQWM7SUFTekIsd0JBQ1UsSUFBWSxFQUNaLE1BQWM7UUFEZCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUpQLFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztJQU0vQyxDQUFDO0lBRUgsa0NBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDRSx5QkFBeUI7UUFDekIsc0ZBQXNGO1FBQ3RGLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUVuQixnQ0FBZ0M7UUFDaEMsNkJBQTZCO1FBQzdCLE1BQU07UUFDTixxQ0FBcUM7UUFDckMsOEJBQThCO1FBQzlCLE1BQU07UUFFTiw0QkFBNEI7UUFDNUIsdUVBQXVFO1FBQ3ZFLE1BQU07SUFFUixDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUF4Q1U7SUFBUixZQUFLLEVBQUU7OzRDQUdKO0FBQ2U7SUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7OEJBQVMsaUJBQVU7OENBQUM7QUFDNUI7SUFBVCxhQUFNLEVBQUU7OzRDQUF3QztBQVB0QyxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDM0IsQ0FBQztxQ0FXZ0IsYUFBTTtRQUNKLGVBQU07R0FYYixjQUFjLENBMEMxQjtBQTFDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiQ3ljbGVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jeWNsZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY3ljbGUuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBDeWNsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgaXNTaG93VG9wOiBib29sZWFuO1xuICBASW5wdXQoKSBpdGVtOiB7XG4gICAgZXhwZW5zZTogeyBjb3VudDogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyB9LFxuICAgIGJ1ZGdldDogeyBjb3VudDogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyB9XG4gIH1bXTtcbiAgQFZpZXdDaGlsZCgnY2FyZCcpIGNhcmRVaTogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIHB1YmxpYyBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgKSB7XG4gICAgfVxuXG4gIG9wZW5DeWNsZSgpIHtcbiAgICB0aGlzLm9wZW4uZW1pdCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMuZGF0YSlcbiAgICAvLyB0aGlzLmNhcmRVaS5uYXRpdmVFbGVtZW50Lm9uKEdlc3R1cmVUeXBlcy5zd2lwZSwgKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkgPT4ge1xuICAgIC8vICAgLy8gICogOCAtIGRvd25cbiAgICAvLyAgIC8vICAqIDQgLSB1cFxuICAgIC8vICAgLy8gICogMiAtIHJpZ2h0XG4gICAgLy8gICAvLyAgKiAxIC0gbGVmdFxuXG4gICAgLy8gICBpZiAoYXJncy5kaXJlY3Rpb24gPT09IDgpIHtcbiAgICAvLyAgICAgdGhpcy5pc1Nob3dUb3AgPSB0cnVlO1xuICAgIC8vICAgfVxuICAgIC8vICAgZWxzZSBpZiAoYXJncy5kaXJlY3Rpb24gPT09IDQpIHtcbiAgICAvLyAgICAgdGhpcy5pc1Nob3dUb3AgPSBmYWxzZTtcbiAgICAvLyAgIH1cblxuICAgIC8vICAgdGhpcy56b25lLnJ1bigoKSA9PiAwKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiU3dpcGUgRGlyZWN0aW9uOiBcIiArIGFyZ3MuZGlyZWN0aW9uLCB0aGlzLmlzU2hvd1RvcCk7XG4gICAgLy8gfSk7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iXX0=