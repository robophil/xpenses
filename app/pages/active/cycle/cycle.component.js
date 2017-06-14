"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CycleComponent = (function () {
    function CycleComponent(zone, router) {
        this.zone = zone;
        this.router = router;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3ljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVHO0FBQ3ZHLDBDQUF5RDtBQVN6RCxJQUFhLGNBQWM7SUFRekIsd0JBQ1UsSUFBWSxFQUNaLE1BQWM7UUFEZCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUV0QixDQUFDO0lBRUgsd0NBQWUsR0FBZjtRQUNFLHlCQUF5QjtRQUN6QixzRkFBc0Y7UUFDdEYsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBRW5CLGdDQUFnQztRQUNoQyw2QkFBNkI7UUFDN0IsTUFBTTtRQUNOLHFDQUFxQztRQUNyQyw4QkFBOEI7UUFDOUIsTUFBTTtRQUVOLDRCQUE0QjtRQUM1Qix1RUFBdUU7UUFDdkUsTUFBTTtJQUVSLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQW5DVTtJQUFSLFlBQUssRUFBRTs7NENBR0o7QUFDZTtJQUFsQixnQkFBUyxDQUFDLE1BQU0sQ0FBQzs4QkFBUyxpQkFBVTs4Q0FBQztBQU4zQixjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDM0IsQ0FBQztxQ0FVZ0IsYUFBTTtRQUNKLGVBQU07R0FWYixjQUFjLENBcUMxQjtBQXJDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJDeWNsZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2N5Y2xlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jeWNsZS5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEN5Y2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBpc1Nob3dUb3A6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGl0ZW06IHtcbiAgICBleHBlbnNlOiB7IGNvdW50OiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nIH0sXG4gICAgYnVkZ2V0OiB7IGNvdW50OiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nIH1cbiAgfVtdO1xuICBAVmlld0NoaWxkKCdjYXJkJykgY2FyZFVpOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgKSB7XG4gICAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmRpcih0aGlzLmRhdGEpXG4gICAgLy8gdGhpcy5jYXJkVWkubmF0aXZlRWxlbWVudC5vbihHZXN0dXJlVHlwZXMuc3dpcGUsIChhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpID0+IHtcbiAgICAvLyAgIC8vICAqIDggLSBkb3duXG4gICAgLy8gICAvLyAgKiA0IC0gdXBcbiAgICAvLyAgIC8vICAqIDIgLSByaWdodFxuICAgIC8vICAgLy8gICogMSAtIGxlZnRcblxuICAgIC8vICAgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSA4KSB7XG4gICAgLy8gICAgIHRoaXMuaXNTaG93VG9wID0gdHJ1ZTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGVsc2UgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSA0KSB7XG4gICAgLy8gICAgIHRoaXMuaXNTaG93VG9wID0gZmFsc2U7XG4gICAgLy8gICB9XG5cbiAgICAvLyAgIHRoaXMuem9uZS5ydW4oKCkgPT4gMCk7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcIlN3aXBlIERpcmVjdGlvbjogXCIgKyBhcmdzLmRpcmVjdGlvbiwgdGhpcy5pc1Nob3dUb3ApO1xuICAgIC8vIH0pO1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIl19