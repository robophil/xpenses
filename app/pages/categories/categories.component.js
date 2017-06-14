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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRjtBQUNqRiw4Q0FBNkM7QUFZN0MsSUFBYSxtQkFBbUI7SUFJOUIsNkJBQ1UsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFFdEIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEVBQUU7WUFDbkMsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRWhCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQ3RCLElBQU0sS0FBSyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztZQUMzQixDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFBO1FBQ0YsMkJBQTJCO1FBQzNCLGdCQUFnQjtJQUNsQixDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLEtBQUs7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCx1Q0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVILDBCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQXJDWSxtQkFBbUI7SUFOL0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO0tBQ2hDLENBQUM7cUNBTWdCLGFBQU07R0FMWCxtQkFBbUIsQ0FxQy9CO0FBckNZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6IFwiY2F0ZWdvcmllc1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2F0ZWdvcmllcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jYXRlZ29yaWVzLmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgcGFnZTogUGFnZTtcclxuICBwdWJsaWMgZGF0YSQ6IE9ic2VydmFibGU8eyBpZDogYW55LCB2YWx1ZTogc3RyaW5nIH1bXT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLmRhdGEkID0gT2JzZXJ2YWJsZS5vZigxMCkubWFwKGlkID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG5cclxuICAgICAgZm9yIChpZDsgaWQgPiAwOyBpZC0tKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAnQ2F0ZWdvcnkgJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBkYXRhLnB1c2goeyBpZCwgdmFsdWUgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC8vIC5kbyh4ID0+IGNvbnNvbGUuZGlyKHgpKVxyXG4gICAgLy8gLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkZWQoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkxvYWRlZCcpO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtTG9hZGluZyhldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coJ29uSXRlbUxvYWRpbmcnKTtcclxuICB9XHJcblxyXG4gIG9uSXRlbVRhcChldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coJ29uSXRlbVRhcCcpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19