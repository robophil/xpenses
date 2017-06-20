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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkc7QUFDM0cscUNBQW9DO0FBRXBDLGtEQUFpRjtBQUNqRiwwQ0FBeUQ7QUFHekQsMEVBQXdFO0FBQ3hFLHVFQUErRDtBQUkvRCxpQ0FBK0I7QUFDL0Isa0NBQWdDO0FBQ2hDLGdDQUE4QjtBQUM5QixrREFBZ0Q7QUFDaEQsaUVBQTRIO0FBQzVILCtFQUErRDtBQUMvRCw4Q0FBOEM7QUFDOUMsdUNBQTJDO0FBRTNDLGlEQUFpRDtBQUNqRCxrQ0FBZSxDQUFDLFdBQVcsRUFBRSxjQUFNLE9BQUEsa0NBQVMsRUFBVCxDQUFTLENBQUMsQ0FBQztBQUM5QyxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usa0NBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0FBaUIvRSxJQUFhLFlBQVk7SUFxQnZCLHNCQUNVLEtBQXNCLEVBQ3RCLFFBQTRCLEVBQzVCLElBQVksRUFDWixLQUFxQixFQUNyQixNQUFjO1FBTHhCLGlCQVVDO1FBVFMsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUF6QmpCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFFakIsZ0JBQVcsR0FBVyxRQUFRLENBQUM7UUFFaEMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixlQUFVLEdBQWdCLG1C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UUFDYixlQUFNO0dBMUJiLFlBQVksQ0E2RXhCO0FBN0VZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4vcmVkdWNlcnNcIjtcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IFNsaWRlVXBEb3duIH0gZnJvbSAnLi9hbmltYXRpb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcbmltcG9ydCB7IEJvdHRvbUJhciwgQm90dG9tQmFySXRlbSwgVElUTEVfU1RBVEUsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBOb3RpZmljYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtYm90dG9tYmFyJztcbmltcG9ydCB7IFN3aXNzQXJteUtuaWZlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXN3aXNzLWFybXkta25pZmUnO1xuLy8gaW1wb3J0ICogYXMgUiBmcm9tICduYXRpdmVzY3JpcHQtZ3JhZGllbnQnO1xuaW1wb3J0IHsgZ2V0Q3ljbGVzRGF0YSB9IGZyb20gXCIuL3JlZHVjZXJzXCI7XG5cbi8vIHJlZ2lzdGVyRWxlbWVudCgnQm90dG9tQmFyJywgKCkgPT4gQm90dG9tQmFyKTtcbnJlZ2lzdGVyRWxlbWVudCgnQm90dG9tQmFyJywgKCkgPT4gQm90dG9tQmFyKTtcbnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xucmVnaXN0ZXJFbGVtZW50KFwiRmFiXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b25cIikuRmFiKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFsnLi9hcHAuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzbGlkZVVwJywgW1xuICAgICAgc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknLCBoZWlnaHQ6ICcqJyB9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScsIGhlaWdodDogJyonIH0pKSxcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScsIGhlaWdodDogMCB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkIDw9PiBhY3RpdmUnLCBbYW5pbWF0ZSgnNzUwbXMgY3ViaWMtYmV6aWVyKDAuNDQsIDEuNDksIDEsIDEpJyldKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPD0+IGluYWN0aXZlJywgW2FuaW1hdGUoJzc1MG1zIGN1YmljLWJlemllcigwLjQ0LCAxLjQ5LCAxLCAxKScpXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPD0+IGluYWN0aXZlJywgW2FuaW1hdGUoJzc1MG1zIGN1YmljLWJlemllcigwLjQ0LCAxLjQ5LCAxLCAxKScpXSksXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBzaG93RGVidWdnZXIgPSB0cnVlO1xuICBwdWJsaWMgdGl0bGUgPSBcInhQZW5zZXNcIjtcbiAgcHJpdmF0ZSBwYWdlOiBQYWdlO1xuICBwcml2YXRlIGN1cnJlbnRQYWdlOiBzdHJpbmcgPSAnYWN0aXZlJztcbiAgcHVibGljIF9iYXI6IEJvdHRvbUJhcjtcbiAgcHVibGljIGhpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdGl0bGVTdGF0ZTogVElUTEVfU1RBVEUgPSBUSVRMRV9TVEFURS5BTFdBWVNfU0hPVztcbiAgcHVibGljIGluYWN0aXZlQ29sb3I6IHN0cmluZyA9ICcjYmJiYmJiJztcbiAgcHVibGljIGFjY2VudENvbG9yOiBzdHJpbmcgPSAnI2U5MWU2Myc7XG4gIHB1YmxpYyBjeWNsZXNDb3VudDogbnVtYmVyO1xuICBwdWJsaWMgaXRlbXM6IEJvdHRvbUJhckl0ZW1bXTtcbiAgcHVibGljIFN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHB1YmxpYyBwYWdlcyA9IFtcbiAgICBcIkNhdGVnb3JpZXNcIixcbiAgICBcIkV4cGVuc2VzXCIsXG4gICAgXCJBY3RpdmVcIixcbiAgICBcIkN5Y2xlc1wiLFxuICAgIFwiSW5mb1wiXG4gIF07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICApIHtcbiAgICB0aGlzLlN1YnMucHVzaCh0aGlzLnN0b3JlLmxldChnZXRDeWNsZXNEYXRhKCkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jeWNsZXNDb3VudCA9IGRhdGEgJiYgZGF0YS5sZW5ndGg7XG4gICAgfSkpXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3BhcmFtcycpO1xuICAgICAgLy8gZGVidWdnZXJcbiAgICAgIC8vIGNvbnNvbGUuZGlyKHBhcmFtcyk7XG4gICAgfSlcblxuICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgIC8vIC5kbygoeyB1cmwgfTogYW55KSA9PiBjb25zb2xlLmxvZygnLScsIHVybCkpXG4gICAgLm1hcCgoeyB1cmwgfTogYW55KSA9PiB1cmwuc3BsaXQoJy8nKVsxXSkuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgIC5zdWJzY3JpYmUoKHBhZ2UpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcrJywgcGFnZSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKHgudXJsKVxuICAgIH0pXG4gICAgdGhpcy5pdGVtcyA9IFtcbiAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDAsIHRoaXMucGFnZXNbMF0sIFwiaWNfbGlzdF93aGl0ZVwiLCBcIndoaXRlXCIpLFxuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMSwgdGhpcy5wYWdlc1sxXSwgXCJpY19hdHRhY2hfbW9uZXlfd2hpdGVcIiwgXCJ3aGl0ZVwiKSxcbiAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDIsIHRoaXMucGFnZXNbMl0sIFwiaWNfcGxheV9jaXJjbGVfb3V0bGluZV93aGl0ZVwiLCBcIndoaXRlXCIsIG5ldyBOb3RpZmljYXRpb24oXCJ3aGl0ZVwiLCBcIiNlOTFlNjNcIiwgJycrdGhpcy5jeWNsZXNDb3VudCkpLFxuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMywgdGhpcy5wYWdlc1szXSwgXCJpY19oaXN0b3J5X3doaXRlXCIsIFwid2hpdGVcIiksXG4gICAgICBuZXcgQm90dG9tQmFySXRlbSg0LCB0aGlzLnBhZ2VzWzRdLCBcImljX2luZm9fb3V0bGluZV93aGl0ZVwiLCBcIndoaXRlXCIpLFxuICAgIF07XG5cbiAgfVxuXG4gIHRhYkxvYWRlZChldmVudCkge1xuICAgIHRoaXMuX2JhciA9IDxCb3R0b21CYXI+ZXZlbnQub2JqZWN0O1xuICAgIHRoaXMuX2Jhci5zZWxlY3RJdGVtKDIpOyAvLyBTZWxlY3QgUGFnZSAyIGFzIGRlZmF1bHQgcGFnZVxuICB9XG5cbiAgdGFiU2VsZWN0ZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gKHRoaXMucGFnZXNbYXJncy5uZXdJbmRleF0pLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gY29uc29sZS5sb2cocGFnZSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycrcGFnZSwgeyBxdWVyeVBhcmFtczogeyByb290OiB0cnVlIH0gfSk7XG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycrcGFnZSk7XG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJytwYWdlXSwgeyByZXBsYWNlVXJsOiBmYWxzZSB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBTd2lzc0FybXlLbmlmZS5zZXRBbmRyb2lkU3RhdHVzQmFyQ29sb3IoJyNhOTAwNDAnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuU3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gIH1cbn1cbiJdfQ==