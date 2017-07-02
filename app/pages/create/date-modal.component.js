"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var DateModalComponent = (function () {
    function DateModalComponent(params) {
        this.params = params;
    }
    DateModalComponent.prototype.ngOnInit = function () {
    };
    DateModalComponent.prototype.onDateChanged = function (args) {
        console.log(args.value);
    };
    DateModalComponent.prototype.onSelect = function () {
    };
    DateModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    return DateModalComponent;
}());
DateModalComponent = __decorate([
    core_1.Component({
        selector: "date-modal",
        template: "\n    <Modal (close)=\"close($event)\">\n      <StackLayout row=\"1\" verticalAlignment=\"center\" class=\"input-field\">\n        <DatePicker (dateChange)=\"onDateChanged($event)\"></DatePicker>\n        <Button fontSize=\"13\" color=\"white\" (tap)=\"onSelect()\" class=\"mdi btn btn-primary\" text=\"&#xE5CA; &nbsp; SELECT\"></Button>\n      </StackLayout>\n    </Modal>\n  ",
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
], DateModalComponent);
exports.DateModalComponent = DateModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtRUFBNEU7QUFhNUUsSUFBYSxrQkFBa0I7SUFFN0IsNEJBQTJCLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO0lBQ3BELENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDBDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVNLGtDQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksa0JBQWtCO0lBWDlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsMlhBT1Q7S0FDRixDQUFDO3FDQUdtQywyQkFBaUI7R0FGekMsa0JBQWtCLENBbUI5QjtBQW5CWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImRhdGUtbW9kYWxcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8TW9kYWwgKGNsb3NlKT1cImNsb3NlKCRldmVudClcIj5cbiAgICAgIDxTdGFja0xheW91dCByb3c9XCIxXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgIDxEYXRlUGlja2VyIChkYXRlQ2hhbmdlKT1cIm9uRGF0ZUNoYW5nZWQoJGV2ZW50KVwiPjwvRGF0ZVBpY2tlcj5cbiAgICAgICAgPEJ1dHRvbiBmb250U2l6ZT1cIjEzXCIgY29sb3I9XCJ3aGl0ZVwiICh0YXApPVwib25TZWxlY3QoKVwiIGNsYXNzPVwibWRpIGJ0biBidG4tcHJpbWFyeVwiIHRleHQ9XCImI3hFNUNBOyAmbmJzcDsgU0VMRUNUXCI+PC9CdXR0b24+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvTW9kYWw+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVNb2RhbENvbXBvbmVudCB7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkRhdGVDaGFuZ2VkKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhhcmdzLnZhbHVlKTtcbiAgfVxuXG4gIG9uU2VsZWN0KCkge1xuXG4gIH1cblxuICBwdWJsaWMgY2xvc2UocmVzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlcyk7XG4gIH1cbn1cbiJdfQ==