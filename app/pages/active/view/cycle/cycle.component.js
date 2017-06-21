"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var CycleComponent = (function () {
    function CycleComponent(router) {
        this.router = router;
        this.title = "Cycles";
        this.open = new core_1.EventEmitter();
        this.create = new core_1.EventEmitter();
    }
    CycleComponent.prototype.createCycle = function () {
        this.create.emit();
    };
    CycleComponent.prototype.getIsExpenseOk = function () {
        return true;
        // return this.cycle.budget > this.cycle.expense;
    };
    CycleComponent.prototype.addExpense = function () {
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
    CycleComponent.prototype.ngOnInit = function () {
        this.hidden = this.data.expense ? false : true;
        // console.log(this.hidden);
    };
    CycleComponent.prototype.ngAfterViewInit = function () { };
    return CycleComponent;
}());
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
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], CycleComponent);
exports.CycleComponent = CycleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3ljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZIO0FBRzdILHNEQUEwRTtBQVkxRSxJQUFhLGNBQWM7SUFPekIsd0JBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBTHJDLFVBQUssR0FBRyxRQUFRLENBQUM7UUFFUCxTQUFJLEdBQUcsSUFBSSxtQkFBWSxFQUFRLENBQUM7UUFDaEMsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBUSxDQUFDO0lBR25ELENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDWixpREFBaUQ7SUFDbkQsQ0FBQztJQUVELG1DQUFVLEdBQVY7SUFFQSxDQUFDO0lBRUQsa0NBQVMsR0FBVDtJQUVBLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNaLDJCQUEyQjtJQUM3QixDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLEtBQUs7UUFDakIsZ0NBQWdDO0lBQ2xDLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLDRCQUE0QjtJQUM5QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztRQUMvQyw0QkFBNEI7SUFDOUIsQ0FBQztJQUVELHdDQUFlLEdBQWYsY0FBbUIsQ0FBQztJQUN0QixxQkFBQztBQUFELENBQUMsQUE3Q0QsSUE2Q0M7QUExQ1U7SUFBUixZQUFLLEVBQUU7OzRDQUFzQjtBQUNwQjtJQUFULGFBQU0sRUFBRTs7NENBQXdDO0FBQ3ZDO0lBQVQsYUFBTSxFQUFFOzs4Q0FBMEM7QUFMeEMsY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO0tBQzNCLENBQUM7cUNBUTRCLHlCQUFnQjtHQVBqQyxjQUFjLENBNkMxQjtBQTdDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5pbXBvcnQgeyBDeWNsZUludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9jeWNsZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJDeWNsZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2N5Y2xlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jeWNsZS5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEN5Y2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgaGlkZGVuO1xuICBwdWJsaWMgdGl0bGUgPSBcIkN5Y2xlc1wiO1xuICBASW5wdXQoKSBkYXRhOiBDeWNsZUludGVyZmFjZTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcHVibGljIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xuICB9XG5cbiAgY3JlYXRlQ3ljbGUoKSB7XG4gICAgdGhpcy5jcmVhdGUuZW1pdCgpO1xuICB9XG5cbiAgZ2V0SXNFeHBlbnNlT2soKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gICAgLy8gcmV0dXJuIHRoaXMuY3ljbGUuYnVkZ2V0ID4gdGhpcy5jeWNsZS5leHBlbnNlO1xuICB9XG5cbiAgYWRkRXhwZW5zZSgpIHtcblxuICB9XG5cbiAgZG9uZUN5Y2xlKCkge1xuXG4gIH1cblxuICBvbkxvYWRlZChldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkxvYWRlZCcpO1xuICB9XG5cbiAgb25JdGVtTG9hZGluZyhldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkl0ZW1Mb2FkaW5nJyk7XG4gIH1cblxuICBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb25JdGVtVGFwJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmhpZGRlbiA9IHRoaXMuZGF0YS5leHBlbnNlID8gZmFsc2UgOiB0cnVlO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaGlkZGVuKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XG59XG4iXX0=