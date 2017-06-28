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
        return Observable_1.Observable.of(2).map(function (i) {
            var data = [];
            var id = random_1.rand2();
            for (i; i > 0; i--) {
                var expense = _this.format(random_1.rand());
                var budget = _this.format(random_1.rand());
                var balance = _this.format(budget.value - expense.value);
                var progress = toRound_1.default(expense.value / budget.value, 1) * 100;
                var categories = [];
                for (var j = 12; j > 0; j--) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjeWNsZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw4Q0FBNkM7QUFDN0MsbUJBQWlCO0FBR2pCLDBEQUFxRDtBQUNyRCw0Q0FBcUM7QUFDckMsMENBQThDO0FBQ2pDLFFBQUEsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUl4QixJQUFhLGFBQWE7SUFBMUI7SUFnREEsQ0FBQztJQTlDQyw2QkFBSyxHQUFMO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBVTtZQUFSLGtCQUFNO1FBQ2IsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFjO1lBQ2hDLEVBQUUsRUFBRSxjQUFLLEVBQUU7WUFDWCxJQUFJLGNBQUE7WUFDSixVQUFVLEVBQUUsRUFBRTtZQUNkLFFBQVEsRUFBRSxDQUFDO1lBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDM0IsT0FBTyxFQUFFLElBQUksSUFBSTtTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEtBQUs7UUFDVixJQUFNLEtBQUssR0FBRyxpQkFBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssR0FBRyx3QkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDZCQUFLLEdBQUwsVUFBTSxNQUFNO1FBQVosaUJBdUJDO1FBdEJDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO1lBQzNCLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFNLEVBQUUsR0FBRyxjQUFLLEVBQUUsQ0FBQztZQUVuQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNuQixJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3BDLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbkMsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUQsSUFBTSxRQUFRLEdBQUcsaUJBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUU1RCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7Z0JBRXRCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQzVCLElBQU0sSUFBSSxHQUFHLGlCQUFLLENBQUMsY0FBSyxFQUFFLENBQUMsRUFBRSxNQUFJLEdBQUcsV0FBVyxHQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsaUJBQUssQ0FBQyxhQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssR0FBRyx3QkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMzRyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3pFLENBQUM7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBQSxFQUFFLElBQUksY0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFDN0YsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFoREQsSUFnREM7QUFoRFksYUFBYTtJQUR6QixpQkFBVSxFQUFFO0dBQ0EsYUFBYSxDQWdEekI7QUFoRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL1J4XCI7XG5pbXBvcnQgeyBDeWNsZXNNb2RlbCB9IGZyb20gJy4uL21vZGVscy9jeWNsZS5tb2RlbCc7XG5cbmltcG9ydCB0b0xvY2FsZVN0cmluZyBmcm9tICcuLi91dGlscy90b0xvY2FsZVN0cmluZyc7XG5pbXBvcnQgcm91bmQgZnJvbSAnLi4vdXRpbHMvdG9Sb3VuZCc7XG5pbXBvcnQgeyByYW5kLCByYW5kMiB9IGZyb20gJy4uL3V0aWxzL3JhbmRvbSc7XG5leHBvcnQgY29uc3Qgc2lnbiA9ICfigqYnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDeWNsZXNTZXJ2aWNlIHtcblxuICBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY3JlYXRlKHsgYnVkZ2V0IH0pOiBPYnNlcnZhYmxlPEN5Y2xlc01vZGVsPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUub2YoPEN5Y2xlc01vZGVsPntcbiAgICAgIGlkOiByYW5kMigpLFxuICAgICAgc2lnbixcbiAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICBiYWxhbmNlOiB0aGlzLmZvcm1hdChidWRnZXQpLFxuICAgICAgZXhwZW5zZTogdGhpcy5mb3JtYXQoMCksXG4gICAgICBidWRnZXQ6IHRoaXMuZm9ybWF0KGJ1ZGdldCksXG4gICAgICBjcmVhdGVkOiBuZXcgRGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgZm9ybWF0KGlucHV0KSB7XG4gICAgY29uc3QgdmFsdWUgPSByb3VuZChpbnB1dCksIG1vbmV5ID0gdG9Mb2NhbGVTdHJpbmcodmFsdWUpO1xuICAgIHJldHVybiB7IHZhbHVlLCBtb25leSB9O1xuICB9XG5cbiAgZmV0Y2gocGFyYW1zKTogT2JzZXJ2YWJsZTxDeWNsZXNNb2RlbFtdPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUub2YoMikubWFwKGkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IFtdO1xuICAgICAgY29uc3QgaWQgPSByYW5kMigpO1xuXG4gICAgICBmb3IgKGk7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgZXhwZW5zZSA9IHRoaXMuZm9ybWF0KHJhbmQoKSk7XG4gICAgICAgIGNvbnN0IGJ1ZGdldCA9IHRoaXMuZm9ybWF0KHJhbmQoKSk7XG4gICAgICAgIGNvbnN0IGJhbGFuY2UgPSB0aGlzLmZvcm1hdChidWRnZXQudmFsdWUgLSBleHBlbnNlLnZhbHVlKTtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSByb3VuZChleHBlbnNlLnZhbHVlL2J1ZGdldC52YWx1ZSwgMSkgKiAxMDA7XG5cbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAxMjsgaiA+IDA7IGotLSkge1xuICAgICAgICAgIGNvbnN0IGlkXzIgPSByb3VuZChyYW5kMigpKSwgbmFtZSA9ICdDYXRlZ29yeV8nK2lkXzIsIHZhbHVlID0gcm91bmQocmFuZCgpKSwgbW9uZXkgPSB0b0xvY2FsZVN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKHsgaWQ6IGlkXzIsIG5hbWUsIHZhbHVlLCBtb25leSwgY3JlYXRlZDogbmV3IERhdGUoKSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEucHVzaCh7IGlkLCBzaWduLCBiYWxhbmNlLCBwcm9ncmVzcywgY2F0ZWdvcmllcywgZXhwZW5zZSwgYnVkZ2V0LCBjcmVhdGVkOiBuZXcgRGF0ZSB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgfVxufVxuIl19