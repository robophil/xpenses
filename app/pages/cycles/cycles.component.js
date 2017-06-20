"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CyclesComponent = (function () {
    function CyclesComponent(zone, router) {
        this.zone = zone;
        this.router = router;
        this.title = "Cycles";
    }
    CyclesComponent.prototype.ngOnInit = function () {
    };
    return CyclesComponent;
}());
CyclesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "cycles",
        templateUrl: "./cycles.component.html",
        styleUrls: ["./cycles.css"],
    }),
    __metadata("design:paramtypes", [core_1.NgZone,
        router_1.Router])
], CyclesComponent);
exports.CyclesComponent = CyclesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN5Y2xlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUY7QUFDakYsMENBQXlEO0FBYXpELElBQWEsZUFBZTtJQUkxQix5QkFDVSxJQUFZLEVBQ1osTUFBYztRQURkLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTGpCLFVBQUssR0FBRyxRQUFRLENBQUM7SUFPdEIsQ0FBQztJQUVILGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLGVBQWU7SUFOM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztLQUM1QixDQUFDO3FDQU1nQixhQUFNO1FBQ0osZUFBTTtHQU5iLGVBQWUsQ0FZM0I7QUFaWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6IFwiY3ljbGVzXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jeWNsZXMuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vY3ljbGVzLmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEN5Y2xlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIHRpdGxlID0gXCJDeWNsZXNcIjtcclxuICBwcml2YXRlIHBhZ2U6IFBhZ2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxufVxyXG4iXX0=