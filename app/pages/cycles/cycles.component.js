"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CyclesComponent = (function () {
    function CyclesComponent(zone, router) {
        this.zone = zone;
        this.router = router;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN5Y2xlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUY7QUFDakYsMENBQXlEO0FBYXpELElBQWEsZUFBZTtJQUcxQix5QkFDVSxJQUFZLEVBQ1osTUFBYztRQURkLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXRCLENBQUM7SUFFSCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7S0FDNUIsQ0FBQztxQ0FLZ0IsYUFBTTtRQUNKLGVBQU07R0FMYixlQUFlLENBVzNCO0FBWFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJjeWNsZXNcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jeWNsZXMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2N5Y2xlcy5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEN5Y2xlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgcGFnZTogUGFnZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICkge1xuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIl19