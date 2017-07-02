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
        template: "\n    <Modal [align]=\"center\" (close)=\"close($event)\">\n      <StackLayout row=\"1\" verticalAlignment=\"center\" class=\"input-field\">\n        <DatePicker (dateChange)=\"onDateChanged($event)\"></DatePicker>\n        <Button fontSize=\"13\" color=\"white\" (tap)=\"onSelect()\" class=\"mdi btn btn-primary\" text=\"&#xE5CA; &nbsp; SELECT\"></Button>\n      </StackLayout>\n    </Modal>\n  ",
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
], DateModalComponent);
exports.DateModalComponent = DateModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtRUFBNEU7QUFhNUUsSUFBYSxrQkFBa0I7SUFFN0IsNEJBQTJCLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO0lBQ3BELENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDBDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVNLGtDQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksa0JBQWtCO0lBWDlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsOFlBT1Q7S0FDRixDQUFDO3FDQUdtQywyQkFBaUI7R0FGekMsa0JBQWtCLENBbUI5QjtBQW5CWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImRhdGUtbW9kYWxcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8TW9kYWwgW2FsaWduXT1cImNlbnRlclwiIChjbG9zZSk9XCJjbG9zZSgkZXZlbnQpXCI+XG4gICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICA8RGF0ZVBpY2tlciAoZGF0ZUNoYW5nZSk9XCJvbkRhdGVDaGFuZ2VkKCRldmVudClcIj48L0RhdGVQaWNrZXI+XG4gICAgICAgIDxCdXR0b24gZm9udFNpemU9XCIxM1wiIGNvbG9yPVwid2hpdGVcIiAodGFwKT1cIm9uU2VsZWN0KClcIiBjbGFzcz1cIm1kaSBidG4gYnRuLXByaW1hcnlcIiB0ZXh0PVwiJiN4RTVDQTsgJm5ic3A7IFNFTEVDVFwiPjwvQnV0dG9uPlxuICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L01vZGFsPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlTW9kYWxDb21wb25lbnQge1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25EYXRlQ2hhbmdlZChhcmdzKSB7XG4gICAgY29uc29sZS5sb2coYXJncy52YWx1ZSk7XG4gIH1cblxuICBvblNlbGVjdCgpIHtcblxuICB9XG5cbiAgcHVibGljIGNsb3NlKHJlczogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXMpO1xuICB9XG59XG4iXX0=