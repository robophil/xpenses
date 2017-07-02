"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var random_1 = require("../utils/random");
var CategoriesService = (function () {
    function CategoriesService() {
    }
    CategoriesService.prototype.count = function () {
        return 0;
    };
    CategoriesService.prototype.create = function (_a) {
        var name = _a.name;
        return Observable_1.Observable.of({
            id: random_1.rand2(),
            name: name,
            created: new Date
        });
    };
    CategoriesService.prototype.fetch = function (params) {
        return Observable_1.Observable.of(1).map(function (i) {
            var data = [];
            for (i; i > 0; i--) {
                var id = random_1.rand2(), name_1 = 'Category ' + id;
                data.push({ id: id, name: name_1 });
            }
            return data;
        });
    };
    return CategoriesService;
}());
CategoriesService = __decorate([
    core_1.Injectable()
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2F0ZWdvcmllcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDhDQUE2QztBQUM3QyxtQkFBaUI7QUFFakIsMENBQXdDO0FBR3hDLElBQWEsaUJBQWlCO0lBQTlCO0lBMEJBLENBQUM7SUF4QkMsaUNBQUssR0FBTDtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0NBQU0sR0FBTixVQUFPLEVBQVE7WUFBTixjQUFJO1FBQ1gsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFrQjtZQUNwQyxFQUFFLEVBQUUsY0FBSyxFQUFFO1lBQ1gsSUFBSSxNQUFBO1lBQ0osT0FBTyxFQUFFLElBQUksSUFBSTtTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQUssR0FBTCxVQUFNLE1BQU07UUFDVixNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUMzQixJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7WUFFaEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbkIsSUFBTSxFQUFFLEdBQUcsY0FBSyxFQUFFLEVBQUUsTUFBSSxHQUFHLFdBQVcsR0FBQyxFQUFFLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUEsRUFBRSxJQUFJLFFBQUEsRUFBRSxDQUFDLENBQUM7WUFDMUIsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksaUJBQWlCO0lBRDdCLGlCQUFVLEVBQUU7R0FDQSxpQkFBaUIsQ0EwQjdCO0FBMUJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCBcInJ4anMvUnhcIjtcbmltcG9ydCB7IENhdGVnb3JpZXNNb2RlbCB9IGZyb20gJy4uL21vZGVscy9jYXRlZ29yeS5tb2RlbCc7XG5pbXBvcnQgeyByYW5kMiB9IGZyb20gJy4uL3V0aWxzL3JhbmRvbSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzU2VydmljZSB7XG5cbiAgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNyZWF0ZSh7IG5hbWUgfSk6IE9ic2VydmFibGU8Q2F0ZWdvcmllc01vZGVsPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUub2YoPENhdGVnb3JpZXNNb2RlbD57XG4gICAgICBpZDogcmFuZDIoKSxcbiAgICAgIG5hbWUsXG4gICAgICBjcmVhdGVkOiBuZXcgRGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgZmV0Y2gocGFyYW1zKTogT2JzZXJ2YWJsZTxDYXRlZ29yaWVzTW9kZWxbXT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKDEpLm1hcChpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgICAgZm9yIChpOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcmFuZDIoKSwgbmFtZSA9ICdDYXRlZ29yeSAnK2lkO1xuICAgICAgICBkYXRhLnB1c2goeyBpZCwgbmFtZSB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgfVxufVxuIl19