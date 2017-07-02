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
        template: "\n    <Modal [align]=\"center\" (close)=\"close($event)\">\n      <StackLayout row=\"1\" verticalAlignment=\"center\" class=\"input-field\">\n        <ListPicker [items]=\"items\" selectedIndex=\"0\" (selectedIndexChange)=\"selectedIndexChanged($event)\" class=\"p-30\"></ListPicker>\n\n        <Button fontSize=\"13\" color=\"white\" (tap)=\"onSelect()\" class=\"mdi btn btn-primary\" text=\"&#xE5CA; &nbsp; SELECT\"></Button>\n      </StackLayout>\n    </Modal>\n  ",
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
], PeriodModalComponent);
exports.PeriodModalComponent = PeriodModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyaW9kLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcmlvZC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsbUVBQTRFO0FBYzVFLElBQWEsb0JBQW9CO0lBRy9CLDhCQUEyQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUY3QyxVQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFHckcsQ0FBQztJQUVELHVDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsbURBQW9CLEdBQXBCLFVBQXFCLElBQUk7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCx1Q0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVNLG9DQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksb0JBQW9CO0lBWmhDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUscWRBUVQ7S0FDRixDQUFDO3FDQUltQywyQkFBaUI7R0FIekMsb0JBQW9CLENBb0JoQztBQXBCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBlcmlvZC1tb2RhbFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxNb2RhbCBbYWxpZ25dPVwiY2VudGVyXCIgKGNsb3NlKT1cImNsb3NlKCRldmVudClcIj5cbiAgICAgIDxTdGFja0xheW91dCByb3c9XCIxXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgIDxMaXN0UGlja2VyIFtpdGVtc109XCJpdGVtc1wiIHNlbGVjdGVkSW5kZXg9XCIwXCIgKHNlbGVjdGVkSW5kZXhDaGFuZ2UpPVwic2VsZWN0ZWRJbmRleENoYW5nZWQoJGV2ZW50KVwiIGNsYXNzPVwicC0zMFwiPjwvTGlzdFBpY2tlcj5cblxuICAgICAgICA8QnV0dG9uIGZvbnRTaXplPVwiMTNcIiBjb2xvcj1cIndoaXRlXCIgKHRhcCk9XCJvblNlbGVjdCgpXCIgY2xhc3M9XCJtZGkgYnRuIGJ0bi1wcmltYXJ5XCIgdGV4dD1cIiYjeEU1Q0E7ICZuYnNwOyBTRUxFQ1RcIj48L0J1dHRvbj5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9Nb2RhbD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUGVyaW9kTW9kYWxDb21wb25lbnQge1xuICBwdWJsaWMgaXRlbXMgPSBbXCIxIERheVwiLCBcIjMgRGF5c1wiLCBcIjEgV2Vla1wiLCBcIjIgV2Vla3NcIiwgXCIxIE1vbnRoXCIsIFwiMyBNb250aHNcIiwgXCI2IE1vbnRoc1wiLCBcIjEgWWVhclwiXTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhhcmdzLm9iamVjdC5zZWxlY3RlZEluZGV4KTtcbiAgfVxuXG4gIG9uU2VsZWN0KCkge1xuXG4gIH1cblxuICBwdWJsaWMgY2xvc2UocmVzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlcyk7XG4gIH1cbn1cbiJdfQ==