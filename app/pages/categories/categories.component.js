"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var CategoriesComponent = (function () {
    function CategoriesComponent(zone) {
        this.zone = zone;
        this.title = "Categories";
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
        // console.log('onLoaded');
    };
    CategoriesComponent.prototype.onItemLoading = function (event) {
        // console.log('onItemLoading');
    };
    CategoriesComponent.prototype.onItemTap = function (event) {
        // console.log('onItemTap');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRjtBQUNqRiw4Q0FBNkM7QUFZN0MsSUFBYSxtQkFBbUI7SUFLOUIsNkJBQ1UsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFMZixVQUFLLEdBQUcsWUFBWSxDQUFDO0lBTzVCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBRUUsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxFQUFFO1lBQ25DLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUVoQixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUN0QixJQUFNLEtBQUssR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQTtRQUNGLDJCQUEyQjtRQUMzQixnQkFBZ0I7SUFDbEIsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osMkJBQTJCO0lBQzdCLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNqQixnQ0FBZ0M7SUFDbEMsQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsNEJBQTRCO0lBQzlCLENBQUM7SUFFSCwwQkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUF0Q1ksbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztLQUNoQyxDQUFDO3FDQU9nQixhQUFNO0dBTlgsbUJBQW1CLENBc0MvQjtBQXRDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImNhdGVnb3JpZXNcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXRlZ29yaWVzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jYXRlZ29yaWVzLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyB0aXRsZSA9IFwiQ2F0ZWdvcmllc1wiO1xuICBwcml2YXRlIHBhZ2U6IFBhZ2U7XG4gIHB1YmxpYyBkYXRhJDogT2JzZXJ2YWJsZTx7IGlkOiBhbnksIHZhbHVlOiBzdHJpbmcgfVtdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuZGF0YSQgPSBPYnNlcnZhYmxlLm9mKDEwKS5tYXAoaWQgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IFtdO1xuXG4gICAgICBmb3IgKGlkOyBpZCA+IDA7IGlkLS0pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAnQ2F0ZWdvcnkgJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgZGF0YS5wdXNoKHsgaWQsIHZhbHVlIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KVxuICAgIC8vIC5kbyh4ID0+IGNvbnNvbGUuZGlyKHgpKVxuICAgIC8vIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG9uTG9hZGVkKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uTG9hZGVkJyk7XG4gIH1cblxuICBvbkl0ZW1Mb2FkaW5nKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uSXRlbUxvYWRpbmcnKTtcbiAgfVxuXG4gIG9uSXRlbVRhcChldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkl0ZW1UYXAnKTtcbiAgfVxuXG59XG4iXX0=