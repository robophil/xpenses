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
var nativescript_swiss_army_knife_1 = require("nativescript-swiss-army-knife");
element_registry_1.registerElement('BottomBar', function () { return nativescript_bottombar_1.BottomBar; });
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var AppComponent = (function () {
    function AppComponent(fonticon, zone, route, router) {
        this.fonticon = fonticon;
        this.zone = zone;
        this.route = route;
        this.router = router;
        this.title = "xPenses";
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
        this.router.navigateByUrl('/' + page, { queryParams: { root: true } });
        // this.router.navigateByUrl('/'+page);
        // this.router.navigate(['/'+page], { replaceUrl: false });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        nativescript_swiss_army_knife_1.SwissArmyKnife.setAndroidStatusBarColor('#a90040');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUY7QUFDakYsa0RBQWlGO0FBQ2pGLDBDQUF5RDtBQUd6RCwwRUFBd0U7QUFDeEUsdUVBQStEO0FBRy9ELGlDQUErQjtBQUMvQixrQ0FBZ0M7QUFDaEMsZ0NBQThCO0FBQzlCLGtEQUFnRDtBQUNoRCxpRUFBNEg7QUFDNUgsK0VBQStEO0FBRS9ELGtDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxrQ0FBUyxFQUFULENBQVMsQ0FBQyxDQUFDO0FBQzlDLGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUM3RSxrQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsR0FBRyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7QUFrQi9FLElBQWEsWUFBWTtJQWtCdkIsc0JBQ1UsUUFBNEIsRUFDNUIsSUFBWSxFQUNaLEtBQXFCLEVBQ3JCLE1BQWM7UUFIZCxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXJCakIsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUVqQixnQkFBVyxHQUFXLFFBQVEsQ0FBQztRQUVoQyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGVBQVUsR0FBZ0IsbUJBQXVCLENBQUM7UUFDbEQsa0JBQWEsR0FBVyxTQUFTLENBQUM7UUFDbEMsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFFaEMsVUFBSyxHQUFHO1lBQ2IsWUFBWTtZQUNaLFVBQVU7WUFDVixRQUFRO1lBQ1IsUUFBUTtZQUNSLE1BQU07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RSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDaEYsa0JBQUssQ0FBQyxVQUFVLEVBQUUsa0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRix1QkFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUMsb0JBQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hGLHVCQUFVLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxvQkFBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztnQkFDbEYsdUJBQVUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLG9CQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO2FBQ3JGLENBQUM7U0FDSDtLQUNGLENBQUM7cUNBb0JvQiw4Q0FBa0I7UUFDdEIsYUFBTTtRQUNMLHVCQUFjO1FBQ2IsZUFBTTtHQXRCYixZQUFZLENBa0V4QjtBQWxFWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBzdGF0ZSwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgeyBTbGlkZVVwRG93biB9IGZyb20gJy4vYW5pbWF0aW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZCc7XG5pbXBvcnQgeyBCb3R0b21CYXIsIEJvdHRvbUJhckl0ZW0sIFRJVExFX1NUQVRFLCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgTm90aWZpY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJvdHRvbWJhcic7XG5pbXBvcnQgeyBTd2lzc0FybXlLbmlmZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zd2lzcy1hcm15LWtuaWZlJztcblxucmVnaXN0ZXJFbGVtZW50KCdCb3R0b21CYXInLCAoKSA9PiBCb3R0b21CYXIpO1xucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XG5yZWdpc3RlckVsZW1lbnQoXCJGYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2xpZGVVcCcsIFtcbiAgICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJywgaGVpZ2h0OiAnKicgfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknLCBoZWlnaHQ6ICcqJyB9KSksXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknLCBoZWlnaHQ6IDAgfSkpLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA8PT4gYWN0aXZlJywgW2FuaW1hdGUoJzc1MG1zIGN1YmljLWJlemllcigwLjQ0LCAxLjQ5LCAxLCAxKScpXSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkIDw9PiBpbmFjdGl2ZScsIFthbmltYXRlKCc3NTBtcyBjdWJpYy1iZXppZXIoMC40NCwgMS40OSwgMSwgMSknKV0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlIDw9PiBpbmFjdGl2ZScsIFthbmltYXRlKCc3NTBtcyBjdWJpYy1iZXppZXIoMC40NCwgMS40OSwgMSwgMSknKV0pLFxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHRpdGxlID0gXCJ4UGVuc2VzXCI7XG4gIHByaXZhdGUgcGFnZTogUGFnZTtcbiAgcHJpdmF0ZSBjdXJyZW50UGFnZTogc3RyaW5nID0gJ2FjdGl2ZSc7XG4gIHB1YmxpYyBfYmFyOiBCb3R0b21CYXI7XG4gIHB1YmxpYyBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHRpdGxlU3RhdGU6IFRJVExFX1NUQVRFID0gVElUTEVfU1RBVEUuQUxXQVlTX1NIT1c7XG4gIHB1YmxpYyBpbmFjdGl2ZUNvbG9yOiBzdHJpbmcgPSAnI2JiYmJiYic7XG4gIHB1YmxpYyBhY2NlbnRDb2xvcjogc3RyaW5nID0gJyNlOTFlNjMnO1xuICBwdWJsaWMgaXRlbXM6IEFycmF5PEJvdHRvbUJhckl0ZW0+O1xuICBwdWJsaWMgcGFnZXMgPSBbXG4gICAgXCJDYXRlZ29yaWVzXCIsXG4gICAgXCJFeHBlbnNlc1wiLFxuICAgIFwiQWN0aXZlXCIsXG4gICAgXCJDeWNsZXNcIixcbiAgICBcIkluZm9cIlxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncGFyYW1zJyk7XG4gICAgICAvLyBkZWJ1Z2dlclxuICAgICAgY29uc29sZS5kaXIocGFyYW1zKTtcbiAgICB9KVxuXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gLmRvKCh7IHVybCB9OiBhbnkpID0+IGNvbnNvbGUubG9nKCctJywgdXJsKSlcbiAgICAubWFwKCh7IHVybCB9OiBhbnkpID0+IHVybC5zcGxpdCgnLycpWzFdKS5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgLnN1YnNjcmliZSgocGFnZSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJysnLCBwYWdlKVxuICAgICAgLy8gY29uc29sZS5sb2coeC51cmwpXG4gICAgfSlcbiAgICB0aGlzLml0ZW1zID0gW1xuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgdGhpcy5wYWdlc1swXSwgXCJpY19saXN0X3doaXRlXCIsIFwid2hpdGVcIiksXG4gICAgICBuZXcgQm90dG9tQmFySXRlbSgxLCB0aGlzLnBhZ2VzWzFdLCBcImljX2F0dGFjaF9tb25leV93aGl0ZVwiLCBcIndoaXRlXCIpLFxuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMiwgdGhpcy5wYWdlc1syXSwgXCJpY19wbGF5X2NpcmNsZV9vdXRsaW5lX3doaXRlXCIsIFwid2hpdGVcIiwgbmV3IE5vdGlmaWNhdGlvbihcIndoaXRlXCIsIFwiI2U5MWU2M1wiLCBcIjFcIikpLFxuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMywgdGhpcy5wYWdlc1szXSwgXCJpY19oaXN0b3J5X3doaXRlXCIsIFwid2hpdGVcIiksXG4gICAgICBuZXcgQm90dG9tQmFySXRlbSg0LCB0aGlzLnBhZ2VzWzRdLCBcImljX2luZm9fb3V0bGluZV93aGl0ZVwiLCBcIndoaXRlXCIpLFxuICAgIF07XG5cbiAgfVxuXG4gIHRhYkxvYWRlZChldmVudCkge1xuICAgIHRoaXMuX2JhciA9IDxCb3R0b21CYXI+ZXZlbnQub2JqZWN0O1xuICAgIHRoaXMuX2Jhci5zZWxlY3RJdGVtKDIpOyAvLyBTZWxlY3QgUGFnZSAyIGFzIGRlZmF1bHQgcGFnZVxuICB9XG5cbiAgdGFiU2VsZWN0ZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gKHRoaXMucGFnZXNbYXJncy5uZXdJbmRleF0pLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gY29uc29sZS5sb2cocGFnZSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycrcGFnZSwgeyBxdWVyeVBhcmFtczogeyByb290OiB0cnVlIH0gfSk7XG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycrcGFnZSk7XG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJytwYWdlXSwgeyByZXBsYWNlVXJsOiBmYWxzZSB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBTd2lzc0FybXlLbmlmZS5zZXRBbmRyb2lkU3RhdHVzQmFyQ29sb3IoJyNhOTAwNDAnKTtcbiAgfVxufVxuIl19