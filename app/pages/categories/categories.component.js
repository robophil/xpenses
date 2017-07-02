"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_modal_component_1 = require("./create-modal.component");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var reducers_1 = require("./../../reducers");
var categories_action_1 = require("../../actions/categories.action");
var CategoriesComponent = (function () {
    function CategoriesComponent(modal, vcRef, store, zone, actions) {
        this.modal = modal;
        this.vcRef = vcRef;
        this.store = store;
        this.zone = zone;
        this.actions = actions;
        this.title = "Categories";
        this.data$ = this.store.let(reducers_1.getCategoriesData());
    }
    CategoriesComponent.prototype.onCreate = function () {
        var _this = this;
        var options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(create_modal_component_1.CreateModalComponent, options).then(function (name) {
            _this.store.dispatch(_this.actions.create({ name: name }));
        });
    };
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent.prototype.onLoaded = function (event) {
        // console.log('onLoaded');
    };
    CategoriesComponent.prototype.onItemLoading = function (event) {
        // console.log('onItemLoading');
    };
    CategoriesComponent.prototype.onItemTap = function (event) {
        // console.log('onItemTap');
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "categories",
        templateUrl: "./categories.component.html",
        styleUrls: ["./categories.css"],
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef,
        store_1.Store,
        core_1.NgZone,
        categories_action_1.CategoriesActions])
], CategoriesComponent);
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1FQUFnRTtBQUNoRSxrRUFBdUU7QUFFdkUsc0NBQW1HO0FBTW5HLHFDQUFvQztBQUNwQyw2Q0FBK0Q7QUFDL0QscUVBQW9FO0FBUXBFLElBQWEsbUJBQW1CO0lBSzlCLDZCQUNVLEtBQXlCLEVBQ3pCLEtBQXVCLEVBQ3ZCLEtBQXNCLEVBQ3RCLElBQVksRUFDWixPQUEwQjtRQUoxQixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFUN0IsVUFBSyxHQUFHLFlBQVksQ0FBQztRQVcxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDRCQUFpQixFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxPQUFPLEdBQUc7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQzdCLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyw2Q0FBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQzNELEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNaLDJCQUEyQjtJQUM3QixDQUFDO0lBRUQsMkNBQWEsR0FBYixVQUFjLEtBQUs7UUFDakIsZ0NBQWdDO0lBQ2xDLENBQUM7SUFFRCx1Q0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLDRCQUE0QjtJQUM5QixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBeENZLG1CQUFtQjtJQU4vQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7S0FDaEMsQ0FBQztxQ0FPaUIsaUNBQWtCO1FBQ2xCLHVCQUFnQjtRQUNoQixhQUFLO1FBQ04sYUFBTTtRQUNILHFDQUFpQjtHQVZ6QixtQkFBbUIsQ0F3Qy9CO0FBeENZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENyZWF0ZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jcmVhdGUtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgeyBDYXRlZ29yaWVzTW9kZWwgfSBmcm9tICcuLy4uLy4uL21vZGVscy9jYXRlZ29yeS5tb2RlbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBOZ1pvbmUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSwgZ2V0Q2F0ZWdvcmllc0RhdGEgfSBmcm9tICcuLy4uLy4uL3JlZHVjZXJzJztcbmltcG9ydCB7IENhdGVnb3JpZXNBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcmllcy5hY3Rpb25cIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImNhdGVnb3JpZXNcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXRlZ29yaWVzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jYXRlZ29yaWVzLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyB0aXRsZSA9IFwiQ2F0ZWdvcmllc1wiO1xuICBwcml2YXRlIHBhZ2U6IFBhZ2U7XG4gIHB1YmxpYyBkYXRhJDogT2JzZXJ2YWJsZTxDYXRlZ29yaWVzTW9kZWxbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgYWN0aW9uczogQ2F0ZWdvcmllc0FjdGlvbnMsXG4gICkge1xuICAgIHRoaXMuZGF0YSQgPSB0aGlzLnN0b3JlLmxldChnZXRDYXRlZ29yaWVzRGF0YSgpKTtcbiAgfVxuXG4gIG9uQ3JlYXRlKCkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgY29udGV4dDoge30sXG4gICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICB9O1xuICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKENyZWF0ZU1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKG5hbWUgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh0aGlzLmFjdGlvbnMuY3JlYXRlKHsgbmFtZSB9KSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uTG9hZGVkKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uTG9hZGVkJyk7XG4gIH1cblxuICBvbkl0ZW1Mb2FkaW5nKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uSXRlbUxvYWRpbmcnKTtcbiAgfVxuXG4gIG9uSXRlbVRhcChldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkl0ZW1UYXAnKTtcbiAgfVxufVxuIl19