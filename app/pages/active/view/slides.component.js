"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var slides_component_1 = require("nativescript-ngx-slides/slides/app/slides/slides.component");
var ActiveSlidesComponent = (function () {
    function ActiveSlidesComponent() {
        this.create = new core_1.EventEmitter();
    }
    ActiveSlidesComponent.prototype.createCycle = function () {
        this.create.emit();
    };
    ActiveSlidesComponent.prototype.ngOnInit = function () { };
    ActiveSlidesComponent.prototype.ngAfterViewInit = function () {
        this.slides.GoToSlide(this.data.length); // Switch to the last added active slide
    };
    return ActiveSlidesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ActiveSlidesComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ActiveSlidesComponent.prototype, "create", void 0);
__decorate([
    core_1.ViewChild('slidesEl'),
    __metadata("design:type", slides_component_1.SlidesComponent)
], ActiveSlidesComponent.prototype, "slides", void 0);
ActiveSlidesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "active-slides",
        templateUrl: "./slides.component.html",
        styleUrls: ["./slides.css"],
    })
], ActiveSlidesComponent);
exports.ActiveSlidesComponent = ActiveSlidesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNsaWRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUc7QUFDekcsK0ZBQTZGO0FBUTdGLElBQWEscUJBQXFCO0lBTmxDO1FBUW1CLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztJQVlyRCxDQUFDO0lBVEMsMkNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsK0NBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx3Q0FBd0M7SUFDbkYsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFiVTtJQUFSLFlBQUssRUFBRTs7bURBQW9CO0FBQ2xCO0lBQVQsYUFBTSxFQUFFOztxREFBMEM7QUFDNUI7SUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7OEJBQVMsa0NBQWU7cURBQUM7QUFIcEMscUJBQXFCO0lBTmpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7S0FDNUIsQ0FBQztHQUNXLHFCQUFxQixDQWNqQztBQWRZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTbGlkZXNDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LXNsaWRlcy9zbGlkZXMvYXBwL3NsaWRlcy9zbGlkZXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFjdGl2ZS1zbGlkZXNcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9zbGlkZXMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3NsaWRlcy5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZVNsaWRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBhbnlbXTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlc0VsJykgc2xpZGVzOiBTbGlkZXNDb21wb25lbnQ7XG5cbiAgY3JlYXRlQ3ljbGUoKSB7XG4gICAgdGhpcy5jcmVhdGUuZW1pdCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5zbGlkZXMuR29Ub1NsaWRlKHRoaXMuZGF0YS5sZW5ndGgpOyAvLyBTd2l0Y2ggdG8gdGhlIGxhc3QgYWRkZWQgYWN0aXZlIHNsaWRlXG4gIH1cbn1cbiJdfQ==