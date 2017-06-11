"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var CategoriesComponent = (function () {
    function CategoriesComponent(zone) {
        this.zone = zone;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.data$ = Observable_1.Observable.of(10).map(function (id) {
            var data = [];
            for (id; id > 0; id--) {
                var value = 'Category ' + Math.floor(Math.random() * 10);
                data.push({ id: id, value: value });
            }
            return data;
        });
        // .do(x => console.dir(x))
        // .subscribe();
    };
    CategoriesComponent.prototype.onLoaded = function (event) {
        console.log('onLoaded');
    };
    CategoriesComponent.prototype.onItemLoading = function (event) {
        console.log('onItemLoading');
    };
    CategoriesComponent.prototype.onItemTap = function (event) {
        console.log('onItemTap');
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "categories",
        templateUrl: "./categories.component.html",
        styleUrls: ["./categories.css"],
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], CategoriesComponent);
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRjtBQUNqRiw4Q0FBNkM7QUFZN0MsSUFBYSxtQkFBbUI7SUFJOUIsNkJBQ1UsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFFdEIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEVBQUU7WUFDbkMsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRWhCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQ3RCLElBQU0sS0FBSyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztZQUMzQixDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFBO1FBQ0YsMkJBQTJCO1FBQzNCLGdCQUFnQjtJQUNsQixDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLEtBQUs7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCx1Q0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVILDBCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQXJDWSxtQkFBbUI7SUFOL0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO0tBQ2hDLENBQUM7cUNBTWdCLGFBQU07R0FMWCxtQkFBbUIsQ0FxQy9CO0FBckNZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgR2VzdHVyZVR5cGVzLCBTd2lwZUdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSdcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIlxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiY2F0ZWdvcmllc1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NhdGVnb3JpZXMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2NhdGVnb3JpZXMuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBwYWdlOiBQYWdlO1xuICBwdWJsaWMgZGF0YSQ6IE9ic2VydmFibGU8eyBpZDogYW55LCB2YWx1ZTogc3RyaW5nIH1bXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmRhdGEkID0gT2JzZXJ2YWJsZS5vZigxMCkubWFwKGlkID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgICAgZm9yIChpZDsgaWQgPiAwOyBpZC0tKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gJ0NhdGVnb3J5ICcgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGRhdGEucHVzaCh7IGlkLCB2YWx1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgICAvLyAuZG8oeCA9PiBjb25zb2xlLmRpcih4KSlcbiAgICAvLyAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBvbkxvYWRlZChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdvbkxvYWRlZCcpO1xuICB9XG5cbiAgb25JdGVtTG9hZGluZyhldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdvbkl0ZW1Mb2FkaW5nJyk7XG4gIH1cblxuICBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnb25JdGVtVGFwJyk7XG4gIH1cblxufVxuIl19