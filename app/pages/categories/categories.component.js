"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var CategoriesComponent = (function () {
    function CategoriesComponent(zone, router) {
        this.zone = zone;
        this.router = router;
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
    __metadata("design:paramtypes", [core_1.NgZone,
        router_1.Router])
], CategoriesComponent);
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRjtBQUNqRiwwQ0FBeUQ7QUFDekQsOENBQTZDO0FBWTdDLElBQWEsbUJBQW1CO0lBSTlCLDZCQUNVLElBQVksRUFDWixNQUFjO1FBRGQsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFeEIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEVBQUU7WUFDbkMsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRWhCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQ3RCLElBQU0sS0FBSyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztZQUMzQixDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFBO1FBQ0YsMkJBQTJCO1FBQzNCLGdCQUFnQjtJQUNsQixDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLEtBQUs7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCx1Q0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVILDBCQUFDO0FBQUQsQ0FBQyxBQXRDRCxJQXNDQztBQXRDWSxtQkFBbUI7SUFOL0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO0tBQ2hDLENBQUM7cUNBTWdCLGFBQU07UUFDSixlQUFNO0dBTmIsbUJBQW1CLENBc0MvQjtBQXRDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJ1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJjYXRlZ29yaWVzXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2F0ZWdvcmllcy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY2F0ZWdvcmllcy5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHBhZ2U6IFBhZ2U7XG4gIHB1YmxpYyBkYXRhJDogT2JzZXJ2YWJsZTx7IGlkOiBhbnksIHZhbHVlOiBzdHJpbmcgfVtdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5kYXRhJCA9IE9ic2VydmFibGUub2YoMTApLm1hcChpZCA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gW107XG5cbiAgICAgIGZvciAoaWQ7IGlkID4gMDsgaWQtLSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9ICdDYXRlZ29yeSAnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBkYXRhLnB1c2goeyBpZCwgdmFsdWUgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pXG4gICAgLy8gLmRvKHggPT4gY29uc29sZS5kaXIoeCkpXG4gICAgLy8gLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgb25Mb2FkZWQoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnb25Mb2FkZWQnKTtcbiAgfVxuXG4gIG9uSXRlbUxvYWRpbmcoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnb25JdGVtTG9hZGluZycpO1xuICB9XG5cbiAgb25JdGVtVGFwKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ29uSXRlbVRhcCcpO1xuICB9XG5cbn1cbiJdfQ==