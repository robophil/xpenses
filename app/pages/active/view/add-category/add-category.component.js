"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var store_1 = require("@ngrx/store");
var reducers_1 = require("../../../../reducers");
var toMoney_1 = require("../../../../utils/toMoney");
var AddCategoryComponent = (function () {
    function AddCategoryComponent(params, store$) {
        this.params = params;
        this.store$ = store$;
        this.money_sign = toMoney_1.sign;
        this.selectedAmount = 0;
        this.data$ = store$.let(reducers_1.getCategoriesData());
    }
    AddCategoryComponent.prototype.onSelectCategory = function (category) {
        this.selectedCategory = category;
    };
    AddCategoryComponent.prototype.mapToDropdown = function (categories) {
        return categories.map(function (_a) {
            var name = _a.name;
            return name;
        });
    };
    AddCategoryComponent.prototype.onDone = function () {
        if (!this.selectedCategory) {
            return alert('Please make an Expense selection');
        }
        this.params.closeCallback({
            amount: this.selectedAmount,
            category: this.selectedCategory
        });
    };
    AddCategoryComponent.prototype.ngOnInit = function () { };
    return AddCategoryComponent;
}());
AddCategoryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-category',
        templateUrl: './add-category.component.html',
        styleUrls: ['./add-category.component.css']
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
        store_1.Store])
], AddCategoryComponent);
exports.AddCategoryComponent = AddCategoryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC1jYXRlZ29yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0VBQXNFO0FBQ3RFLHFDQUFvQztBQUNwQyxpREFBbUU7QUFJbkUscURBQWlEO0FBU2pELElBQWEsb0JBQW9CO0lBTy9CLDhCQUNVLE1BQXlCLEVBQ3pCLE1BQXVCO1FBRHZCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBUGpDLGVBQVUsR0FBVyxjQUFJLENBQUM7UUFHMUIsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFNekIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUFpQixFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsK0NBQWdCLEdBQWhCLFVBQWlCLFFBQTJCO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVELDRDQUFhLEdBQWIsVUFBYyxVQUErQjtRQUMzQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVE7Z0JBQU4sY0FBSTtZQUFPLE9BQUEsSUFBSTtRQUFKLENBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSxxQ0FBTSxHQUFiO1FBQ0UsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRix1Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUNmLDJCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDWSxvQkFBb0I7SUFQaEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNwQixRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsK0JBQStCO1FBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO0tBQzNDLENBQUM7cUNBVWtCLGdDQUFpQjtRQUNqQixhQUFLO0dBVFosb0JBQW9CLENBaUNoQztBQWpDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCB7IEFwcFN0YXRlLCBnZXRDYXRlZ29yaWVzRGF0YSB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlJbnRlcmZhY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWxzL2NhdGVnb3J5Lm1vZGVsXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFZhbHVlTGlzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XG5pbXBvcnQgeyBzaWduIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL3RvTW9uZXlcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnYWRkLWNhdGVnb3J5Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2FkZC1jYXRlZ29yeS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2FkZC1jYXRlZ29yeS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBZGRDYXRlZ29yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRhdGEkOiBPYnNlcnZhYmxlPFZhbHVlTGlzdDxzdHJpbmc+PjtcbiAgbW9uZXlfc2lnbjogc3RyaW5nID0gc2lnbjtcbiAgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuICBzZWxlY3RlZENhdGVnb3J5OiBDYXRlZ29yeUludGVyZmFjZTtcbiAgc2VsZWN0ZWRBbW91bnQ6IG51bWJlciA9IDA7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcbiAgICBwcml2YXRlIHN0b3JlJDogU3RvcmU8QXBwU3RhdGU+LFxuICAgICkge1xuICAgIHRoaXMuZGF0YSQgPSBzdG9yZSQubGV0KGdldENhdGVnb3JpZXNEYXRhKCkpO1xuICB9XG5cbiAgb25TZWxlY3RDYXRlZ29yeShjYXRlZ29yeTogQ2F0ZWdvcnlJbnRlcmZhY2UpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgfVxuXG4gIG1hcFRvRHJvcGRvd24oY2F0ZWdvcmllczogQ2F0ZWdvcnlJbnRlcmZhY2VbXSkge1xuICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcCgoeyBuYW1lIH0pID0+IG5hbWUpO1xuICB9XG5cbiAgcHVibGljIG9uRG9uZSgpIHtcbiAgICBpZighdGhpcy5zZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICByZXR1cm4gYWxlcnQoJ1BsZWFzZSBtYWtlIGFuIEV4cGVuc2Ugc2VsZWN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soe1xuICAgICAgYW1vdW50OiB0aGlzLnNlbGVjdGVkQW1vdW50LFxuICAgICAgY2F0ZWdvcnk6IHRoaXMuc2VsZWN0ZWRDYXRlZ29yeVxuICAgIH0pO1xuICB9XG5cblx0bmdPbkluaXQoKSB7IH1cbn1cbiJdfQ==