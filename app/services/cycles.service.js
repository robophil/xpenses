"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var toLocaleString_1 = require("../utils/toLocaleString");
var toRound_1 = require("../utils/toRound");
var random_1 = require("../utils/random");
exports.sign = '₦';
var CyclesService = (function () {
    function CyclesService() {
    }
    CyclesService.prototype.count = function () {
        return 0;
    };
    CyclesService.prototype.add_category = function (amout, _a) {
        var id = _a.id, name = _a.name;
        var value = toRound_1.default(amout), money = toLocaleString_1.default(value);
        return {
            id: id,
            name: name,
            value: value,
            money: money,
            created: new Date
        };
    };
    CyclesService.prototype.create = function (_a) {
        var budget = _a.budget;
        return Observable_1.Observable.of({
            id: random_1.rand2(),
            sign: exports.sign,
            categories: [],
            progress: 0,
            balance: this.format(budget),
            expense: this.format(0),
            budget: this.format(budget),
            created: new Date
        });
    };
    CyclesService.prototype.format = function (input) {
        var value = toRound_1.default(input), money = toLocaleString_1.default(value);
        return { value: value, money: money };
    };
    CyclesService.prototype.fetch = function (params) {
        var _this = this;
        return Observable_1.Observable.of(3).map(function (i) {
            var data = [];
            var id = random_1.rand2();
            for (i; i > 0; i--) {
                var expense = _this.format(random_1.rand());
                var budget = _this.format(random_1.rand());
                var balance = _this.format(budget.value - expense.value);
                var progress = toRound_1.default(expense.value / budget.value, 1) * 100;
                var categories = [];
                data.push({ id: id, sign: exports.sign, balance: balance, progress: progress, categories: categories, expense: expense, budget: budget, created: new Date });
            }
            return data;
        });
    };
    return CyclesService;
}());
CyclesService = __decorate([
    core_1.Injectable()
], CyclesService);
exports.CyclesService = CyclesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjeWNsZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw4Q0FBNkM7QUFDN0MsbUJBQWlCO0FBSWpCLDBEQUFxRDtBQUNyRCw0Q0FBcUM7QUFDckMsMENBQThDO0FBQ2pDLFFBQUEsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUl4QixJQUFhLGFBQWE7SUFBMUI7SUFxREEsQ0FBQztJQW5EQyw2QkFBSyxHQUFMO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsS0FBSyxFQUFFLEVBQStCO1lBQTdCLFVBQUUsRUFBRSxjQUFJO1FBQzVCLElBQU0sS0FBSyxHQUFHLGlCQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxHQUFHLHdCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUEwQjtZQUM5QixFQUFFLElBQUE7WUFDRixJQUFJLE1BQUE7WUFDSixLQUFLLE9BQUE7WUFDTCxLQUFLLE9BQUE7WUFDTCxPQUFPLEVBQUUsSUFBSSxJQUFJO1NBQ2xCLENBQUM7SUFDSixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEVBQVU7WUFBUixrQkFBTTtRQUNiLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBYztZQUNoQyxFQUFFLEVBQUUsY0FBSyxFQUFFO1lBQ1gsSUFBSSxjQUFBO1lBQ0osVUFBVSxFQUFFLEVBQUU7WUFDZCxRQUFRLEVBQUUsQ0FBQztZQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUM1QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQzNCLE9BQU8sRUFBRSxJQUFJLElBQUk7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxLQUFLO1FBQ1YsSUFBTSxLQUFLLEdBQUcsaUJBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEdBQUcsd0JBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sTUFBTTtRQUFaLGlCQWlCQztRQWhCQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUMzQixJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBTSxFQUFFLEdBQUcsY0FBSyxFQUFFLENBQUM7WUFFbkIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbkIsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQyxJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ25DLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFELElBQU0sUUFBUSxHQUFHLGlCQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDNUQsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsSUFBSSxjQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM3RixDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXJERCxJQXFEQztBQXJEWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7R0FDQSxhQUFhLENBcUR6QjtBQXJEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCBcInJ4anMvUnhcIjtcbmltcG9ydCB7IEN5Y2xlc01vZGVsLCBDeWNsZXNDYXRlZ29yeUludGVyZmFjZSB9IGZyb20gJy4uL21vZGVscy9jeWNsZS5tb2RlbCc7XG5pbXBvcnQgeyBDYXRlZ29yeUludGVyZmFjZSB9IGZyb20gJy4uL21vZGVscy9jYXRlZ29yeS5tb2RlbCc7XG5cbmltcG9ydCB0b0xvY2FsZVN0cmluZyBmcm9tICcuLi91dGlscy90b0xvY2FsZVN0cmluZyc7XG5pbXBvcnQgcm91bmQgZnJvbSAnLi4vdXRpbHMvdG9Sb3VuZCc7XG5pbXBvcnQgeyByYW5kLCByYW5kMiB9IGZyb20gJy4uL3V0aWxzL3JhbmRvbSc7XG5leHBvcnQgY29uc3Qgc2lnbiA9ICfigqYnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDeWNsZXNTZXJ2aWNlIHtcblxuICBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgYWRkX2NhdGVnb3J5KGFtb3V0LCB7IGlkLCBuYW1lIH06IENhdGVnb3J5SW50ZXJmYWNlKSB7XG4gICAgY29uc3QgdmFsdWUgPSByb3VuZChhbW91dCksIG1vbmV5ID0gdG9Mb2NhbGVTdHJpbmcodmFsdWUpO1xuICAgIHJldHVybiA8Q3ljbGVzQ2F0ZWdvcnlJbnRlcmZhY2U+e1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgdmFsdWUsXG4gICAgICBtb25leSxcbiAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZSh7IGJ1ZGdldCB9KTogT2JzZXJ2YWJsZTxDeWNsZXNNb2RlbD4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKDxDeWNsZXNNb2RlbD57XG4gICAgICBpZDogcmFuZDIoKSxcbiAgICAgIHNpZ24sXG4gICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgYmFsYW5jZTogdGhpcy5mb3JtYXQoYnVkZ2V0KSxcbiAgICAgIGV4cGVuc2U6IHRoaXMuZm9ybWF0KDApLFxuICAgICAgYnVkZ2V0OiB0aGlzLmZvcm1hdChidWRnZXQpLFxuICAgICAgY3JlYXRlZDogbmV3IERhdGVcbiAgICB9KTtcbiAgfVxuXG4gIGZvcm1hdChpbnB1dCkge1xuICAgIGNvbnN0IHZhbHVlID0gcm91bmQoaW5wdXQpLCBtb25leSA9IHRvTG9jYWxlU3RyaW5nKHZhbHVlKTtcbiAgICByZXR1cm4geyB2YWx1ZSwgbW9uZXkgfTtcbiAgfVxuXG4gIGZldGNoKHBhcmFtcyk6IE9ic2VydmFibGU8Q3ljbGVzTW9kZWxbXT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKDMpLm1hcChpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICAgIGNvbnN0IGlkID0gcmFuZDIoKTtcblxuICAgICAgZm9yIChpOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGV4cGVuc2UgPSB0aGlzLmZvcm1hdChyYW5kKCkpO1xuICAgICAgICBjb25zdCBidWRnZXQgPSB0aGlzLmZvcm1hdChyYW5kKCkpO1xuICAgICAgICBjb25zdCBiYWxhbmNlID0gdGhpcy5mb3JtYXQoYnVkZ2V0LnZhbHVlIC0gZXhwZW5zZS52YWx1ZSk7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gcm91bmQoZXhwZW5zZS52YWx1ZS9idWRnZXQudmFsdWUsIDEpICogMTAwO1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gW107XG5cbiAgICAgICAgZGF0YS5wdXNoKHsgaWQsIHNpZ24sIGJhbGFuY2UsIHByb2dyZXNzLCBjYXRlZ29yaWVzLCBleHBlbnNlLCBidWRnZXQsIGNyZWF0ZWQ6IG5ldyBEYXRlIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KVxuICB9XG59XG4iXX0=