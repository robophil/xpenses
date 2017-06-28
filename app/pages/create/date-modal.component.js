"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var nativescript_ng_gradient_1 = require("nativescript-ng-gradient");
var DateModalComponent = (function () {
    function DateModalComponent(params) {
        this.params = params;
        this.gColors = ['#ffffff', '#f6f6f6'];
        this.gOrient = nativescript_ng_gradient_1.Orientation.TOP_BOTTOM;
    }
    DateModalComponent.prototype.ngOnInit = function () {
    };
    DateModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    return DateModalComponent;
}());
DateModalComponent = __decorate([
    core_1.Component({
        selector: "date-modal",
        template: "\n    <GridLayout [nsgrad]=\"gColors\" [nsgradOrient]=\"gOrient\" height=\"100%\" verticalAlignment=\"center\" rows=\"auto, *\">\n      <StackLayout  row=\"1\" verticalAlignment=\"center\" class=\"input-field\">\n        <DatePicker></DatePicker>\n        <!--<DatePicker [day]=\"\" [month]=\"\" [year]=\"\"></DatePicker>-->\n      </StackLayout>\n      <AbsoluteLayout row=\"1\">\n        <StackLayout width=\"100%\">\n          <Button marginTop=\"20\" color=\"#e6e6e6\" backgroundColor=\"transparent\" horizontalAlignment=\"right\" fontSize=\"25\" text=\"X\" (tap)=\"close('framework')\"></Button>\n        </StackLayout>\n      </AbsoluteLayout>\n    </GridLayout>\n  ",
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
], DateModalComponent);
exports.DateModalComponent = DateModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtRUFBNEU7QUFDNUUscUVBQThEO0FBa0I5RCxJQUFhLGtCQUFrQjtJQUk3Qiw0QkFBMkIsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFIN0MsWUFBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLFlBQU8sR0FBRyxzQ0FBVyxDQUFDLFVBQVUsQ0FBQztJQUd4QyxDQUFDO0lBRUQscUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFTSxrQ0FBSyxHQUFaLFVBQWEsR0FBVztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLGtCQUFrQjtJQWhCOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxrcUJBWVQ7S0FDRixDQUFDO3FDQUttQywyQkFBaUI7R0FKekMsa0JBQWtCLENBYTlCO0FBYlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBUeXBlcywgT3JpZW50YXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LW5nLWdyYWRpZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJkYXRlLW1vZGFsXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPEdyaWRMYXlvdXQgW25zZ3JhZF09XCJnQ29sb3JzXCIgW25zZ3JhZE9yaWVudF09XCJnT3JpZW50XCIgaGVpZ2h0PVwiMTAwJVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgcm93cz1cImF1dG8sICpcIj5cbiAgICAgIDxTdGFja0xheW91dCAgcm93PVwiMVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICA8RGF0ZVBpY2tlcj48L0RhdGVQaWNrZXI+XG4gICAgICAgIDwhLS08RGF0ZVBpY2tlciBbZGF5XT1cIlwiIFttb250aF09XCJcIiBbeWVhcl09XCJcIj48L0RhdGVQaWNrZXI+LS0+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPEFic29sdXRlTGF5b3V0IHJvdz1cIjFcIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgIDxCdXR0b24gbWFyZ2luVG9wPVwiMjBcIiBjb2xvcj1cIiNlNmU2ZTZcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ0cmFuc3BhcmVudFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIGZvbnRTaXplPVwiMjVcIiB0ZXh0PVwiWFwiICh0YXApPVwiY2xvc2UoJ2ZyYW1ld29yaycpXCI+PC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L0Fic29sdXRlTGF5b3V0PlxuICAgIDwvR3JpZExheW91dD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZU1vZGFsQ29tcG9uZW50IHtcbiAgcHVibGljIGdDb2xvcnMgPSBbJyNmZmZmZmYnLCAnI2Y2ZjZmNiddO1xuICBwdWJsaWMgZ09yaWVudCA9IE9yaWVudGF0aW9uLlRPUF9CT1RUT007XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBwdWJsaWMgY2xvc2UocmVzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlcyk7XG4gIH1cbn1cbiJdfQ==