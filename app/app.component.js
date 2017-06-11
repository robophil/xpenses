"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var router_1 = require("@angular/router");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
require("rxjs/add/operator/map");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var AppComponent = (function () {
    function AppComponent(fonticon, zone, route, router) {
        this.fonticon = fonticon;
        this.zone = zone;
        this.route = route;
        this.router = router;
        this.isShowMenu = true;
        this.isShowTop = false;
        this.currentPage = 'active';
        this.route.paramMap.subscribe(function (x) {
            console.dir(x);
        });
        // this.router.isActive
    }
    AppComponent.prototype.goTo = function (page) {
        console.log('page:' + page);
        // this.router.navigate(['/'+page], { replaceUrl: false });
        // this.router.navigate(['/'+page], { replaceUrl: true });
    };
    AppComponent.prototype.showMenu = function () {
        this.isShowMenu = !this.isShowMenu;
    };
    AppComponent.prototype.isActivePage = function (page) {
        return page.toLowerCase() === this.currentPage.toLowerCase();
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "./app.component.html",
        styleUrls: ['./app.css'],
        animations: [
            animations_1.trigger('slideUp', [
                animations_1.state('active', animations_1.style({ opacity: 1, transform: 'translateY(0%)', height: '*' })),
                animations_1.state('inactive', animations_1.style({ opacity: 0, transform: 'translateY(100%)', height: 0 })),
                animations_1.transition('active <=> inactive', [animations_1.animate('750ms cubic-bezier(0.44, 1.49, 1, 1)')]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [nativescript_ngx_fonticon_1.TNSFontIconService,
        core_1.NgZone,
        router_1.ActivatedRoute,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUY7QUFDakYsa0RBQWlGO0FBQ2pGLDBDQUF5RDtBQUd6RCwwRUFBd0U7QUFDeEUsdUVBQStEO0FBRy9ELGlDQUErQjtBQUMvQixrQ0FBZ0M7QUFDaEMsZ0NBQThCO0FBRTlCLGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUM3RSxrQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsR0FBRyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7QUFlL0UsSUFBYSxZQUFZO0lBTXZCLHNCQUNVLFFBQTRCLEVBQzVCLElBQVksRUFDWixLQUFxQixFQUNyQixNQUFjO1FBSGQsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSaEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGdCQUFXLEdBQVcsUUFBUSxDQUFDO1FBUW5DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNoQixDQUFDLENBQUMsQ0FBQTtRQUNGLHVCQUF1QjtJQUN6QixDQUFDO0lBRUgsMkJBQUksR0FBSixVQUFLLElBQVk7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM1QiwyREFBMkQ7UUFDM0QsMERBQTBEO0lBQzVELENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxJQUFZO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsK0JBQVEsR0FBUjtJQUNBLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksWUFBWTtJQVp4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDeEIsVUFBVSxFQUFFO1lBQ1Ysb0JBQU8sQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLGtCQUFLLENBQUMsUUFBUSxFQUFFLGtCQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDaEYsa0JBQUssQ0FBQyxVQUFVLEVBQUUsa0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRix1QkFBVSxDQUFDLHFCQUFxQixFQUFFLENBQUMsb0JBQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7YUFDckYsQ0FBQztTQUNIO0tBQ0YsQ0FBQztxQ0FRb0IsOENBQWtCO1FBQ3RCLGFBQU07UUFDTCx1QkFBYztRQUNiLGVBQU07R0FWYixZQUFZLENBa0N4QjtBQWxDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBzdGF0ZSwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgeyBTbGlkZVVwRG93biB9IGZyb20gJy4vYW5pbWF0aW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3KTtcbnJlZ2lzdGVyRWxlbWVudChcIkZhYlwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uXCIpLkZhYik7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFsnLi9hcHAuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzbGlkZVVwJywgW1xuICAgICAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknLCBoZWlnaHQ6ICcqJyB9KSksXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknLCBoZWlnaHQ6IDAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlIDw9PiBpbmFjdGl2ZScsIFthbmltYXRlKCc3NTBtcyBjdWJpYy1iZXppZXIoMC40NCwgMS40OSwgMSwgMSknKV0pLFxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBwYWdlOiBQYWdlO1xuICBwcml2YXRlIGlzU2hvd01lbnU6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIGlzU2hvd1RvcDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGN1cnJlbnRQYWdlOiBzdHJpbmcgPSAnYWN0aXZlJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICApIHtcbiAgICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICBjb25zb2xlLmRpcih4KVxuICAgICAgfSlcbiAgICAgIC8vIHRoaXMucm91dGVyLmlzQWN0aXZlXG4gICAgfVxuXG4gIGdvVG8ocGFnZTogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coJ3BhZ2U6JyArIHBhZ2UpO1xuICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLycrcGFnZV0sIHsgcmVwbGFjZVVybDogZmFsc2UgfSk7XG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJytwYWdlXSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pO1xuICB9XG5cbiAgc2hvd01lbnUoKSB7XG4gICAgdGhpcy5pc1Nob3dNZW51ID0gIXRoaXMuaXNTaG93TWVudTtcbiAgfVxuXG4gIGlzQWN0aXZlUGFnZShwYWdlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcGFnZS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLmN1cnJlbnRQYWdlLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIl19