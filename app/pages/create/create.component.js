"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dialogs_1 = require("ui/dialogs");
var store_1 = require("@ngrx/store");
var cycles_action_1 = require("../../actions/cycles.action");
var cycles_service_1 = require("../../services/cycles.service");
var period_modal_component_1 = require("./period-modal.component");
var date_modal_component_1 = require("./date-modal.component");
var dialogs_2 = require("nativescript-angular/directives/dialogs");
var CreateComponent = (function () {
    function CreateComponent(modal, vcRef, store, cycles, router) {
        this.modal = modal;
        this.vcRef = vcRef;
        this.store = store;
        this.cycles = cycles;
        this.router = router;
        this.sign = cycles_service_1.sign;
    }
    CreateComponent.prototype.onCreate = function (budget1, budget2) {
        var _this = this;
        var budget = (+budget1) + ((+budget2) / 100);
        this.store.dispatch(this.cycles.create({ budget: budget }));
        dialogs_1.alert('SUCCESSFULLY CREATED').then(function (res) {
            console.dir(res);
            _this.router.navigateByUrl('/main/active');
        });
        // setTimeout(() => this.router.navigateByUrl('/active'), 2000);
    };
    CreateComponent.prototype.goBack = function () {
        this.router.backToPreviousPage();
    };
    CreateComponent.prototype.onSelectPeriod = function () {
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(period_modal_component_1.PeriodModalComponent, options).then(function (res) {
            console.log(res);
        });
    };
    CreateComponent.prototype.onChooseDate = function () {
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(date_modal_component_1.DateModalComponent, options).then(function (res) {
            console.log(res);
        });
    };
    CreateComponent.prototype.ngOnInit = function () { };
    CreateComponent.prototype.ngAfterViewInit = function () { };
    return CreateComponent;
}());
CreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "create",
        templateUrl: "./create.component.html",
        styleUrls: ["./create.css"],
    }),
    __metadata("design:paramtypes", [dialogs_2.ModalDialogService,
        core_1.ViewContainerRef,
        store_1.Store,
        cycles_action_1.CyclesActions,
        router_1.RouterExtensions])
], CreateComponent);
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0g7QUFFbEgsc0RBQTBFO0FBSTFFLHNDQUFrQztBQUNsQyxxQ0FBb0M7QUFFcEMsNkRBQTREO0FBQzVELGdFQUFxRDtBQUNyRCxtRUFBZ0U7QUFDaEUsK0RBQTREO0FBQzVELG1FQUFnRztBQVFoRyxJQUFhLGVBQWU7SUFHMUIseUJBQ1UsS0FBeUIsRUFDekIsS0FBdUIsRUFDdkIsS0FBc0IsRUFDdEIsTUFBcUIsRUFDckIsTUFBd0I7UUFKeEIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVAzQixTQUFJLEdBQUcscUJBQUksQ0FBQztJQVFmLENBQUM7SUFFTCxrQ0FBUSxHQUFSLFVBQVMsT0FBTyxFQUFFLE9BQU87UUFBekIsaUJBUUM7UUFQQyxJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRCxlQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxnRUFBZ0U7SUFDbEUsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELHdDQUFjLEdBQWQ7UUFDRSxJQUFJLE9BQU8sR0FBRztZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDN0IsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLDZDQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0UsSUFBSSxPQUFPLEdBQUc7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQzdCLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyx5Q0FBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCx5Q0FBZSxHQUFmLGNBQW9CLENBQUM7SUFDdkIsc0JBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBbERZLGVBQWU7SUFOM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztLQUM1QixDQUFDO3FDQUtpQiw0QkFBa0I7UUFDbEIsdUJBQWdCO1FBQ2hCLGFBQUs7UUFDSiw2QkFBYTtRQUNiLHlCQUFnQjtHQVJ2QixlQUFlLENBa0QzQjtBQWxEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ1aS9kaWFsb2dzXCJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgQ3ljbGVzQWN0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY3ljbGVzLmFjdGlvbic7XG5pbXBvcnQgeyBzaWduIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2N5Y2xlcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQZXJpb2RNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL3BlcmlvZC1tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IERhdGVNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2RhdGUtbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiY3JlYXRlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY3JlYXRlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jcmVhdGUuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgc2lnbiA9IHNpZ247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxuICAgIHByaXZhdGUgY3ljbGVzOiBDeWNsZXNBY3Rpb25zLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICApIHsgfVxuXG4gIG9uQ3JlYXRlKGJ1ZGdldDEsIGJ1ZGdldDIpIHtcbiAgICBjb25zdCBidWRnZXQgPSAoK2J1ZGdldDEpICsgKCgrYnVkZ2V0MikgLyAxMDApO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5jeWNsZXMuY3JlYXRlKHsgYnVkZ2V0IH0pKTtcbiAgICBhbGVydCgnU1VDQ0VTU0ZVTExZIENSRUFURUQnKS50aGVuKHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmRpcihyZXMpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL21haW4vYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvYWN0aXZlJyksIDIwMDApO1xuICB9XG5cbiAgZ29CYWNrKCkge1xuICAgIHRoaXMucm91dGVyLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICB9XG5cbiAgb25TZWxlY3RQZXJpb2QoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBjb250ZXh0OiB7fSxcbiAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgfTtcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChQZXJpb2RNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2hvb3NlRGF0ZSgpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIGNvbnRleHQ6IHt9LFxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICB9O1xuICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKERhdGVNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkgeyB9XG59XG4iXX0=