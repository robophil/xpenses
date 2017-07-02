"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ModalComponent = (function () {
    function ModalComponent() {
        this.color = '#ccc';
        this.backgroundColor = 'transparent';
        this.dismiss = true;
        this.dismissText = 'X';
        this.dismissAlign = 'right';
        this.dismissColor = '#ccc';
        this.close = new core_1.EventEmitter();
    }
    return ModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "backgroundColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ModalComponent.prototype, "dismiss", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "dismissText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "dismissAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "dismissColor", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "close", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: "Modal",
        template: "\n    <StackLayout [backgroundColor]=\"backgroundColor\" [color]=\"color\">\n\n      <StackLayout visibility=\"{{ dismiss ? 'visible' : 'collapsed' }}\">\n        <Button class=\"close\" [horizontalAlignment]=\"dismissAlign\" [text]=\"dismissText\" (tap)=\"close.emit()\"></Button>\n      </StackLayout>\n\n      <ng-content></ng-content>\n\n    </StackLayout>\n  ",
        styles: ["\n    .close {\n      width: 35;\n      background-color: transparent;\n      padding: 0 5;\n      font-size: 35;\n      border-width: 1;\n      border-color: transparent;\n    }\n  "]
    })
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBMEJ2RSxJQUFhLGNBQWM7SUF4QjNCO1FBeUJXLFVBQUssR0FBVyxNQUFNLENBQUM7UUFDdkIsb0JBQWUsR0FBVyxhQUFhLENBQUM7UUFFeEMsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUMxQixpQkFBWSxHQUFXLE9BQU8sQ0FBQztRQUMvQixpQkFBWSxHQUFXLE1BQU0sQ0FBQztRQUU3QixVQUFLLEdBQUcsSUFBSSxtQkFBWSxFQUFRLENBQUM7SUFDN0MsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFUVTtJQUFSLFlBQUssRUFBRTs7NkNBQXdCO0FBQ3ZCO0lBQVIsWUFBSyxFQUFFOzt1REFBeUM7QUFFeEM7SUFBUixZQUFLLEVBQUU7OytDQUF5QjtBQUN4QjtJQUFSLFlBQUssRUFBRTs7bURBQTJCO0FBQzFCO0lBQVIsWUFBSyxFQUFFOztvREFBZ0M7QUFDL0I7SUFBUixZQUFLLEVBQUU7O29EQUErQjtBQUU3QjtJQUFULGFBQU0sRUFBRTs7NkNBQWtDO0FBVGhDLGNBQWM7SUF4QjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsOFdBVVQ7UUFDRCxNQUFNLEVBQUUsQ0FBQyx3TEFTUixDQUFDO0tBQ0gsQ0FBQztHQUNXLGNBQWMsQ0FVMUI7QUFWWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIk1vZGFsXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPFN0YWNrTGF5b3V0IFtiYWNrZ3JvdW5kQ29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCIgW2NvbG9yXT1cImNvbG9yXCI+XG5cbiAgICAgIDxTdGFja0xheW91dCB2aXNpYmlsaXR5PVwie3sgZGlzbWlzcyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnIH19XCI+XG4gICAgICAgIDxCdXR0b24gY2xhc3M9XCJjbG9zZVwiIFtob3Jpem9udGFsQWxpZ25tZW50XT1cImRpc21pc3NBbGlnblwiIFt0ZXh0XT1cImRpc21pc3NUZXh0XCIgKHRhcCk9XCJjbG9zZS5lbWl0KClcIj48L0J1dHRvbj5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICAuY2xvc2Uge1xuICAgICAgd2lkdGg6IDM1O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBwYWRkaW5nOiAwIDU7XG4gICAgICBmb250LXNpemU6IDM1O1xuICAgICAgYm9yZGVyLXdpZHRoOiAxO1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICcjY2NjJztcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAndHJhbnNwYXJlbnQnO1xuXG4gIEBJbnB1dCgpIGRpc21pc3M6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBkaXNtaXNzVGV4dDogc3RyaW5nID0gJ1gnO1xuICBASW5wdXQoKSBkaXNtaXNzQWxpZ246IHN0cmluZyA9ICdyaWdodCc7XG4gIEBJbnB1dCgpIGRpc21pc3NDb2xvcjogc3RyaW5nID0gJyNjY2MnO1xuXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbn1cbiJdfQ==