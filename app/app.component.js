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
            // debugger
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUY7QUFDakYsa0RBQWlGO0FBQ2pGLDBDQUF5RDtBQUd6RCwwRUFBd0U7QUFDeEUsdUVBQStEO0FBRy9ELGlDQUErQjtBQUMvQixrQ0FBZ0M7QUFDaEMsZ0NBQThCO0FBQzlCLGtEQUFnRDtBQUNoRCxpRUFBNEg7QUFFNUgsa0NBQWUsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLGtDQUFTLEVBQVQsQ0FBUyxDQUFDLENBQUM7QUFDOUMsa0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQzdFLGtDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxHQUFHLEVBQWhELENBQWdELENBQUMsQ0FBQztBQWtCL0UsSUFBYSxZQUFZO0lBaUJ2QixzQkFDVSxRQUE0QixFQUM1QixJQUFZLEVBQ1osS0FBcUIsRUFDckIsTUFBYztRQUhkLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBbkJoQixnQkFBVyxHQUFXLFFBQVEsQ0FBQztRQUVoQyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGVBQVUsR0FBZ0IsbUJBQXVCLENBQUM7UUFDbEQsa0JBQWEsR0FBVyxTQUFTLENBQUM7UUFDbEMsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFFaEMsVUFBSyxHQUFHO1lBQ2IsWUFBWTtZQUNaLFVBQVU7WUFDVixRQUFRO1lBQ1IsUUFBUTtZQUNSLE1BQU07U0FDUCxDQUFDO0lBUUYsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFD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VUFBVSxFQUFFLGtCQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEYsdUJBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLG9CQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRix1QkFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUMsb0JBQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xGLHVCQUFVLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxvQkFBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQzthQUNyRixDQUFDO1NBQ0g7S0FDRixDQUFDO3FDQW1Cb0IsOENBQWtCO1FBQ3RCLGFBQU07UUFDTCx1QkFBYztRQUNiLGVBQU07R0FyQmIsWUFBWSxDQTJEeEI7QUEzRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgc3RhdGUsIHN0eWxlLCBhbmltYXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSdcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIlxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuaW1wb3J0IHsgU2xpZGVVcERvd24gfSBmcm9tICcuL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xuaW1wb3J0IHsgQm90dG9tQmFyLCBCb3R0b21CYXJJdGVtLCBUSVRMRV9TVEFURSwgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIE5vdGlmaWNhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1ib3R0b21iYXInO1xuXG5yZWdpc3RlckVsZW1lbnQoJ0JvdHRvbUJhcicsICgpID0+IEJvdHRvbUJhcik7XG5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3KTtcbnJlZ2lzdGVyRWxlbWVudChcIkZhYlwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uXCIpLkZhYik7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFsnLi9hcHAuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzbGlkZVVwJywgW1xuICAgICAgc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknLCBoZWlnaHQ6ICcqJyB9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScsIGhlaWdodDogJyonIH0pKSxcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScsIGhlaWdodDogMCB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkIDw9PiBhY3RpdmUnLCBbYW5pbWF0ZSgnNzUwbXMgY3ViaWMtYmV6aWVyKDAuNDQsIDEuNDksIDEsIDEpJyldKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPD0+IGluYWN0aXZlJywgW2FuaW1hdGUoJzc1MG1zIGN1YmljLWJlemllcigwLjQ0LCAxLjQ5LCAxLCAxKScpXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPD0+IGluYWN0aXZlJywgW2FuaW1hdGUoJzc1MG1zIGN1YmljLWJlemllcigwLjQ0LCAxLjQ5LCAxLCAxKScpXSksXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHBhZ2U6IFBhZ2U7XG4gIHByaXZhdGUgY3VycmVudFBhZ2U6IHN0cmluZyA9ICdhY3RpdmUnO1xuICBwdWJsaWMgX2JhcjogQm90dG9tQmFyO1xuICBwdWJsaWMgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB0aXRsZVN0YXRlOiBUSVRMRV9TVEFURSA9IFRJVExFX1NUQVRFLkFMV0FZU19TSE9XO1xuICBwdWJsaWMgaW5hY3RpdmVDb2xvcjogc3RyaW5nID0gJyNiYmJiYmInO1xuICBwdWJsaWMgYWNjZW50Q29sb3I6IHN0cmluZyA9ICcjZTkxZTYzJztcbiAgcHVibGljIGl0ZW1zOiBBcnJheTxCb3R0b21CYXJJdGVtPjtcbiAgcHVibGljIHBhZ2VzID0gW1xuICAgIFwiQ2F0ZWdvcmllc1wiLFxuICAgIFwiRXhwZW5zZXNcIixcbiAgICBcIkFjdGl2ZVwiLFxuICAgIFwiQ3ljbGVzXCIsXG4gICAgXCJJbmZvXCJcbiAgXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3BhcmFtcycpO1xuICAgICAgLy8gZGVidWdnZXJcbiAgICAgIGNvbnNvbGUuZGlyKHBhcmFtcyk7XG4gICAgfSlcblxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5tYXAoKHsgdXJsIH06IGFueSkgPT4gdXJsLnNwbGl0KCcvJylbMV0pLmRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAuc3Vic2NyaWJlKChwYWdlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwYWdlKVxuICAgICAgLy8gY29uc29sZS5sb2coeC51cmwpXG4gICAgfSlcbiAgICB0aGlzLml0ZW1zID0gW1xuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgdGhpcy5wYWdlc1swXSwgXCJpY19saXN0X3doaXRlXCIsIFwid2hpdGVcIiksXG4gICAgICBuZXcgQm90dG9tQmFySXRlbSgxLCB0aGlzLnBhZ2VzWzFdLCBcImljX2F0dGFjaF9tb25leV93aGl0ZVwiLCBcIndoaXRlXCIpLFxuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMiwgdGhpcy5wYWdlc1syXSwgXCJpY19wbGF5X2NpcmNsZV9vdXRsaW5lX3doaXRlXCIsIFwid2hpdGVcIiwgbmV3IE5vdGlmaWNhdGlvbihcIndoaXRlXCIsIFwiI2U5MWU2M1wiLCBcIjFcIikpLFxuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMywgdGhpcy5wYWdlc1szXSwgXCJpY19oaXN0b3J5X3doaXRlXCIsIFwid2hpdGVcIiksXG4gICAgICBuZXcgQm90dG9tQmFySXRlbSg0LCB0aGlzLnBhZ2VzWzRdLCBcImljX2luZm9fb3V0bGluZV93aGl0ZVwiLCBcIndoaXRlXCIpLFxuICAgIF07XG5cbiAgfVxuXG4gIHRhYkxvYWRlZChldmVudCkge1xuICAgIHRoaXMuX2JhciA9IDxCb3R0b21CYXI+ZXZlbnQub2JqZWN0O1xuICAgIHRoaXMuX2Jhci5zZWxlY3RJdGVtKDIpOyAvLyBTZWxlY3QgUGFnZSAyIGFzIGRlZmF1bHQgcGFnZVxuICB9XG5cbiAgdGFiU2VsZWN0ZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gKHRoaXMucGFnZXNbYXJncy5uZXdJbmRleF0pLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gY29uc29sZS5sb2cocGFnZSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChwYWdlLCB7IHF1ZXJ5UGFyYW1zOiB7IHJvb3Q6IHRydWUgfSB9KTtcbiAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJytwYWdlKTtcbiAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nK3BhZ2VdLCB7IHJlcGxhY2VVcmw6IGZhbHNlIH0pO1xuICB9XG59XG4iXX0=