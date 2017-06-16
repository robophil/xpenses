"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ExpensesComponent = (function () {
    function ExpensesComponent(zone, router) {
        this.zone = zone;
        this.router = router;
        this.title = "Expenses";
    }
    ExpensesComponent.prototype.ngOnInit = function () {
    };
    return ExpensesComponent;
}());
ExpensesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "expenses",
        templateUrl: "./expenses.component.html",
        styleUrls: ["./expenses.css"],
    }),
    __metadata("design:paramtypes", [core_1.NgZone,
        router_1.Router])
], ExpensesComponent);
exports.ExpensesComponent = ExpensesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlGO0FBQ2pGLDBDQUF5RDtBQWF6RCxJQUFhLGlCQUFpQjtJQUk1QiwyQkFDVSxJQUFZLEVBQ1osTUFBYztRQURkLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTGpCLFVBQUssR0FBRyxVQUFVLENBQUM7SUFPeEIsQ0FBQztJQUVILG9DQUFRLEdBQVI7SUFDQSxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7S0FDOUIsQ0FBQztxQ0FNZ0IsYUFBTTtRQUNKLGVBQU07R0FOYixpQkFBaUIsQ0FZN0I7QUFaWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJleHBlbnNlc1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2V4cGVuc2VzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9leHBlbnNlcy5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEV4cGVuc2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHRpdGxlID0gXCJFeHBlbnNlc1wiO1xuICBwcml2YXRlIHBhZ2U6IFBhZ2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICApIHtcbiAgICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cbiJdfQ==