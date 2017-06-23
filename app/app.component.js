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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkc7QUFDM0cscUNBQW9DO0FBRXBDLGtEQUFpRjtBQUNqRiwwQ0FBeUQ7QUFHekQsMEVBQXdFO0FBQ3hFLHVFQUErRDtBQUkvRCxpQ0FBK0I7QUFDL0Isa0NBQWdDO0FBQ2hDLGdDQUE4QjtBQUM5QixrREFBZ0Q7QUFDaEQsaUVBQTRIO0FBQzVILCtFQUErRDtBQUMvRCw4Q0FBOEM7QUFDOUMsdUNBQTJDO0FBRTNDLGtDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxrQ0FBUyxFQUFULENBQVMsQ0FBQyxDQUFDO0FBQzlDLGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUM3RSxrQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsR0FBRyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7QUFpQi9FLElBQWEsWUFBWTtJQXFCdkIsc0JBQ1UsS0FBc0IsRUFDdEIsUUFBNEIsRUFDNUIsSUFBWSxFQUNaLEtBQXFCLEVBQ3JCLE1BQWM7UUFMeEIsaUJBVUM7UUFUUyxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXpCakIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUVqQixnQkFBVyxHQUFXLFFBQVEsQ0FBQztRQUVoQyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGVBQVUsR0FBZ0IsbUJBQXVCLENBQUM7UUFD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QmIsWUFBWSxDQTZFeEI7QUE3RVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgc3RhdGUsIHN0eWxlLCBhbmltYXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSdcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIlxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuaW1wb3J0IHsgU2xpZGVVcERvd24gfSBmcm9tICcuL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xuaW1wb3J0IHsgQm90dG9tQmFyLCBCb3R0b21CYXJJdGVtLCBUSVRMRV9TVEFURSwgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIE5vdGlmaWNhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1ib3R0b21iYXInO1xuaW1wb3J0IHsgU3dpc3NBcm15S25pZmUgfSBmcm9tICduYXRpdmVzY3JpcHQtc3dpc3MtYXJteS1rbmlmZSc7XG4vLyBpbXBvcnQgKiBhcyBSIGZyb20gJ25hdGl2ZXNjcmlwdC1ncmFkaWVudCc7XG5pbXBvcnQgeyBnZXRDeWNsZXNEYXRhIH0gZnJvbSBcIi4vcmVkdWNlcnNcIjtcblxucmVnaXN0ZXJFbGVtZW50KCdCb3R0b21CYXInLCAoKSA9PiBCb3R0b21CYXIpO1xucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XG5yZWdpc3RlckVsZW1lbnQoXCJGYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogWycuL2FwcC5jc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3NsaWRlVXAnLCBbXG4gICAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScsIGhlaWdodDogJyonIH0pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJywgaGVpZ2h0OiAnKicgfSkpLFxuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJywgaGVpZ2h0OiAwIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPD0+IGFjdGl2ZScsIFthbmltYXRlKCc3NTBtcyBjdWJpYy1iZXppZXIoMC40NCwgMS40OSwgMSwgMSknKV0pLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA8PT4gaW5hY3RpdmUnLCBbYW5pbWF0ZSgnNzUwbXMgY3ViaWMtYmV6aWVyKDAuNDQsIDEuNDksIDEsIDEpJyldKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA8PT4gaW5hY3RpdmUnLCBbYW5pbWF0ZSgnNzUwbXMgY3ViaWMtYmV6aWVyKDAuNDQsIDEuNDksIDEsIDEpJyldKSxcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIHNob3dEZWJ1Z2dlciA9IHRydWU7XG4gIHB1YmxpYyB0aXRsZSA9IFwieFBlbnNlc1wiO1xuICBwcml2YXRlIHBhZ2U6IFBhZ2U7XG4gIHByaXZhdGUgY3VycmVudFBhZ2U6IHN0cmluZyA9ICdhY3RpdmUnO1xuICBwdWJsaWMgX2JhcjogQm90dG9tQmFyO1xuICBwdWJsaWMgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB0aXRsZVN0YXRlOiBUSVRMRV9TVEFURSA9IFRJVExFX1NUQVRFLkFMV0FZU19TSE9XO1xuICBwdWJsaWMgaW5hY3RpdmVDb2xvcjogc3RyaW5nID0gJyNiYmJiYmInO1xuICBwdWJsaWMgYWNjZW50Q29sb3I6IHN0cmluZyA9ICcjZTkxZTYzJztcbiAgcHVibGljIGN5Y2xlc0NvdW50OiBudW1iZXI7XG4gIHB1YmxpYyBpdGVtczogQm90dG9tQmFySXRlbVtdO1xuICBwdWJsaWMgU3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHVibGljIHBhZ2VzID0gW1xuICAgIFwiQ2F0ZWdvcmllc1wiLFxuICAgIFwiRXhwZW5zZXNcIixcbiAgICBcIkFjdGl2ZVwiLFxuICAgIFwiQ3ljbGVzXCIsXG4gICAgXCJJbmZvXCJcbiAgXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXG4gICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICkge1xuICAgIHRoaXMuU3Vicy5wdXNoKHRoaXMuc3RvcmUubGV0KGdldEN5Y2xlc0RhdGEoKSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmN5Y2xlc0NvdW50ID0gZGF0YSAmJiBkYXRhLmxlbmd0aDtcbiAgICB9KSlcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygncGFyYW1zJyk7XG4gICAgICAvLyBkZWJ1Z2dlclxuICAgICAgLy8gY29uc29sZS5kaXIocGFyYW1zKTtcbiAgICB9KVxuXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gLmRvKCh7IHVybCB9OiBhbnkpID0+IGNvbnNvbGUubG9nKCctJywgdXJsKSlcbiAgICAubWFwKCh7IHVybCB9OiBhbnkpID0+IHVybC5zcGxpdCgnLycpWzFdKS5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgLnN1YnNjcmliZSgocGFnZSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJysnLCBwYWdlKVxuICAgICAgLy8gY29uc29sZS5sb2coeC51cmwpXG4gICAgfSlcbiAgICB0aGlzLml0ZW1zID0gW1xuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgdGhpcy5wYWdlc1swXSwgXCJpY19saXN0X3doaXRlXCIsIFwid2hpdGVcIiksXG4gICAgICBuZXcgQm90dG9tQmFySXRlbSgxLCB0aGlzLnBhZ2VzWzFdLCBcImljX2F0dGFjaF9tb25leV93aGl0ZVwiLCBcIndoaXRlXCIpLFxuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMiwgdGhpcy5wYWdlc1syXSwgXCJpY19wbGF5X2NpcmNsZV9vdXRsaW5lX3doaXRlXCIsIFwid2hpdGVcIiwgbmV3IE5vdGlmaWNhdGlvbihcIndoaXRlXCIsIFwiI2U5MWU2M1wiLCAnJyt0aGlzLmN5Y2xlc0NvdW50KSksXG4gICAgICBuZXcgQm90dG9tQmFySXRlbSgzLCB0aGlzLnBhZ2VzWzNdLCBcImljX2hpc3Rvcnlfd2hpdGVcIiwgXCJ3aGl0ZVwiKSxcbiAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDQsIHRoaXMucGFnZXNbNF0sIFwiaWNfaW5mb19vdXRsaW5lX3doaXRlXCIsIFwid2hpdGVcIiksXG4gICAgXTtcblxuICB9XG5cbiAgdGFiTG9hZGVkKGV2ZW50KSB7XG4gICAgdGhpcy5fYmFyID0gPEJvdHRvbUJhcj5ldmVudC5vYmplY3Q7XG4gICAgdGhpcy5fYmFyLnNlbGVjdEl0ZW0oMik7IC8vIFNlbGVjdCBQYWdlIDIgYXMgZGVmYXVsdCBwYWdlXG4gIH1cblxuICB0YWJTZWxlY3RlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSAodGhpcy5wYWdlc1thcmdzLm5ld0luZGV4XSkudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwYWdlKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJytwYWdlLCB7IHF1ZXJ5UGFyYW1zOiB7IHJvb3Q6IHRydWUgfSB9KTtcbiAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJytwYWdlKTtcbiAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nK3BhZ2VdLCB7IHJlcGxhY2VVcmw6IGZhbHNlIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIFN3aXNzQXJteUtuaWZlLnNldEFuZHJvaWRTdGF0dXNCYXJDb2xvcignI2E5MDA0MCcpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5TdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgfVxufVxuIl19