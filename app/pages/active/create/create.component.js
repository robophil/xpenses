"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var router_1 = require("nativescript-angular/router");
var store_1 = require("@ngrx/store");
var cycles_action_1 = require("../../../actions/cycles.action");
var cycles_service_1 = require("../../../services/cycles.service");
var dialogs_2 = require("nativescript-angular/directives/dialogs");
var DateModalComponent = (function () {
    function DateModalComponent(params) {
        this.params = params;
    }
    DateModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    return DateModalComponent;
}());
DateModalComponent = __decorate([
    core_1.Component({
        selector: "my-modal",
        template: "\n    <StackLayout verticalAlignment=\"center\" class=\"input-field\">\n      <DatePicker></DatePicker>\n      <!--<DatePicker [day]=\"\" [month]=\"\" [year]=\"\"></DatePicker>-->\n    </StackLayout>\n    <AbsoluteLayout>\n      <StackLayout width=\"100%\">\n        <Button marginTop=\"20\" color=\"#e6e6e6\" backgroundColor=\"transparent\" horizontalAlignment=\"right\" fontSize=\"25\" text=\"X\" (tap)=\"close('framework')\"></Button>\n      </StackLayout>\n    </AbsoluteLayout>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0g7QUFFbEgsbUVBQTRFO0FBQzVFLHNEQUEwRTtBQUkxRSxxQ0FBb0M7QUFFcEMsZ0VBQStEO0FBQy9ELG1FQUF3RDtBQUN4RCxtRUFBNkU7QUFpQjdFLElBQWEsa0JBQWtCO0lBRzdCLDRCQUEyQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUNwRCxDQUFDO0lBRU0sa0NBQUssR0FBWixVQUFhLEdBQVc7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSxrQkFBa0I7SUFkOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSx3ZUFVVDtLQUNGLENBQUM7cUNBSW1DLDJCQUFpQjtHQUh6QyxrQkFBa0IsQ0FTOUI7QUFUWSxnREFBa0I7QUFpQi9CLElBQWEscUJBQXFCO0lBSWhDLCtCQUNVLEtBQXlCLEVBQ3pCLEtBQXVCLEVBQ3ZCLEtBQXNCLEVBQ3RCLE1BQXFCLEVBQ3JCLE1BQXdCO1FBSnhCLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFSM0IsU0FBSSxHQUFHLHFCQUFJLENBQUM7UUFVakIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRUQsd0NBQVEsR0FBUixVQUFTLE9BQU8sRUFBRSxPQUFPO1FBQXpCLGlCQUtDO1FBSkMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDOUIsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBcEMsQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNENBQVksR0FBWjtRQUNFLElBQUksT0FBTyxHQUFHO1lBQ1osT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUM3QixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsK0NBQWUsR0FBZixjQUFvQixDQUFDO0lBQ3ZCLDRCQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQXZDWSxxQkFBcUI7SUFOakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztLQUM1QixDQUFDO3FDQU1pQiw0QkFBa0I7UUFDbEIsdUJBQWdCO1FBQ2hCLGFBQUs7UUFDSiw2QkFBYTtRQUNiLHlCQUFnQjtHQVR2QixxQkFBcUIsQ0F1Q2pDO0FBdkNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgQ3ljbGVzQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvY3ljbGVzLmFjdGlvbic7XG5pbXBvcnQgeyBzaWduIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2N5Y2xlcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LW1vZGFsXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPFN0YWNrTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgPERhdGVQaWNrZXI+PC9EYXRlUGlja2VyPlxuICAgICAgPCEtLTxEYXRlUGlja2VyIFtkYXldPVwiXCIgW21vbnRoXT1cIlwiIFt5ZWFyXT1cIlwiPjwvRGF0ZVBpY2tlcj4tLT5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDxBYnNvbHV0ZUxheW91dD5cbiAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgPEJ1dHRvbiBtYXJnaW5Ub3A9XCIyMFwiIGNvbG9yPVwiI2U2ZTZlNlwiIGJhY2tncm91bmRDb2xvcj1cInRyYW5zcGFyZW50XCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgZm9udFNpemU9XCIyNVwiIHRleHQ9XCJYXCIgKHRhcCk9XCJjbG9zZSgnZnJhbWV3b3JrJylcIj48L0J1dHRvbj5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9BYnNvbHV0ZUxheW91dD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZU1vZGFsQ29tcG9uZW50IHtcbiAgcHVibGljIGl0ZW1zOiBBcnJheTxzdHJpbmc+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZShyZXM6IHN0cmluZykge1xuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWN0aXZlLWNyZWF0ZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY3JlYXRlLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIHNpZ24gPSBzaWduO1xuICBpdGVtcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXG4gICAgcHJpdmF0ZSBjeWNsZXM6IEN5Y2xlc0FjdGlvbnMsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICkge1xuICAgIHRoaXMuaXRlbXMgPSBbXCIxIERheVwiLCBcIjMgRGF5c1wiLCBcIjEgV2Vla1wiLCBcIjIgV2Vla3NcIiwgXCIxIE1vbnRoXCIsIFwiMyBNb250aHNcIiwgXCI2IE1vbnRoc1wiLCBcIjEgWWVhclwiXTtcbiAgfVxuXG4gIG9uQ3JlYXRlKGJ1ZGdldDEsIGJ1ZGdldDIpIHtcbiAgICBjb25zdCBidWRnZXQgPSAoK2J1ZGdldDEpICsgKCgrYnVkZ2V0MikgLyAxMDApO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godGhpcy5jeWNsZXMuY3JlYXRlKHsgYnVkZ2V0IH0pKTtcbiAgICBhbGVydCgnU1VDQ0VTU0ZVTExZIENSRUFURUQnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9hY3RpdmUnKSwgMjAwMCk7XG4gIH1cblxuICBnb0JhY2soKSB7XG4gICAgdGhpcy5yb3V0ZXIuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gIH1cblxuICBvbkNob29zZURhdGUoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBjb250ZXh0OiB7fSxcbiAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgfTtcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChEYXRlTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgfVxufVxuIl19