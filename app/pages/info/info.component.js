"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var InfoComponent = (function () {
    function InfoComponent(zone, router) {
        this.zone = zone;
        this.router = router;
        this.title = "Info";
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "info",
        templateUrl: "./info.component.html",
        styleUrls: ["./info.css"],
    }),
    __metadata("design:paramtypes", [core_1.NgZone,
        router_1.Router])
], InfoComponent);
exports.InfoComponent = InfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRjtBQUNqRiwwQ0FBeUQ7QUFhekQsSUFBYSxhQUFhO0lBSXhCLHVCQUNVLElBQVksRUFDWixNQUFjO1FBRGQsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMakIsVUFBSyxHQUFHLE1BQU0sQ0FBQztJQU9wQixDQUFDO0lBRUgsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQzFCLENBQUM7cUNBTWdCLGFBQU07UUFDSixlQUFNO0dBTmIsYUFBYSxDQVl6QjtBQVpZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgR2VzdHVyZVR5cGVzLCBTd2lwZUdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSdcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIlxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiaW5mb1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2luZm8uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2luZm8uY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHRpdGxlID0gXCJJbmZvXCI7XG4gIHByaXZhdGUgcGFnZTogUGFnZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICkge1xuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIl19