"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var nativescript_ng_gradient_1 = require("nativescript-ng-gradient");
var PeriodModalComponent = (function () {
    function PeriodModalComponent(params) {
        this.params = params;
        this.gColors = ['#ffffff', '#f6f6f6'];
        this.gOrient = nativescript_ng_gradient_1.Orientation.TOP_BOTTOM;
        this.items = ["1 Day", "3 Days", "1 Week", "2 Weeks", "1 Month", "3 Months", "6 Months", "1 Year"];
    }
    PeriodModalComponent.prototype.ngOnInit = function () {
    };
    PeriodModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    return PeriodModalComponent;
}());
PeriodModalComponent = __decorate([
    core_1.Component({
        selector: "period-modal",
        template: "\n    <GridLayout [nsgrad]=\"gColors\" [nsgradOrient]=\"gOrient\" height=\"100%\" verticalAlignment=\"center\" rows=\"auto, *\">\n      <StackLayout  row=\"1\" verticalAlignment=\"center\" class=\"input-field\">\n        <ListPicker [items]=\"items\" selectedIndex=\"0\" class=\"p-15\"></ListPicker>\n        <!--<ListPicker [items]=\"pokemons\" selectedIndex=\"0\" (selectedIndexChange)=\"selectedIndexChanged($event)\" class=\"\"></ListPicker>-->\n      </StackLayout>\n      <AbsoluteLayout row=\"1\">\n        <StackLayout width=\"100%\">\n          <Button marginTop=\"20\" color=\"#e6e6e6\" backgroundColor=\"transparent\" horizontalAlignment=\"right\" fontSize=\"25\" text=\"X\" (tap)=\"close('framework')\"></Button>\n        </StackLayout>\n      </AbsoluteLayout>\n    </GridLayout>\n  ",
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
], PeriodModalComponent);
exports.PeriodModalComponent = PeriodModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyaW9kLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcmlvZC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsbUVBQTRFO0FBQzVFLHFFQUE4RDtBQWtCOUQsSUFBYSxvQkFBb0I7SUFLL0IsOEJBQTJCLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBSjdDLFlBQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqQyxZQUFPLEdBQUcsc0NBQVcsQ0FBQyxVQUFVLENBQUM7UUFDakMsVUFBSyxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBR3JHLENBQUM7SUFFRCx1Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVNLG9DQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksb0JBQW9CO0lBaEJoQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLDh4QkFZVDtLQUNGLENBQUM7cUNBTW1DLDJCQUFpQjtHQUx6QyxvQkFBb0IsQ0FjaEM7QUFkWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFR5cGVzLCBPcmllbnRhdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmctZ3JhZGllbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBlcmlvZC1tb2RhbFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxHcmlkTGF5b3V0IFtuc2dyYWRdPVwiZ0NvbG9yc1wiIFtuc2dyYWRPcmllbnRdPVwiZ09yaWVudFwiIGhlaWdodD1cIjEwMCVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIHJvd3M9XCJhdXRvLCAqXCI+XG4gICAgICA8U3RhY2tMYXlvdXQgIHJvdz1cIjFcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgPExpc3RQaWNrZXIgW2l0ZW1zXT1cIml0ZW1zXCIgc2VsZWN0ZWRJbmRleD1cIjBcIiBjbGFzcz1cInAtMTVcIj48L0xpc3RQaWNrZXI+XG4gICAgICAgIDwhLS08TGlzdFBpY2tlciBbaXRlbXNdPVwicG9rZW1vbnNcIiBzZWxlY3RlZEluZGV4PVwiMFwiIChzZWxlY3RlZEluZGV4Q2hhbmdlKT1cInNlbGVjdGVkSW5kZXhDaGFuZ2VkKCRldmVudClcIiBjbGFzcz1cIlwiPjwvTGlzdFBpY2tlcj4tLT5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8QWJzb2x1dGVMYXlvdXQgcm93PVwiMVwiPlxuICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgPEJ1dHRvbiBtYXJnaW5Ub3A9XCIyMFwiIGNvbG9yPVwiI2U2ZTZlNlwiIGJhY2tncm91bmRDb2xvcj1cInRyYW5zcGFyZW50XCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgZm9udFNpemU9XCIyNVwiIHRleHQ9XCJYXCIgKHRhcCk9XCJjbG9zZSgnZnJhbWV3b3JrJylcIj48L0J1dHRvbj5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgIDwvQWJzb2x1dGVMYXlvdXQ+XG4gICAgPC9HcmlkTGF5b3V0PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQZXJpb2RNb2RhbENvbXBvbmVudCB7XG4gIHB1YmxpYyBnQ29sb3JzID0gWycjZmZmZmZmJywgJyNmNmY2ZjYnXTtcbiAgcHVibGljIGdPcmllbnQgPSBPcmllbnRhdGlvbi5UT1BfQk9UVE9NO1xuICBwdWJsaWMgaXRlbXMgPSBbXCIxIERheVwiLCBcIjMgRGF5c1wiLCBcIjEgV2Vla1wiLCBcIjIgV2Vla3NcIiwgXCIxIE1vbnRoXCIsIFwiMyBNb250aHNcIiwgXCI2IE1vbnRoc1wiLCBcIjEgWWVhclwiXTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZShyZXM6IHN0cmluZykge1xuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcbiAgfVxufVxuIl19