"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var store_1 = require("@ngrx/store");
var reducers_1 = require("../../../../reducers");
var AddCategoryComponent = (function () {
    function AddCategoryComponent(params, store$) {
        this.params = params;
        this.store$ = store$;
        this.data$ = store$.let(reducers_1.getCategoriesData());
    }
    AddCategoryComponent.prototype.onSelect = function () {
    };
    AddCategoryComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    AddCategoryComponent.prototype.ngOnInit = function () { };
    return AddCategoryComponent;
}());
AddCategoryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-category',
        templateUrl: 'add-category.component.html',
        styleUrls: ['add-category.component.css']
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
        store_1.Store])
], AddCategoryComponent);
exports.AddCategoryComponent = AddCategoryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC1jYXRlZ29yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0VBQXNFO0FBQ3RFLHFDQUFvQztBQUNwQyxpREFBbUU7QUFXbkUsSUFBYSxvQkFBb0I7SUFHL0IsOEJBQ1UsTUFBeUIsRUFDekIsTUFBdUI7UUFEdkIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFFN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFpQixFQUFFLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtJQUVBLENBQUM7SUFFTSxvQ0FBSyxHQUFaLFVBQWEsR0FBVztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUYsdUNBQVEsR0FBUixjQUFhLENBQUM7SUFDZiwyQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksb0JBQW9CO0lBUGhDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDcEIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztLQUN6QyxDQUFDO3FDQU1rQixnQ0FBaUI7UUFDakIsYUFBSztHQUxaLG9CQUFvQixDQW1CaEM7QUFuQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSwgZ2V0Q2F0ZWdvcmllc0RhdGEgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdWNlcnNcIjtcbmltcG9ydCB7IENhdGVnb3J5SW50ZXJmYWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy9jYXRlZ29yeS5tb2RlbFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnYWRkLWNhdGVnb3J5Jyxcblx0dGVtcGxhdGVVcmw6ICdhZGQtY2F0ZWdvcnkuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEFkZENhdGVnb3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGF0YSQ6IE9ic2VydmFibGU8Q2F0ZWdvcnlJbnRlcmZhY2VbXT47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcbiAgICBwcml2YXRlIHN0b3JlJDogU3RvcmU8QXBwU3RhdGU+LFxuICAgICkge1xuICAgICAgdGhpcy5kYXRhJCA9IHN0b3JlJC5sZXQoZ2V0Q2F0ZWdvcmllc0RhdGEoKSlcbiAgfVxuXG4gIG9uU2VsZWN0KCkge1xuXG4gIH1cblxuICBwdWJsaWMgY2xvc2UocmVzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlcyk7XG4gIH1cblxuXHRuZ09uSW5pdCgpIHsgfVxufVxuIl19