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
    CyclesService.prototype.add_category = function (amount, _a) {
        var id = _a.id, name = _a.name;
        var category_id = id, value = toRound_1.default(amount), money = toLocaleString_1.default(value);
        return {
            id: random_1.uniq(32),
            name: name,
            category_id: category_id,
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
        return Observable_1.Observable.of(1).map(function (i) {
            var data = [];
            var id = random_1.rand2();
            for (i; i > 0; i--) {
                var expense = _this.format(random_1.rand());
                var budget = _this.format(random_1.rand());
                var balance = _this.format(budget.value - expense.value);
                var progress = toRound_1.default(expense.value / budget.value, 1) * 100;
                var categories = [];
                for (var j = 1; j > 0; j--) {
                    var id_2 = toRound_1.default(random_1.rand2()), name_1 = 'Category_' + id_2, value = toRound_1.default(random_1.rand()), money = toLocaleString_1.default(value);
                    categories.push({ id: id_2, name: name_1, value: value, money: money, created: new Date() });
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjeWNsZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw4Q0FBNkM7QUFDN0MsbUJBQWlCO0FBSWpCLDBEQUFxRDtBQUNyRCw0Q0FBcUM7QUFDckMsMENBQW9EO0FBQ3ZDLFFBQUEsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUd4QixJQUFhLGFBQWE7SUFBMUI7SUEyREEsQ0FBQztJQXpEQyw2QkFBSyxHQUFMO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsTUFBTSxFQUFFLEVBQStCO1lBQTdCLFVBQUUsRUFBRSxjQUFJO1FBQzdCLElBQU0sV0FBVyxHQUFHLEVBQUUsRUFBRSxLQUFLLEdBQUcsaUJBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEdBQUcsd0JBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RSxNQUFNLENBQTBCO1lBQzlCLEVBQUUsRUFBRSxhQUFJLENBQUMsRUFBRSxDQUFDO1lBQ1osSUFBSSxNQUFBO1lBQ0osV0FBVyxhQUFBO1lBQ1gsS0FBSyxPQUFBO1lBQ0wsS0FBSyxPQUFBO1lBQ0wsT0FBTyxFQUFFLElBQUksSUFBSTtTQUNsQixDQUFDO0lBQ0osQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxFQUFVO1lBQVIsa0JBQU07UUFDYixNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQWM7WUFDaEMsRUFBRSxFQUFFLGNBQUssRUFBRTtZQUNYLElBQUksY0FBQTtZQUNKLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxFQUFFLENBQUM7WUFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDNUIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUMzQixPQUFPLEVBQUUsSUFBSSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sS0FBSztRQUNWLElBQU0sS0FBSyxHQUFHLGlCQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxHQUFHLHdCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsNkJBQUssR0FBTCxVQUFNLE1BQU07UUFBWixpQkFzQkM7UUFyQkMsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7WUFDM0IsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQU0sRUFBRSxHQUFHLGNBQUssRUFBRSxDQUFDO1lBRW5CLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ25CLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDcEMsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQyxJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxRCxJQUFNLFFBQVEsR0FBRyxpQkFBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQzVELElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFFdEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDM0IsSUFBTSxJQUFJLEdBQUcsaUJBQUssQ0FBQyxjQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQUksR0FBRyxXQUFXLEdBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxpQkFBSyxDQUFDLGFBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLHdCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNHLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksUUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDekUsQ0FBQztnQkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsSUFBSSxjQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM3RixDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQTNEWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7R0FDQSxhQUFhLENBMkR6QjtBQTNEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCBcInJ4anMvUnhcIjtcbmltcG9ydCB7IEN5Y2xlc01vZGVsLCBDeWNsZXNDYXRlZ29yeUludGVyZmFjZSB9IGZyb20gJy4uL21vZGVscy9jeWNsZS5tb2RlbCc7XG5pbXBvcnQgeyBDYXRlZ29yeUludGVyZmFjZSB9IGZyb20gJy4uL21vZGVscy9jYXRlZ29yeS5tb2RlbCc7XG5cbmltcG9ydCB0b0xvY2FsZVN0cmluZyBmcm9tICcuLi91dGlscy90b0xvY2FsZVN0cmluZyc7XG5pbXBvcnQgcm91bmQgZnJvbSAnLi4vdXRpbHMvdG9Sb3VuZCc7XG5pbXBvcnQgeyByYW5kLCByYW5kMiwgdW5pcSB9IGZyb20gJy4uL3V0aWxzL3JhbmRvbSc7XG5leHBvcnQgY29uc3Qgc2lnbiA9ICfigqYnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3ljbGVzU2VydmljZSB7XG5cbiAgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGFkZF9jYXRlZ29yeShhbW91bnQsIHsgaWQsIG5hbWUgfTogQ2F0ZWdvcnlJbnRlcmZhY2UpIHtcbiAgICBjb25zdCBjYXRlZ29yeV9pZCA9IGlkLCB2YWx1ZSA9IHJvdW5kKGFtb3VudCksIG1vbmV5ID0gdG9Mb2NhbGVTdHJpbmcodmFsdWUpO1xuICAgIHJldHVybiA8Q3ljbGVzQ2F0ZWdvcnlJbnRlcmZhY2U+e1xuICAgICAgaWQ6IHVuaXEoMzIpLFxuICAgICAgbmFtZSxcbiAgICAgIGNhdGVnb3J5X2lkLFxuICAgICAgdmFsdWUsXG4gICAgICBtb25leSxcbiAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZSh7IGJ1ZGdldCB9KTogT2JzZXJ2YWJsZTxDeWNsZXNNb2RlbD4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKDxDeWNsZXNNb2RlbD57XG4gICAgICBpZDogcmFuZDIoKSxcbiAgICAgIHNpZ24sXG4gICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgYmFsYW5jZTogdGhpcy5mb3JtYXQoYnVkZ2V0KSxcbiAgICAgIGV4cGVuc2U6IHRoaXMuZm9ybWF0KDApLFxuICAgICAgYnVkZ2V0OiB0aGlzLmZvcm1hdChidWRnZXQpLFxuICAgICAgY3JlYXRlZDogbmV3IERhdGVcbiAgICB9KTtcbiAgfVxuXG4gIGZvcm1hdChpbnB1dCkge1xuICAgIGNvbnN0IHZhbHVlID0gcm91bmQoaW5wdXQpLCBtb25leSA9IHRvTG9jYWxlU3RyaW5nKHZhbHVlKTtcbiAgICByZXR1cm4geyB2YWx1ZSwgbW9uZXkgfTtcbiAgfVxuXG4gIGZldGNoKHBhcmFtcyk6IE9ic2VydmFibGU8Q3ljbGVzTW9kZWxbXT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKDEpLm1hcChpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICAgIGNvbnN0IGlkID0gcmFuZDIoKTtcblxuICAgICAgZm9yIChpOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGV4cGVuc2UgPSB0aGlzLmZvcm1hdChyYW5kKCkpO1xuICAgICAgICBjb25zdCBidWRnZXQgPSB0aGlzLmZvcm1hdChyYW5kKCkpO1xuICAgICAgICBjb25zdCBiYWxhbmNlID0gdGhpcy5mb3JtYXQoYnVkZ2V0LnZhbHVlIC0gZXhwZW5zZS52YWx1ZSk7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gcm91bmQoZXhwZW5zZS52YWx1ZS9idWRnZXQudmFsdWUsIDEpICogMTAwO1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPiAwOyBqLS0pIHtcbiAgICAgICAgICBjb25zdCBpZF8yID0gcm91bmQocmFuZDIoKSksIG5hbWUgPSAnQ2F0ZWdvcnlfJytpZF8yLCB2YWx1ZSA9IHJvdW5kKHJhbmQoKSksIG1vbmV5ID0gdG9Mb2NhbGVTdHJpbmcodmFsdWUpO1xuICAgICAgICAgIGNhdGVnb3JpZXMucHVzaCh7IGlkOiBpZF8yLCBuYW1lLCB2YWx1ZSwgbW9uZXksIGNyZWF0ZWQ6IG5ldyBEYXRlKCkgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLnB1c2goeyBpZCwgc2lnbiwgYmFsYW5jZSwgcHJvZ3Jlc3MsIGNhdGVnb3JpZXMsIGV4cGVuc2UsIGJ1ZGdldCwgY3JlYXRlZDogbmV3IERhdGUgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pXG4gIH1cbn1cbiJdfQ==