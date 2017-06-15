"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ActionBarComponent = (function () {
    function ActionBarComponent() {
        this.title = ' > xPenses <';
    }
    ActionBarComponent.prototype.ngOnInit = function () {
        console.log(this.title, 'hey');
    };
    return ActionBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ActionBarComponent.prototype, "title", void 0);
ActionBarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "Action-Bar",
        templateUrl: "./action-bar.component.html",
        styleUrls: ["./action-bar.css"],
    })
], ActionBarComponent);
exports.ActionBarComponent = ActionBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQVV6RCxJQUFhLGtCQUFrQjtJQU4vQjtRQVFXLFVBQUssR0FBVyxjQUFjLENBQUM7SUFLMUMsQ0FBQztJQUhDLHFDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFMVTtJQUFSLFlBQUssRUFBRTs7aURBQWdDO0FBRjdCLGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7S0FDaEMsQ0FBQztHQUNXLGtCQUFrQixDQU85QjtBQVBZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSdcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIlxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiQWN0aW9uLUJhclwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FjdGlvbi1iYXIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2FjdGlvbi1iYXIuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHBhZ2U6IFBhZ2U7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnID4geFBlbnNlcyA8JztcblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRpdGxlLCAnaGV5JylcbiAgfVxufVxuIl19