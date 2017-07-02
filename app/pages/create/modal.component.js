"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ModalComponent = (function () {
    function ModalComponent() {
        this.align = 'center';
        this.dismiss = true;
        this.close = new core_1.EventEmitter();
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.remove = function (res) {
        this.close.emit(res);
    };
    return ModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "align", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ModalComponent.prototype, "dismiss", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "close", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: "Modal",
        template: "\n    <GridLayout padding=\"20\" height=\"100%\" [verticalAlignment]=\"align\" rows=\"auto, *\">\n\n      <ng-content row=\"1\"></ng-content>\n\n      <AbsoluteLayout *ngIf=\"dismiss\" row=\"1\">\n        <StackLayout width=\"100%\">\n          <Button marginTop=\"-15\" marginRight=\"-20\" color=\"#ccc\" backgroundColor=\"transparent\" horizontalAlignment=\"right\" fontSize=\"25\" text=\"X\" (tap)=\"remove('framework')\"></Button>\n        </StackLayout>\n      </AbsoluteLayout>\n    </GridLayout>\n  ",
    })
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBaUIvRSxJQUFhLGNBQWM7SUFmM0I7UUFnQlcsVUFBSyxHQUFXLFFBQVEsQ0FBQztRQUN6QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztJQVE1QyxDQUFDO0lBTkMsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFTSwrQkFBTSxHQUFiLFVBQWMsR0FBVztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVZVO0lBQVIsWUFBSyxFQUFFOzs2Q0FBMEI7QUFDekI7SUFBUixZQUFLLEVBQUU7OytDQUF5QjtBQUN2QjtJQUFULGFBQU0sRUFBRTs7NkNBQWlDO0FBSC9CLGNBQWM7SUFmMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSw0ZkFXVDtLQUNGLENBQUM7R0FDVyxjQUFjLENBVzFCO0FBWFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIk1vZGFsXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPEdyaWRMYXlvdXQgcGFkZGluZz1cIjIwXCIgaGVpZ2h0PVwiMTAwJVwiIFt2ZXJ0aWNhbEFsaWdubWVudF09XCJhbGlnblwiIHJvd3M9XCJhdXRvLCAqXCI+XG5cbiAgICAgIDxuZy1jb250ZW50IHJvdz1cIjFcIj48L25nLWNvbnRlbnQ+XG5cbiAgICAgIDxBYnNvbHV0ZUxheW91dCAqbmdJZj1cImRpc21pc3NcIiByb3c9XCIxXCI+XG4gICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICA8QnV0dG9uIG1hcmdpblRvcD1cIi0xNVwiIG1hcmdpblJpZ2h0PVwiLTIwXCIgY29sb3I9XCIjY2NjXCIgYmFja2dyb3VuZENvbG9yPVwidHJhbnNwYXJlbnRcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiBmb250U2l6ZT1cIjI1XCIgdGV4dD1cIlhcIiAodGFwKT1cInJlbW92ZSgnZnJhbWV3b3JrJylcIj48L0J1dHRvbj5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgIDwvQWJzb2x1dGVMYXlvdXQ+XG4gICAgPC9HcmlkTGF5b3V0PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGFsaWduOiBzdHJpbmcgPSAnY2VudGVyJztcbiAgQElucHV0KCkgZGlzbWlzczogYm9vbGVhbiA9IHRydWU7XG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIHJlbW92ZShyZXM6IHN0cmluZykge1xuICAgIHRoaXMuY2xvc2UuZW1pdChyZXMpO1xuICB9XG59XG4iXX0=