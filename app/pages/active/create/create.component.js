"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var router_1 = require("nativescript-angular/router");
var store_1 = require("@ngrx/store");
var cycles_action_1 = require("../../../actions/cycles.action");
var cycles_service_1 = require("../../../services/cycles.service");
var nativescript_ng_gradient_1 = require("nativescript-ng-gradient");
var dialogs_2 = require("nativescript-angular/directives/dialogs");
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
        selector: "my-modal",
        template: "\n    <GridLayout [nsgrad]=\"gColors\" [nsgradOrient]=\"gOrient\" height=\"100%\" verticalAlignment=\"center\" rows=\"auto, *\">\n      <StackLayout  row=\"1\" verticalAlignment=\"center\" class=\"input-field\">\n        <DatePicker></DatePicker>\n        <!--<DatePicker [day]=\"\" [month]=\"\" [year]=\"\"></DatePicker>-->\n      </StackLayout>\n      <AbsoluteLayout row=\"1\">\n        <StackLayout width=\"100%\">\n          <Button marginTop=\"20\" color=\"#e6e6e6\" backgroundColor=\"transparent\" horizontalAlignment=\"right\" fontSize=\"25\" text=\"X\" (tap)=\"close('framework')\"></Button>\n        </StackLayout>\n      </AbsoluteLayout>\n    </GridLayout>\n  ",
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
], DateModalComponent);
exports.DateModalComponent = DateModalComponent;
var ActiveCreateComponent = (function () {
    function ActiveCreateComponent(modal, vcRef, store, cycles, router) {
        this.modal = modal;
        this.vcRef = vcRef;
        this.store = store;
        this.cycles = cycles;
        this.router = router;
        this.sign = cycles_service_1.sign;
        this.items = ["1 Day", "3 Days", "1 Week", "2 Weeks", "1 Month", "3 Months", "6 Months", "1 Year"];
    }
    ActiveCreateComponent.prototype.onCreate = function (budget1, budget2) {
        var _this = this;
        var budget = (+budget1) + ((+budget2) / 100);
        this.store.dispatch(this.cycles.create({ budget: budget }));
        alert('SUCCESSFULLY CREATED');
        setTimeout(function () { return _this.router.navigateByUrl('/active'); }, 2000);
    };
    ActiveCreateComponent.prototype.goBack = function () {
        this.router.backToPreviousPage();
    };
    ActiveCreateComponent.prototype.onChooseDate = function () {
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(DateModalComponent, options).then(function (res) {
            console.log(res);
        });
    };
    ActiveCreateComponent.prototype.ngOnInit = function () { };
    ActiveCreateComponent.prototype.ngAfterViewInit = function () { };
    return ActiveCreateComponent;
}());
ActiveCreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "active-create",
        templateUrl: "./create.component.html",
        styleUrls: ["./create.css"],
    }),
    __metadata("design:paramtypes", [dialogs_2.ModalDialogService,
        core_1.ViewContainerRef,
        store_1.Store,
        cycles_action_1.CyclesActions,
        router_1.RouterExtensions])
], ActiveCreateComponent);
exports.ActiveCreateComponent = ActiveCreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0g7QUFFbEgsbUVBQTRFO0FBQzVFLHNEQUEwRTtBQUkxRSxxQ0FBb0M7QUFFcEMsZ0VBQStEO0FBQy9ELG1FQUF3RDtBQUN4RCxxRUFBOEQ7QUFDOUQsbUVBQTZFO0FBa0I3RSxJQUFhLGtCQUFrQjtJQUk3Qiw0QkFBMkIsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFIN0MsWUFBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLFlBQU8sR0FBRyxzQ0FBVyxDQUFDLFVBQVUsQ0FBQztJQUd4QyxDQUFDO0lBRUQscUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFTSxrQ0FBSyxHQUFaLFVBQWEsR0FBVztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLGtCQUFrQjtJQWhCOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxrcUJBWVQ7S0FDRixDQUFDO3FDQUttQywyQkFBaUI7R0FKekMsa0JBQWtCLENBYTlCO0FBYlksZ0RBQWtCO0FBcUIvQixJQUFhLHFCQUFxQjtJQUloQywrQkFDVSxLQUF5QixFQUN6QixLQUF1QixFQUN2QixLQUFzQixFQUN0QixNQUFxQixFQUNyQixNQUF3QjtRQUp4QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBUjNCLFNBQUksR0FBRyxxQkFBSSxDQUFDO1FBVWpCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxPQUFPLEVBQUUsT0FBTztRQUF6QixpQkFLQztRQUpDLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzlCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQXBDLENBQW9DLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELDRDQUFZLEdBQVo7UUFDRSxJQUFJLE9BQU8sR0FBRztZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDN0IsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx3Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLCtDQUFlLEdBQWYsY0FBb0IsQ0FBQztJQUN2Qiw0QkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1kscUJBQXFCO0lBTmpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7S0FDNUIsQ0FBQztxQ0FNaUIsNEJBQWtCO1FBQ2xCLHVCQUFnQjtRQUNoQixhQUFLO1FBQ0osNkJBQWE7UUFDYix5QkFBZ0I7R0FUdkIscUJBQXFCLENBdUNqQztBQXZDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdWNlcnNcIjtcbmltcG9ydCB7IEN5Y2xlc0FjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2N5Y2xlcy5hY3Rpb24nO1xuaW1wb3J0IHsgc2lnbiB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9jeWNsZXMuc2VydmljZVwiO1xuaW1wb3J0IHsgVHlwZXMsIE9yaWVudGF0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZy1ncmFkaWVudFwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktbW9kYWxcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8R3JpZExheW91dCBbbnNncmFkXT1cImdDb2xvcnNcIiBbbnNncmFkT3JpZW50XT1cImdPcmllbnRcIiBoZWlnaHQ9XCIxMDAlXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiByb3dzPVwiYXV0bywgKlwiPlxuICAgICAgPFN0YWNrTGF5b3V0ICByb3c9XCIxXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgIDxEYXRlUGlja2VyPjwvRGF0ZVBpY2tlcj5cbiAgICAgICAgPCEtLTxEYXRlUGlja2VyIFtkYXldPVwiXCIgW21vbnRoXT1cIlwiIFt5ZWFyXT1cIlwiPjwvRGF0ZVBpY2tlcj4tLT5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8QWJzb2x1dGVMYXlvdXQgcm93PVwiMVwiPlxuICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgPEJ1dHRvbiBtYXJnaW5Ub3A9XCIyMFwiIGNvbG9yPVwiI2U2ZTZlNlwiIGJhY2tncm91bmRDb2xvcj1cInRyYW5zcGFyZW50XCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgZm9udFNpemU9XCIyNVwiIHRleHQ9XCJYXCIgKHRhcCk9XCJjbG9zZSgnZnJhbWV3b3JrJylcIj48L0J1dHRvbj5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgIDwvQWJzb2x1dGVMYXlvdXQ+XG4gICAgPC9HcmlkTGF5b3V0PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlTW9kYWxDb21wb25lbnQge1xuICBwdWJsaWMgZ0NvbG9ycyA9IFsnI2ZmZmZmZicsICcjZjZmNmY2J107XG4gIHB1YmxpYyBnT3JpZW50ID0gT3JpZW50YXRpb24uVE9QX0JPVFRPTTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZShyZXM6IHN0cmluZykge1xuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWN0aXZlLWNyZWF0ZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY3JlYXRlLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIHNpZ24gPSBzaWduO1xuICBpdGVtcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXG4gICAgcHJpdmF0ZSBjeWNsZXM6IEN5Y2xlc0FjdGlvbnMsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICkge1xuICAgIHRoaXMuaXRlbXMgPSBbXCIxIERheVwiLCBcIjMgRGF5c1wiLCBcIjEgV2Vla1wiLCBcIjIgV2Vla3NcIiwgXCIxIE1vbnRoXCIsIFwiMyBNb250aHNcIiwgXCI2IE1vbnRoc1wiLCBcIjEgWWVhclwiXTtcbiAgfVxuXG4gIG9uQ3JlYXRlKGJ1ZGdldDEsIGJ1ZGdldDIpIHtcbiAgICBjb25zdCBidWRnZXQgPSAoK2J1ZGdldDEpICsgKCgrYnVkZ2V0MikgLyAxMDApO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5jeWNsZXMuY3JlYXRlKHsgYnVkZ2V0IH0pKTtcbiAgICBhbGVydCgnU1VDQ0VTU0ZVTExZIENSRUFURUQnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9hY3RpdmUnKSwgMjAwMCk7XG4gIH1cblxuICBnb0JhY2soKSB7XG4gICAgdGhpcy5yb3V0ZXIuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gIH1cblxuICBvbkNob29zZURhdGUoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBjb250ZXh0OiB7fSxcbiAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgfTtcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChEYXRlTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgfVxufVxuIl19