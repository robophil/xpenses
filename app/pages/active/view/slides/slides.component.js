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
        // Add create button Before
        this.data.unshift({});
        // Add create button After
        if (this.data.length) {
            this.data.push({});
        }
    };
    ActiveSlidesComponent.prototype.ngAfterViewInit = function () {
        this.slides.GoToSlide(this.data.length - 2); // Switch to the last added active slide
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNsaWRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUc7QUFDekcsK0ZBQTZGO0FBUTdGLElBQWEscUJBQXFCO0lBTmxDO1FBU21CLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztJQWtCckQsQ0FBQztJQWhCQywyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QiwwQkFBMEI7UUFDMUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUQsK0NBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsd0NBQXdDO0lBQ3JGLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFwQlU7SUFBUixZQUFLLEVBQUU7O21EQUFvQjtBQUNMO0lBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDOzhCQUFTLGtDQUFlO3FEQUFDO0FBQ3JDO0lBQVQsYUFBTSxFQUFFOztxREFBMEM7QUFIeEMscUJBQXFCO0lBTmpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7S0FDNUIsQ0FBQztHQUNXLHFCQUFxQixDQXFCakM7QUFyQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNsaWRlc0NvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtc2xpZGVzL3NsaWRlcy9hcHAvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYWN0aXZlLXNsaWRlc1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3NsaWRlcy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vc2xpZGVzLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlU2xpZGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcHVibGljIGRhdGE6IGFueVtdO1xuICBAVmlld0NoaWxkKCdzbGlkZXNFbCcpIHNsaWRlczogU2xpZGVzQ29tcG9uZW50O1xuICBAT3V0cHV0KCkgcHVibGljIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjcmVhdGVDeWNsZSgpIHtcbiAgICB0aGlzLmNyZWF0ZS5lbWl0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBBZGQgY3JlYXRlIGJ1dHRvbiBCZWZvcmVcbiAgICB0aGlzLmRhdGEudW5zaGlmdCh7fSk7XG4gICAgLy8gQWRkIGNyZWF0ZSBidXR0b24gQWZ0ZXJcbiAgICBpZih0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRhdGEucHVzaCh7fSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc2xpZGVzLkdvVG9TbGlkZSh0aGlzLmRhdGEubGVuZ3RoLTIpOyAvLyBTd2l0Y2ggdG8gdGhlIGxhc3QgYWRkZWQgYWN0aXZlIHNsaWRlXG4gIH1cbn1cbiJdfQ==