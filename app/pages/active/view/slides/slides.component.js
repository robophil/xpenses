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
    ActiveSlidesComponent.prototype.ngOnInit = function () {
        this.count = this.data.length;
        // Add create button Before
        // this.data.unshift({});
        // Add create button After
        // if(this.data.length) {
        //   this.data.push({});
        // }
    };
    ActiveSlidesComponent.prototype.ngAfterViewInit = function () {
        // if(this.count)
        //   this.slides.GoToSlide(0);
        // this.slides.GoToSlide(this.data.length-2); // Switch to the last added active slide
    };
    return ActiveSlidesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ActiveSlidesComponent.prototype, "data", void 0);
__decorate([
    core_1.ViewChild('slidesEl'),
    __metadata("design:type", slides_component_1.SlidesComponent)
], ActiveSlidesComponent.prototype, "slides", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ActiveSlidesComponent.prototype, "create", void 0);
ActiveSlidesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "active-slides",
        templateUrl: "./slides.component.html",
        styleUrls: ["./slides.css"],
    })
], ActiveSlidesComponent);
exports.ActiveSlidesComponent = ActiveSlidesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNsaWRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUc7QUFDekcsK0ZBQTZGO0FBUTdGLElBQWEscUJBQXFCO0lBTmxDO1FBU21CLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztJQXNCckQsQ0FBQztJQW5CQywyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsMkJBQTJCO1FBQzNCLHlCQUF5QjtRQUN6QiwwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QixJQUFJO0lBQ04sQ0FBQztJQUVELCtDQUFlLEdBQWY7UUFDRSxpQkFBaUI7UUFDakIsOEJBQThCO1FBQzlCLHNGQUFzRjtJQUN4RixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDO0FBeEJVO0lBQVIsWUFBSyxFQUFFOzttREFBb0I7QUFDTDtJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBUyxrQ0FBZTtxREFBQztBQUNyQztJQUFULGFBQU0sRUFBRTs7cURBQTBDO0FBSHhDLHFCQUFxQjtJQU5qQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO0tBQzVCLENBQUM7R0FDVyxxQkFBcUIsQ0F5QmpDO0FBekJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTbGlkZXNDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LXNsaWRlcy9zbGlkZXMvYXBwL3NsaWRlcy9zbGlkZXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFjdGl2ZS1zbGlkZXNcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9zbGlkZXMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3NsaWRlcy5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZVNsaWRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBhbnlbXTtcbiAgQFZpZXdDaGlsZCgnc2xpZGVzRWwnKSBzbGlkZXM6IFNsaWRlc0NvbXBvbmVudDtcbiAgQE91dHB1dCgpIHB1YmxpYyBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIGNvdW50OiBudW1iZXI7XG5cbiAgY3JlYXRlQ3ljbGUoKSB7XG4gICAgdGhpcy5jcmVhdGUuZW1pdCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb3VudCA9IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgLy8gQWRkIGNyZWF0ZSBidXR0b24gQmVmb3JlXG4gICAgLy8gdGhpcy5kYXRhLnVuc2hpZnQoe30pO1xuICAgIC8vIEFkZCBjcmVhdGUgYnV0dG9uIEFmdGVyXG4gICAgLy8gaWYodGhpcy5kYXRhLmxlbmd0aCkge1xuICAgIC8vICAgdGhpcy5kYXRhLnB1c2goe30pO1xuICAgIC8vIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBpZih0aGlzLmNvdW50KVxuICAgIC8vICAgdGhpcy5zbGlkZXMuR29Ub1NsaWRlKDApO1xuICAgIC8vIHRoaXMuc2xpZGVzLkdvVG9TbGlkZSh0aGlzLmRhdGEubGVuZ3RoLTIpOyAvLyBTd2l0Y2ggdG8gdGhlIGxhc3QgYWRkZWQgYWN0aXZlIHNsaWRlXG4gIH1cbn1cbiJdfQ==