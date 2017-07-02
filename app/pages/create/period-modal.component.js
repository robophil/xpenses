"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var PeriodModalComponent = (function () {
    function PeriodModalComponent(params) {
        this.params = params;
        this.items = ["1 Day", "3 Days", "1 Week", "2 Weeks", "1 Month", "3 Months", "6 Months", "1 Year"];
    }
    PeriodModalComponent.prototype.ngOnInit = function () {
    };
    PeriodModalComponent.prototype.selectedIndexChanged = function (args) {
        console.log(args.object.selectedIndex);
    };
    PeriodModalComponent.prototype.onSelect = function () {
    };
    PeriodModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    return PeriodModalComponent;
}());
PeriodModalComponent = __decorate([
    core_1.Component({
        selector: "period-modal",
        template: "\n    <Modal (close)=\"close($event)\">\n      <StackLayout row=\"1\" verticalAlignment=\"center\" class=\"input-field\">\n        <ListPicker [items]=\"items\" selectedIndex=\"0\" (selectedIndexChange)=\"selectedIndexChanged($event)\" class=\"p-30\"></ListPicker>\n\n        <Button fontSize=\"13\" color=\"white\" (tap)=\"onSelect()\" class=\"mdi btn btn-primary\" text=\"&#xE5CA; &nbsp; SELECT\"></Button>\n      </StackLayout>\n    </Modal>\n  ",
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
], PeriodModalComponent);
exports.PeriodModalComponent = PeriodModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyaW9kLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcmlvZC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsbUVBQTRFO0FBYzVFLElBQWEsb0JBQW9CO0lBRy9CLDhCQUEyQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUY3QyxVQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFHckcsQ0FBQztJQUVELHVDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsbURBQW9CLEdBQXBCLFVBQXFCLElBQUk7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCx1Q0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVNLG9DQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksb0JBQW9CO0lBWmhDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsa2NBUVQ7S0FDRixDQUFDO3FDQUltQywyQkFBaUI7R0FIekMsb0JBQW9CLENBb0JoQztBQXBCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBlcmlvZC1tb2RhbFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxNb2RhbCAoY2xvc2UpPVwiY2xvc2UoJGV2ZW50KVwiPlxuICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjFcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgPExpc3RQaWNrZXIgW2l0ZW1zXT1cIml0ZW1zXCIgc2VsZWN0ZWRJbmRleD1cIjBcIiAoc2VsZWN0ZWRJbmRleENoYW5nZSk9XCJzZWxlY3RlZEluZGV4Q2hhbmdlZCgkZXZlbnQpXCIgY2xhc3M9XCJwLTMwXCI+PC9MaXN0UGlja2VyPlxuXG4gICAgICAgIDxCdXR0b24gZm9udFNpemU9XCIxM1wiIGNvbG9yPVwid2hpdGVcIiAodGFwKT1cIm9uU2VsZWN0KClcIiBjbGFzcz1cIm1kaSBidG4gYnRuLXByaW1hcnlcIiB0ZXh0PVwiJiN4RTVDQTsgJm5ic3A7IFNFTEVDVFwiPjwvQnV0dG9uPlxuICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L01vZGFsPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQZXJpb2RNb2RhbENvbXBvbmVudCB7XG4gIHB1YmxpYyBpdGVtcyA9IFtcIjEgRGF5XCIsIFwiMyBEYXlzXCIsIFwiMSBXZWVrXCIsIFwiMiBXZWVrc1wiLCBcIjEgTW9udGhcIiwgXCIzIE1vbnRoc1wiLCBcIjYgTW9udGhzXCIsIFwiMSBZZWFyXCJdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2VsZWN0ZWRJbmRleENoYW5nZWQoYXJncykge1xuICAgIGNvbnNvbGUubG9nKGFyZ3Mub2JqZWN0LnNlbGVjdGVkSW5kZXgpO1xuICB9XG5cbiAgb25TZWxlY3QoKSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZShyZXM6IHN0cmluZykge1xuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcbiAgfVxufVxuIl19