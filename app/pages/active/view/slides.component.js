"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var slides_component_1 = require("nativescript-ngx-slides/slides/app/slides/slides.component");
var ActiveSlidesComponent = (function () {
    function ActiveSlidesComponent() {
        this.create = new core_1.EventEmitter();
        this.open = new core_1.EventEmitter();
    }
    ActiveSlidesComponent.prototype.openCycle = function () {
        this.open.emit();
    };
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
    core_1.Output(),
    __metadata("design:type", Object)
], ActiveSlidesComponent.prototype, "open", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNsaWRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUc7QUFDekcsK0ZBQTZGO0FBUTdGLElBQWEscUJBQXFCO0lBTmxDO1FBUW1CLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztRQUNsQyxTQUFJLEdBQUcsSUFBSSxtQkFBWSxFQUFRLENBQUM7SUFnQm5ELENBQUM7SUFiQyx5Q0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsK0NBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx3Q0FBd0M7SUFDbkYsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQWxCVTtJQUFSLFlBQUssRUFBRTs7bURBQW9CO0FBQ2xCO0lBQVQsYUFBTSxFQUFFOztxREFBMEM7QUFDekM7SUFBVCxhQUFNLEVBQUU7O21EQUF3QztBQUMxQjtJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBUyxrQ0FBZTtxREFBQztBQUpwQyxxQkFBcUI7SUFOakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztLQUM1QixDQUFDO0dBQ1cscUJBQXFCLENBbUJqQztBQW5CWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2xpZGVzQ29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1zbGlkZXMvc2xpZGVzL2FwcC9zbGlkZXMvc2xpZGVzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhY3RpdmUtc2xpZGVzXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc2xpZGVzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zbGlkZXMuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVTbGlkZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBwdWJsaWMgZGF0YTogYW55W107XG4gIEBPdXRwdXQoKSBwdWJsaWMgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlc0VsJykgc2xpZGVzOiBTbGlkZXNDb21wb25lbnQ7XG5cbiAgb3BlbkN5Y2xlKCkge1xuICAgIHRoaXMub3Blbi5lbWl0KCk7XG4gIH1cblxuICBjcmVhdGVDeWNsZSgpIHtcbiAgICB0aGlzLmNyZWF0ZS5lbWl0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnNsaWRlcy5Hb1RvU2xpZGUodGhpcy5kYXRhLmxlbmd0aCk7IC8vIFN3aXRjaCB0byB0aGUgbGFzdCBhZGRlZCBhY3RpdmUgc2xpZGVcbiAgfVxufVxuIl19