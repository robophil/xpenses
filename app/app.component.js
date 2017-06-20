"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var animations_1 = require("@angular/animations");
var router_1 = require("@angular/router");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
require("rxjs/add/operator/map");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/distinctUntilChanged");
var nativescript_bottombar_1 = require("nativescript-bottombar");
var nativescript_swiss_army_knife_1 = require("nativescript-swiss-army-knife");
// import * as R from 'nativescript-gradient';
var reducers_1 = require("./reducers");
// registerElement('BottomBar', () => BottomBar);
element_registry_1.registerElement('BottomBar', function () { return nativescript_bottombar_1.BottomBar; });
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var AppComponent = (function () {
    function AppComponent(store, fonticon, zone, route, router) {
        var _this = this;
        this.store = store;
        this.fonticon = fonticon;
        this.zone = zone;
        this.route = route;
        this.router = router;
        this.showDebugger = true;
        this.title = "xPenses";
        this.currentPage = 'active';
        this.hidden = false;
        this.titleState = 1 /* ALWAYS_SHOW */;
        this.inactiveColor = '#bbbbbb';
        this.accentColor = '#e91e63';
        this.Subs = [];
        this.pages = [
            "Categories",
            "Expenses",
            "Active",
            "Cycles",
            "Info"
        ];
        this.Subs.push(this.store.let(reducers_1.getCyclesData()).subscribe(function (data) {
            _this.cyclesCount = data && data.length;
        }));
    }
    AppComponent.prototype.ngOnInit = function () {
        this.route.queryParams.subscribe(function (params) {
            // console.log('params');
            // debugger
            // console.dir(params);
        });
        this.router.events
            .map(function (_a) {
            var url = _a.url;
            return url.split('/')[1];
        }).distinctUntilChanged()
            .subscribe(function (page) {
            // console.log('+', page)
            // console.log(x.url)
        });
        this.items = [
            new nativescript_bottombar_1.BottomBarItem(0, this.pages[0], "ic_list_white", "white"),
            new nativescript_bottombar_1.BottomBarItem(1, this.pages[1], "ic_attach_money_white", "white"),
            new nativescript_bottombar_1.BottomBarItem(2, this.pages[2], "ic_play_circle_outline_white", "white", new nativescript_bottombar_1.Notification("white", "#e91e63", '' + this.cyclesCount)),
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
        this.router.navigateByUrl('/' + page, { queryParams: { root: true } });
        // this.router.navigateByUrl('/'+page);
        // this.router.navigate(['/'+page], { replaceUrl: false });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        nativescript_swiss_army_knife_1.SwissArmyKnife.setAndroidStatusBarColor('#a90040');
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.Subs.forEach(function (sub) { return sub.unsubscribe(); });
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
    __metadata("design:paramtypes", [store_1.Store,
        nativescript_ngx_fonticon_1.TNSFontIconService,
        core_1.NgZone,
        router_1.ActivatedRoute,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkc7QUFDM0cscUNBQW9DO0FBRXBDLGtEQUFpRjtBQUNqRiwwQ0FBeUQ7QUFHekQsMEVBQXdFO0FBQ3hFLHVFQUErRDtBQUkvRCxpQ0FBK0I7QUFDL0Isa0NBQWdDO0FBQ2hDLGdDQUE4QjtBQUM5QixrREFBZ0Q7QUFDaEQsaUVBQTRIO0FBQzVILCtFQUErRDtBQUMvRCw4Q0FBOEM7QUFDOUMsdUNBQTJDO0FBRTNDLGlEQUFpRDtBQUNqRCxrQ0FBZSxDQUFDLFdBQVcsRUFBRSxjQUFNLE9BQUEsa0NBQVMsRUFBVCxDQUFTLENBQUMsQ0FBQztBQUM5QyxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usa0NBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0FBaUIvRSxJQUFhLFlBQVk7SUFxQnZCLHNCQUNVLEtBQXNCLEVBQ3RCLFFBQTRCLEVBQzVCLElBQVksRUFDWixLQUFxQixFQUNyQixNQUFjO1FBTHhCLGlCQVVDO1FBVFMsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUF6QmpCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFFakIsZ0JBQVcsR0FBVyxRQUFRLENBQUM7UUFFaEMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixlQUFVLEdBQWdCLG1C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UUFDYixlQUFNO0dBMUJiLFlBQVksQ0E2RXhCO0FBN0VZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IFNsaWRlVXBEb3duIH0gZnJvbSAnLi9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcclxuaW1wb3J0IHsgQm90dG9tQmFyLCBCb3R0b21CYXJJdGVtLCBUSVRMRV9TVEFURSwgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIE5vdGlmaWNhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1ib3R0b21iYXInO1xyXG5pbXBvcnQgeyBTd2lzc0FybXlLbmlmZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zd2lzcy1hcm15LWtuaWZlJztcclxuLy8gaW1wb3J0ICogYXMgUiBmcm9tICduYXRpdmVzY3JpcHQtZ3JhZGllbnQnO1xyXG5pbXBvcnQgeyBnZXRDeWNsZXNEYXRhIH0gZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbi8vIHJlZ2lzdGVyRWxlbWVudCgnQm90dG9tQmFyJywgKCkgPT4gQm90dG9tQmFyKTtcclxucmVnaXN0ZXJFbGVtZW50KCdCb3R0b21CYXInLCAoKSA9PiBCb3R0b21CYXIpO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3KTtcclxucmVnaXN0ZXJFbGVtZW50KFwiRmFiXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b25cIikuRmFiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ3NsaWRlVXAnLCBbXHJcbiAgICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJywgaGVpZ2h0OiAnKicgfSkpLFxyXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScsIGhlaWdodDogJyonIH0pKSxcclxuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJywgaGVpZ2h0OiAwIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbigndm9pZCA8PT4gYWN0aXZlJywgW2FuaW1hdGUoJzc1MG1zIGN1YmljLWJlemllcigwLjQ0LCAxLjQ5LCAxLCAxKScpXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPD0+IGluYWN0aXZlJywgW2FuaW1hdGUoJzc1MG1zIGN1YmljLWJlemllcigwLjQ0LCAxLjQ5LCAxLCAxKScpXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA8PT4gaW5hY3RpdmUnLCBbYW5pbWF0ZSgnNzUwbXMgY3ViaWMtYmV6aWVyKDAuNDQsIDEuNDksIDEsIDEpJyldKSxcclxuICAgIF0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIHB1YmxpYyBzaG93RGVidWdnZXIgPSB0cnVlO1xyXG4gIHB1YmxpYyB0aXRsZSA9IFwieFBlbnNlc1wiO1xyXG4gIHByaXZhdGUgcGFnZTogUGFnZTtcclxuICBwcml2YXRlIGN1cnJlbnRQYWdlOiBzdHJpbmcgPSAnYWN0aXZlJztcclxuICBwdWJsaWMgX2JhcjogQm90dG9tQmFyO1xyXG4gIHB1YmxpYyBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgdGl0bGVTdGF0ZTogVElUTEVfU1RBVEUgPSBUSVRMRV9TVEFURS5BTFdBWVNfU0hPVztcclxuICBwdWJsaWMgaW5hY3RpdmVDb2xvcjogc3RyaW5nID0gJyNiYmJiYmInO1xyXG4gIHB1YmxpYyBhY2NlbnRDb2xvcjogc3RyaW5nID0gJyNlOTFlNjMnO1xyXG4gIHB1YmxpYyBjeWNsZXNDb3VudDogbnVtYmVyO1xyXG4gIHB1YmxpYyBpdGVtczogQm90dG9tQmFySXRlbVtdO1xyXG4gIHB1YmxpYyBTdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG4gIHB1YmxpYyBwYWdlcyA9IFtcclxuICAgIFwiQ2F0ZWdvcmllc1wiLFxyXG4gICAgXCJFeHBlbnNlc1wiLFxyXG4gICAgXCJBY3RpdmVcIixcclxuICAgIFwiQ3ljbGVzXCIsXHJcbiAgICBcIkluZm9cIlxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG4gICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgKSB7XHJcbiAgICB0aGlzLlN1YnMucHVzaCh0aGlzLnN0b3JlLmxldChnZXRDeWNsZXNEYXRhKCkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLmN5Y2xlc0NvdW50ID0gZGF0YSAmJiBkYXRhLmxlbmd0aDtcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygncGFyYW1zJyk7XHJcbiAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgIC8vIGNvbnNvbGUuZGlyKHBhcmFtcyk7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucm91dGVyLmV2ZW50c1xyXG4gICAgLy8gLmRvKCh7IHVybCB9OiBhbnkpID0+IGNvbnNvbGUubG9nKCctJywgdXJsKSlcclxuICAgIC5tYXAoKHsgdXJsIH06IGFueSkgPT4gdXJsLnNwbGl0KCcvJylbMV0pLmRpc3RpbmN0VW50aWxDaGFuZ2VkKClcclxuICAgIC5zdWJzY3JpYmUoKHBhZ2UpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJysnLCBwYWdlKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh4LnVybClcclxuICAgIH0pXHJcbiAgICB0aGlzLml0ZW1zID0gW1xyXG4gICAgICBuZXcgQm90dG9tQmFySXRlbSgwLCB0aGlzLnBhZ2VzWzBdLCBcImljX2xpc3Rfd2hpdGVcIiwgXCJ3aGl0ZVwiKSxcclxuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMSwgdGhpcy5wYWdlc1sxXSwgXCJpY19hdHRhY2hfbW9uZXlfd2hpdGVcIiwgXCJ3aGl0ZVwiKSxcclxuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMiwgdGhpcy5wYWdlc1syXSwgXCJpY19wbGF5X2NpcmNsZV9vdXRsaW5lX3doaXRlXCIsIFwid2hpdGVcIiwgbmV3IE5vdGlmaWNhdGlvbihcIndoaXRlXCIsIFwiI2U5MWU2M1wiLCAnJyt0aGlzLmN5Y2xlc0NvdW50KSksXHJcbiAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDMsIHRoaXMucGFnZXNbM10sIFwiaWNfaGlzdG9yeV93aGl0ZVwiLCBcIndoaXRlXCIpLFxyXG4gICAgICBuZXcgQm90dG9tQmFySXRlbSg0LCB0aGlzLnBhZ2VzWzRdLCBcImljX2luZm9fb3V0bGluZV93aGl0ZVwiLCBcIndoaXRlXCIpLFxyXG4gICAgXTtcclxuXHJcbiAgfVxyXG5cclxuICB0YWJMb2FkZWQoZXZlbnQpIHtcclxuICAgIHRoaXMuX2JhciA9IDxCb3R0b21CYXI+ZXZlbnQub2JqZWN0O1xyXG4gICAgdGhpcy5fYmFyLnNlbGVjdEl0ZW0oMik7IC8vIFNlbGVjdCBQYWdlIDIgYXMgZGVmYXVsdCBwYWdlXHJcbiAgfVxyXG5cclxuICB0YWJTZWxlY3RlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgY29uc3QgcGFnZSA9ICh0aGlzLnBhZ2VzW2FyZ3MubmV3SW5kZXhdKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJytwYWdlLCB7IHF1ZXJ5UGFyYW1zOiB7IHJvb3Q6IHRydWUgfSB9KTtcclxuICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nK3BhZ2UpO1xyXG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJytwYWdlXSwgeyByZXBsYWNlVXJsOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIFN3aXNzQXJteUtuaWZlLnNldEFuZHJvaWRTdGF0dXNCYXJDb2xvcignI2E5MDA0MCcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLlN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=