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
        template: "\n    <GridLayout padding=\"20\" [verticalAlignment]=\"align\" rows=\"auto, *\">\n\n      <ng-content row=\"1\"></ng-content>\n\n      <AbsoluteLayout *ngIf=\"dismiss\" row=\"1\">\n        <StackLayout width=\"100%\">\n          <Button marginTop=\"-15\" marginRight=\"-20\" color=\"#ccc\" backgroundColor=\"transparent\" horizontalAlignment=\"right\" fontSize=\"25\" text=\"X\" (tap)=\"remove('framework')\"></Button>\n        </StackLayout>\n      </AbsoluteLayout>\n    </GridLayout>\n  ",
    })
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBaUIvRSxJQUFhLGNBQWM7SUFmM0I7UUFnQlcsVUFBSyxHQUFXLFFBQVEsQ0FBQztRQUN6QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztJQVE1QyxDQUFDO0lBTkMsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFTSwrQkFBTSxHQUFiLFVBQWMsR0FBVztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVZVO0lBQVIsWUFBSyxFQUFFOzs2Q0FBMEI7QUFDekI7SUFBUixZQUFLLEVBQUU7OytDQUF5QjtBQUN2QjtJQUFULGFBQU0sRUFBRTs7NkNBQWlDO0FBSC9CLGNBQWM7SUFmMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSw0ZUFXVDtLQUNGLENBQUM7R0FDVyxjQUFjLENBVzFCO0FBWFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIk1vZGFsXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPEdyaWRMYXlvdXQgcGFkZGluZz1cIjIwXCIgW3ZlcnRpY2FsQWxpZ25tZW50XT1cImFsaWduXCIgcm93cz1cImF1dG8sICpcIj5cblxuICAgICAgPG5nLWNvbnRlbnQgcm93PVwiMVwiPjwvbmctY29udGVudD5cblxuICAgICAgPEFic29sdXRlTGF5b3V0ICpuZ0lmPVwiZGlzbWlzc1wiIHJvdz1cIjFcIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgIDxCdXR0b24gbWFyZ2luVG9wPVwiLTE1XCIgbWFyZ2luUmlnaHQ9XCItMjBcIiBjb2xvcj1cIiNjY2NcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ0cmFuc3BhcmVudFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIGZvbnRTaXplPVwiMjVcIiB0ZXh0PVwiWFwiICh0YXApPVwicmVtb3ZlKCdmcmFtZXdvcmsnKVwiPjwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC9BYnNvbHV0ZUxheW91dD5cbiAgICA8L0dyaWRMYXlvdXQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYWxpZ246IHN0cmluZyA9ICdjZW50ZXInO1xuICBASW5wdXQoKSBkaXNtaXNzOiBib29sZWFuID0gdHJ1ZTtcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKHJlczogc3RyaW5nKSB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KHJlcyk7XG4gIH1cbn1cbiJdfQ==