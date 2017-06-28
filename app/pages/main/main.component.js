"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var store_1 = require("@ngrx/store");
require("rxjs/add/operator/map");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/distinctUntilChanged");
var nativescript_bottombar_1 = require("nativescript-bottombar");
// import * as R from 'nativescript-gradient';
var reducers_1 = require("../../reducers");
var transition = { name: "slide", duration: 300 };
var MainComponent = (function () {
    function MainComponent(store, route, router, nsrouter) {
        var _this = this;
        this.store = store;
        this.route = route;
        this.router = router;
        this.nsrouter = nsrouter;
        this.hidden = false;
        this.titleState = 1 /* ALWAYS_SHOW */;
        this.inactiveColor = '#bbbbbb';
        this.accentColor = '#e91e63';
        this.Subs = [];
        this.pages = [
            "Categories",
            "Expenses",
            "Create",
            "Active",
            "Cycles",
        ];
        this.Subs.push(this.store.let(reducers_1.getCyclesData()).subscribe(function (data) {
            _this.cyclesCount = data && data.length;
        }));
    }
    MainComponent.prototype.ngOnInit = function () {
        this.route.queryParams.subscribe(function (params) {
            // console.log('params');
            // debugger
            // console.dir(params);
        });
        this.router.events
            .subscribe(function (page) {
        });
        this.items = [
            new nativescript_bottombar_1.BottomBarItem(0, this.pages[0], "ic_list_white", "white"),
            new nativescript_bottombar_1.BottomBarItem(1, this.pages[1], "ic_attach_money_white", "white"),
            new nativescript_bottombar_1.BottomBarItem(2, this.pages[2], "ic_add_box_white", "white"),
            new nativescript_bottombar_1.BottomBarItem(3, this.pages[3], "ic_play_circle_outline_white", "white"),
            new nativescript_bottombar_1.BottomBarItem(4, this.pages[4], "ic_history_white", "white"),
        ];
    };
    MainComponent.prototype.tabLoaded = function (event) {
        this._bar = event.object;
        this._bar.selectItem(-2); // Select Page 2 as default page
    };
    MainComponent.prototype.tabSelected = function (args) {
        var page = (this.pages[args.newIndex]).toLowerCase();
        // this._bar.selectItem(args.newIndex);
        if (page == 'create') {
            this.nsrouter.navigateByUrl('/' + page, { transition: transition });
        }
        else {
            this.router.navigateByUrl('/main/' + page, { queryParams: { root: true } });
            // this.router.navigate(['/'+page], { replaceUrl: false });
        }
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.Subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'main',
        templateUrl: 'main.component.html',
        styleUrls: ['main.css']
    }),
    __metadata("design:paramtypes", [store_1.Store,
        router_1.ActivatedRoute,
        router_1.Router,
        router_2.RouterExtensions])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBeUQ7QUFDekQsc0RBQStEO0FBRy9ELHFDQUFvQztBQUNwQyxpQ0FBK0I7QUFDL0Isa0NBQWdDO0FBQ2hDLGdDQUE4QjtBQUM5QixrREFBZ0Q7QUFDaEQsaUVBQTRIO0FBRTVILDhDQUE4QztBQUM5QywyQ0FBeUQ7QUFFekQsSUFBTSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQVFwRCxJQUFhLGFBQWE7SUFrQnhCLHVCQUNVLEtBQXNCLEVBQ3RCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxRQUEwQjtRQUpwQyxpQkFTQztRQVJTLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQXBCN0IsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixlQUFVLEdBQWdCLG1CQUF1QixDQUFDO1FBQ2xELGtCQUFhLEdBQVcsU0FBUyxDQUFDO1FBQ2xDLGdCQUFXLEdBQVcsU0FBUyxDQUFDO1FBRWhDLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBRTFCLFVBQUssR0FBRztZQUNiLFlBQVk7WUFDWixVQUFVO1lBQ1YsUUFBUTtZQUNSLFFBQVE7WUFDUixRQUFRO1NBRVQsQ0FBQztRQVFBLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHdCQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDNUQsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3JDLHlCQUF5QjtZQUN6QixXQUFXO1lBQ1gsdUJBQXVCO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2pCLFNBQVMsQ0FBQyxVQUFDLElBQUk7UUFDaEIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsRUFBRSxPQUFPLENBQUM7WUFDN0QsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixFQUFFLE9BQU8sQ0FBQztZQUNyRSxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxDQUFDO1lBQ2hFLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSw4QkFBOEIsRUFBRSxPQUFPLENBQUM7WUFDNUUsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sQ0FBQztTQUVqRSxDQUFDO0lBRUosQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBYyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7SUFDNUQsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFtQztRQUM3QyxJQUFNLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkQsdUNBQXVDO1FBQ3ZDLEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBQyxJQUFJLEVBQUUsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFDLElBQUksRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDMUUsMkRBQTJEO1FBQzdELENBQUM7SUFDSCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXJFRCxJQXFFQztBQXJFWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDcEIsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHFCQUFxQjtRQUNqQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7S0FDeEIsQ0FBQztxQ0FvQmlCLGFBQUs7UUFDTCx1QkFBYztRQUNiLGVBQU07UUFDSix5QkFBZ0I7R0F0QnpCLGFBQWEsQ0FxRXpCO0FBckVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcbmltcG9ydCB7IEJvdHRvbUJhciwgQm90dG9tQmFySXRlbSwgVElUTEVfU1RBVEUsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBOb3RpZmljYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtYm90dG9tYmFyJztcbmltcG9ydCB7IFN3aXNzQXJteUtuaWZlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXN3aXNzLWFybXkta25pZmUnO1xuLy8gaW1wb3J0ICogYXMgUiBmcm9tICduYXRpdmVzY3JpcHQtZ3JhZGllbnQnO1xuaW1wb3J0IHsgQXBwU3RhdGUsIGdldEN5Y2xlc0RhdGEgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcblxuY29uc3QgdHJhbnNpdGlvbiA9IHsgbmFtZTogXCJzbGlkZVwiLCBkdXJhdGlvbjogMzAwIH07XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ21haW4nLFxuXHR0ZW1wbGF0ZVVybDogJ21haW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbWFpbi5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgX2JhcjogQm90dG9tQmFyO1xuICBwdWJsaWMgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB0aXRsZVN0YXRlOiBUSVRMRV9TVEFURSA9IFRJVExFX1NUQVRFLkFMV0FZU19TSE9XO1xuICBwdWJsaWMgaW5hY3RpdmVDb2xvcjogc3RyaW5nID0gJyNiYmJiYmInO1xuICBwdWJsaWMgYWNjZW50Q29sb3I6IHN0cmluZyA9ICcjZTkxZTYzJztcbiAgcHVibGljIGN5Y2xlc0NvdW50OiBudW1iZXI7XG4gIHB1YmxpYyBTdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwdWJsaWMgaXRlbXM6IEJvdHRvbUJhckl0ZW1bXTtcbiAgcHVibGljIHBhZ2VzID0gW1xuICAgIFwiQ2F0ZWdvcmllc1wiLFxuICAgIFwiRXhwZW5zZXNcIixcbiAgICBcIkNyZWF0ZVwiLFxuICAgIFwiQWN0aXZlXCIsXG4gICAgXCJDeWNsZXNcIixcbiAgICAvLyBcIkluZm9cIixcbiAgXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG5zcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICApIHtcbiAgICB0aGlzLlN1YnMucHVzaCh0aGlzLnN0b3JlLmxldChnZXRDeWNsZXNEYXRhKCkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jeWNsZXNDb3VudCA9IGRhdGEgJiYgZGF0YS5sZW5ndGg7XG4gICAgfSkpXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3BhcmFtcycpO1xuICAgICAgLy8gZGVidWdnZXJcbiAgICAgIC8vIGNvbnNvbGUuZGlyKHBhcmFtcyk7XG4gICAgfSlcblxuICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgIC5zdWJzY3JpYmUoKHBhZ2UpID0+IHtcbiAgICB9KVxuICAgIHRoaXMuaXRlbXMgPSBbXG4gICAgICBuZXcgQm90dG9tQmFySXRlbSgwLCB0aGlzLnBhZ2VzWzBdLCBcImljX2xpc3Rfd2hpdGVcIiwgXCJ3aGl0ZVwiKSxcbiAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDEsIHRoaXMucGFnZXNbMV0sIFwiaWNfYXR0YWNoX21vbmV5X3doaXRlXCIsIFwid2hpdGVcIiksXG4gICAgICBuZXcgQm90dG9tQmFySXRlbSgyLCB0aGlzLnBhZ2VzWzJdLCBcImljX2FkZF9ib3hfd2hpdGVcIiwgXCJ3aGl0ZVwiKSxcbiAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDMsIHRoaXMucGFnZXNbM10sIFwiaWNfcGxheV9jaXJjbGVfb3V0bGluZV93aGl0ZVwiLCBcIndoaXRlXCIpLFxuICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oNCwgdGhpcy5wYWdlc1s0XSwgXCJpY19oaXN0b3J5X3doaXRlXCIsIFwid2hpdGVcIiksXG4gICAgICAvLyBuZXcgQm90dG9tQmFySXRlbSg0LCB0aGlzLnBhZ2VzWzRdLCBcImljX2luZm9fb3V0bGluZV93aGl0ZVwiLCBcIndoaXRlXCIpLFxuICAgIF07XG5cbiAgfVxuXG4gIHRhYkxvYWRlZChldmVudCkge1xuICAgIHRoaXMuX2JhciA9IDxCb3R0b21CYXI+ZXZlbnQub2JqZWN0O1xuICAgIHRoaXMuX2Jhci5zZWxlY3RJdGVtKC0yKTsgLy8gU2VsZWN0IFBhZ2UgMiBhcyBkZWZhdWx0IHBhZ2VcbiAgfVxuXG4gIHRhYlNlbGVjdGVkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9ICh0aGlzLnBhZ2VzW2FyZ3MubmV3SW5kZXhdKS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIHRoaXMuX2Jhci5zZWxlY3RJdGVtKGFyZ3MubmV3SW5kZXgpO1xuICAgIGlmKHBhZ2UgPT0gJ2NyZWF0ZScpIHtcbiAgICAgIHRoaXMubnNyb3V0ZXIubmF2aWdhdGVCeVVybCgnLycrcGFnZSwgeyB0cmFuc2l0aW9uIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbWFpbi8nK3BhZ2UsIHsgcXVlcnlQYXJhbXM6IHsgcm9vdDogdHJ1ZSB9IH0pO1xuICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJytwYWdlXSwgeyByZXBsYWNlVXJsOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLlN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iXX0=