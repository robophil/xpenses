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
require("rxjs/add/operator/distinctUntilChanged");
var nativescript_bottombar_1 = require("nativescript-bottombar");
element_registry_1.registerElement('BottomBar', function () { return nativescript_bottombar_1.BottomBar; });
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var AppComponent = (function () {
    function AppComponent(fonticon, zone, route, router) {
        this.fonticon = fonticon;
        this.zone = zone;
        this.route = route;
        this.router = router;
        this.currentPage = 'active';
        this.hidden = false;
        this.titleState = 1 /* ALWAYS_SHOW */;
        this.inactiveColor = '#bbbbbb';
        this.accentColor = '#e91e63';
        this.pages = [
            "Categories",
            "Expenses",
            "Active",
            "Cycles",
            "Info"
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.route.queryParams.subscribe(function (params) {
            console.log('params');
            console.dir(params);
        });
        this.router.events.map(function (_a) {
            var url = _a.url;
            return url.split('/')[1];
        }).distinctUntilChanged()
            .subscribe(function (page) {
            console.log(page);
            // console.log(x.url)
        });
        this.items = [
            new nativescript_bottombar_1.BottomBarItem(0, this.pages[0], "ic_list_white", "white"),
            new nativescript_bottombar_1.BottomBarItem(1, this.pages[1], "ic_attach_money_white", "white"),
            new nativescript_bottombar_1.BottomBarItem(2, this.pages[2], "ic_play_circle_outline_white", "white", new nativescript_bottombar_1.Notification("white", "#e91e63", "1")),
            new nativescript_bottombar_1.BottomBarItem(3, this.pages[3], "ic_history_white", "white"),
            new nativescript_bottombar_1.BottomBarItem(4, this.pages[4], "ic_info_outline_white", "white"),
        ];
    };
    AppComponent.prototype.tabLoaded = function (event) {
        this._bar = event.object;
        this._bar.selectItem(2); // Select Page 2 as default page
    };
    AppComponent.prototype.tabSelected = function (args) {
        var page = (this.pages[args.newIndex]).toLowerCase();
        // console.log(page);
        this.router.navigateByUrl(page, { queryParams: { root: true } });
        // this.router.navigateByUrl('/'+page);
        // this.router.navigate(['/'+page], { replaceUrl: false });
    };
    AppComponent.prototype.showMenu = function () {
        console.log('hey');
        this.hidden = false;
    };
    AppComponent.prototype.isActivePage = function (page) {
        return page.toLowerCase() === this.currentPage.toLowerCase();
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
                animations_1.state('void', animations_1.style({ opacity: 0, transform: 'translateY(100%)', height: '*' })),
                animations_1.state('active', animations_1.style({ opacity: 1, transform: 'translateY(0%)', height: '*' })),
                animations_1.state('inactive', animations_1.style({ opacity: 0, transform: 'translateY(100%)', height: 0 })),
                animations_1.transition('void <=> active', [animations_1.animate('750ms cubic-bezier(0.44, 1.49, 1, 1)')]),
                animations_1.transition('void <=> inactive', [animations_1.animate('750ms cubic-bezier(0.44, 1.49, 1, 1)')]),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUY7QUFDakYsa0RBQWlGO0FBQ2pGLDBDQUF5RDtBQUd6RCwwRUFBd0U7QUFDeEUsdUVBQStEO0FBRy9ELGlDQUErQjtBQUMvQixrQ0FBZ0M7QUFDaEMsZ0NBQThCO0FBQzlCLGtEQUFnRDtBQUNoRCxpRUFBNEg7QUFFNUgsa0NBQWUsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLGtDQUFTLEVBQVQsQ0FBUyxDQUFDLENBQUM7QUFDOUMsa0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQzdFLGtDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxHQUFHLEVBQWhELENBQWdELENBQUMsQ0FBQztBQWtCL0UsSUFBYSxZQUFZO0lBaUJ2QixzQkFDVSxRQUE0QixFQUM1QixJQUFZLEVBQ1osS0FBcUIsRUFDckIsTUFBYztRQUhkLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBbkJoQixnQkFBVyxHQUFXLFFBQVEsQ0FBQztRQUVoQyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGVBQVUsR0FBZ0IsbUJBQXVCLENBQUM7UUFDbEQsa0JBQWEsR0FBVyxTQUFTLENBQUM7UUFDbEMsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFFaEMsVUFBSyxHQUFHO1lBQ2IsWUFBWTtZQUNaLFVBQVU7WUFDVixRQUFRO1lBQ1IsUUFBUTtZQUNSLE1BQU07U0FDUCxDQUFDO0lBUUYsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFD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T0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2hGLGtCQUFLLENBQUMsUUFBUSxFQUFFLGtCQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDaEYsa0JBQUssQ0FBQyxVQUFVLEVBQUUsa0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRix1QkFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUMsb0JBQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hGLHVCQUFVLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxvQkFBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztnQkFDbEYsdUJBQVUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLG9CQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO2FBQ3JGLENBQUM7U0FDSDtLQUNGLENBQUM7cUNBbUJvQiw4Q0FBa0I7UUFDdEIsYUFBTTtRQUNMLHVCQUFjO1FBQ2IsZUFBTTtHQXJCYixZQUFZLENBbUV4QjtBQW5FWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBzdGF0ZSwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgeyBTbGlkZVVwRG93biB9IGZyb20gJy4vYW5pbWF0aW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZCc7XG5pbXBvcnQgeyBCb3R0b21CYXIsIEJvdHRvbUJhckl0ZW0sIFRJVExFX1NUQVRFLCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgTm90aWZpY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJvdHRvbWJhcic7XG5cbnJlZ2lzdGVyRWxlbWVudCgnQm90dG9tQmFyJywgKCkgPT4gQm90dG9tQmFyKTtcbnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xucmVnaXN0ZXJFbGVtZW50KFwiRmFiXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b25cIikuRmFiKTtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogWycuL2FwcC5jc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3NsaWRlVXAnLCBbXG4gICAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScsIGhlaWdodDogJyonIH0pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJywgaGVpZ2h0OiAnKicgfSkpLFxuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJywgaGVpZ2h0OiAwIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPD0+IGFjdGl2ZScsIFthbmltYXRlKCc3NTBtcyBjdWJpYy1iZXppZXIoMC40NCwgMS40OSwgMSwgMSknKV0pLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA8PT4gaW5hY3RpdmUnLCBbYW5pbWF0ZSgnNzUwbXMgY3ViaWMtYmV6aWVyKDAuNDQsIDEuNDksIDEsIDEpJyldKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA8PT4gaW5hY3RpdmUnLCBbYW5pbWF0ZSgnNzUwbXMgY3ViaWMtYmV6aWVyKDAuNDQsIDEuNDksIDEsIDEpJyldKSxcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgcGFnZTogUGFnZTtcbiAgcHJpdmF0ZSBjdXJyZW50UGFnZTogc3RyaW5nID0gJ2FjdGl2ZSc7XG4gIHB1YmxpYyBfYmFyOiBCb3R0b21CYXI7XG4gIHB1YmxpYyBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHRpdGxlU3RhdGU6IFRJVExFX1NUQVRFID0gVElUTEVfU1RBVEUuQUxXQVlTX1NIT1c7XG4gIHB1YmxpYyBpbmFjdGl2ZUNvbG9yOiBzdHJpbmcgPSAnI2JiYmJiYic7XG4gIHB1YmxpYyBhY2NlbnRDb2xvcjogc3RyaW5nID0gJyNlOTFlNjMnO1xuICBwdWJsaWMgaXRlbXM6IEFycmF5PEJvdHRvbUJhckl0ZW0+O1xuICBwdWJsaWMgcGFnZXMgPSBbXG4gICAgXCJDYXRlZ29yaWVzXCIsXG4gICAgXCJFeHBlbnNlc1wiLFxuICAgIFwiQWN0aXZlXCIsXG4gICAgXCJDeWNsZXNcIixcbiAgICBcIkluZm9cIlxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncGFyYW1zJyk7XG4gICAgICBjb25zb2xlLmRpcihwYXJhbXMpO1xuICAgIH0pXG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHMubWFwKCh7IHVybCB9OiBhbnkpID0+IHVybC5zcGxpdCgnLycpWzFdKS5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgLnN1YnNjcmliZSgocGFnZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocGFnZSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKHgudXJsKVxuICAgIH0pXG4gICAgdGhpcy5pdGVtcyA9IFtcbiAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDAsIHRoaXMucGFnZXNbMF0sIFwiaWNfbGlzdF93aGl0ZVwiLCBcIndoaXRlXCIpLFxuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMSwgdGhpcy5wYWdlc1sxXSwgXCJpY19hdHRhY2hfbW9uZXlfd2hpdGVcIiwgXCJ3aGl0ZVwiKSxcbiAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDIsIHRoaXMucGFnZXNbMl0sIFwiaWNfcGxheV9jaXJjbGVfb3V0bGluZV93aGl0ZVwiLCBcIndoaXRlXCIsIG5ldyBOb3RpZmljYXRpb24oXCJ3aGl0ZVwiLCBcIiNlOTFlNjNcIiwgXCIxXCIpKSxcbiAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDMsIHRoaXMucGFnZXNbM10sIFwiaWNfaGlzdG9yeV93aGl0ZVwiLCBcIndoaXRlXCIpLFxuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oNCwgdGhpcy5wYWdlc1s0XSwgXCJpY19pbmZvX291dGxpbmVfd2hpdGVcIiwgXCJ3aGl0ZVwiKSxcbiAgICBdO1xuXG4gIH1cblxuICB0YWJMb2FkZWQoZXZlbnQpIHtcbiAgICB0aGlzLl9iYXIgPSA8Qm90dG9tQmFyPmV2ZW50Lm9iamVjdDtcbiAgICB0aGlzLl9iYXIuc2VsZWN0SXRlbSgyKTsgLy8gU2VsZWN0IFBhZ2UgMiBhcyBkZWZhdWx0IHBhZ2VcbiAgfVxuXG4gIHRhYlNlbGVjdGVkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9ICh0aGlzLnBhZ2VzW2FyZ3MubmV3SW5kZXhdKS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHBhZ2UpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwocGFnZSwgeyBxdWVyeVBhcmFtczogeyByb290OiB0cnVlIH0gfSk7XG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycrcGFnZSk7XG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJytwYWdlXSwgeyByZXBsYWNlVXJsOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHNob3dNZW51KCkge1xuICAgIGNvbnNvbGUubG9nKCdoZXknKTtcbiAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICB9XG5cbiAgaXNBY3RpdmVQYWdlKHBhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBwYWdlLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuY3VycmVudFBhZ2UudG9Mb3dlckNhc2UoKTtcbiAgfVxufVxuIl19