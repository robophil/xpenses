"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        this.title = "";
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.onSwipe = function (arg) {
        if (arg.direction == 2) {
            this.router.navigateByUrl('main/active');
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUdqRSwwQ0FBeUQ7QUFRekQsSUFBYSxhQUFhO0lBR3hCLHVCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZsQyxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBRTJCLENBQUM7SUFFeEMsZ0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCx1Q0FBZSxHQUFmO0lBQ0MsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxHQUEwQjtRQUNoQyxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ3BCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxxQkFBcUI7UUFDakMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO0tBQ3hCLENBQUM7cUNBSTRCLGVBQU07R0FIdkIsYUFBYSxDQWV6QjtBQWZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gJ3VpL2dlc3R1cmVzJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2hvbWUnLFxuXHR0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaG9tZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgdGl0bGUgPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG5cdG5nT25Jbml0KCkgeyB9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuICB9XG5cbiAgb25Td2lwZShhcmc6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIGlmKGFyZy5kaXJlY3Rpb24gPT0gMikge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnbWFpbi9hY3RpdmUnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==