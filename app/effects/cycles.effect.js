"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var cycles_action_1 = require("../actions/cycles.action");
var cycles_service_1 = require("../services/cycles.service");
var CyclesEffects = (function () {
    function CyclesEffects(store, actions$, cyclesActions, cycles) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.cyclesActions = cyclesActions;
        this.cycles = cycles;
        // Initiate load of all appointments at App boot
        this.boot$ = this.store.take(1)
            .mapTo(this.cyclesActions.init());
        this.init$ = this.actions$
            .ofType(cycles_action_1.CyclesActions.INIT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.cycles.fetch(payload); })
            .map(function (data) { return _this.cyclesActions.init_complete(data); });
        this.create$ = this.actions$
            .ofType(cycles_action_1.CyclesActions.CREATE)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.cycles.create(payload); })
            .map(function (data) { return _this.cyclesActions.create_complete(data); });
        this.add_category$ = this.actions$
            .ofType(cycles_action_1.CyclesActions.ADD_CATEGORY)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            var category = _this.cycles.add_category(payload.amount, payload.category);
            return Observable_1.Observable.of(_this.cyclesActions.add_category_complete(payload.id, category));
        });
    }
    return CyclesEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], CyclesEffects.prototype, "boot$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], CyclesEffects.prototype, "init$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], CyclesEffects.prototype, "create$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], CyclesEffects.prototype, "add_category$", void 0);
CyclesEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        effects_1.Actions,
        cycles_action_1.CyclesActions,
        cycles_service_1.CyclesService])
], CyclesEffects);
exports.CyclesEffects = CyclesEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN5Y2xlcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MscUNBQTRDO0FBQzVDLHlDQUFnRDtBQUNoRCw4Q0FBNkM7QUFFN0MsbUJBQWlCO0FBR2pCLDBEQUF5RDtBQUN6RCw2REFBMkQ7QUFHM0QsSUFBYSxhQUFhO0lBRXhCLHVCQUNVLEtBQXNCLEVBQ3RCLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLE1BQXFCO1FBSi9CLGlCQUtNO1FBSkksVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBRy9CLGdEQUFnRDtRQUN0QyxVQUFLLEdBQXVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNyRCxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBRXpCLFVBQUssR0FBdUIsSUFBSSxDQUFDLFFBQVE7YUFDaEQsTUFBTSxDQUFDLDZCQUFhLENBQUMsSUFBSSxDQUFDO2FBQzFCLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDO2FBQzdCLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUExQixDQUEwQixDQUFDO2FBQ2hELEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLENBQUE7UUFFNUMsWUFBTyxHQUF1QixJQUFJLENBQUMsUUFBUTthQUNsRCxNQUFNLENBQUMsNkJBQWEsQ0FBQyxNQUFNLENBQUM7YUFDNUIsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUM7YUFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQUM7YUFDakQsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQTtRQUU5QyxrQkFBYSxHQUF1QixJQUFJLENBQUMsUUFBUTthQUN4RCxNQUFNLENBQUMsNkJBQWEsQ0FBQyxZQUFZLENBQUM7YUFDbEMsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUM7YUFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNoQixJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RSxNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDdEYsQ0FBQyxDQUFDLENBQUE7SUF4QkMsQ0FBQztJQXlCUixvQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUF0Qlc7SUFBVCxnQkFBTSxFQUFFOzhCQUFRLHVCQUFVOzRDQUNRO0FBRXpCO0lBQVQsZ0JBQU0sRUFBRTs4QkFBUSx1QkFBVTs0Q0FJMkI7QUFFNUM7SUFBVCxnQkFBTSxFQUFFOzhCQUFVLHVCQUFVOzhDQUkyQjtBQUU5QztJQUFULGdCQUFNLEVBQUU7OEJBQWdCLHVCQUFVO29EQU0vQjtBQS9CTyxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7cUNBSU0sYUFBSztRQUNGLGlCQUFPO1FBQ0YsNkJBQWE7UUFDcEIsOEJBQWE7R0FOcEIsYUFBYSxDQWdDekI7QUFoQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAncnhqcy9SeCc7XG5cbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgQ3ljbGVzQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvY3ljbGVzLmFjdGlvbic7XG5pbXBvcnQgeyBDeWNsZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY3ljbGVzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3ljbGVzRWZmZWN0cyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjeWNsZXNBY3Rpb25zOiBDeWNsZXNBY3Rpb25zLFxuICAgIHByaXZhdGUgY3ljbGVzOiBDeWNsZXNTZXJ2aWNlXG4gICAgKSB7fVxuXG4gIC8vIEluaXRpYXRlIGxvYWQgb2YgYWxsIGFwcG9pbnRtZW50cyBhdCBBcHAgYm9vdFxuICBARWZmZWN0KCkgYm9vdCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuc3RvcmUudGFrZSgxKVxuICAgIC5tYXBUbyh0aGlzLmN5Y2xlc0FjdGlvbnMuaW5pdCgpKVxuXG4gIEBFZmZlY3QoKSBpbml0JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJFxuICAgIC5vZlR5cGUoQ3ljbGVzQWN0aW9ucy5JTklUKVxuICAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKVxuICAgIC5zd2l0Y2hNYXAocGF5bG9hZCA9PiB0aGlzLmN5Y2xlcy5mZXRjaChwYXlsb2FkKSlcbiAgICAubWFwKGRhdGEgPT4gdGhpcy5jeWNsZXNBY3Rpb25zLmluaXRfY29tcGxldGUoZGF0YSkpXG5cbiAgQEVmZmVjdCgpIGNyZWF0ZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyRcbiAgICAub2ZUeXBlKEN5Y2xlc0FjdGlvbnMuQ1JFQVRFKVxuICAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKVxuICAgIC5zd2l0Y2hNYXAocGF5bG9hZCA9PiB0aGlzLmN5Y2xlcy5jcmVhdGUocGF5bG9hZCkpXG4gICAgLm1hcChkYXRhID0+IHRoaXMuY3ljbGVzQWN0aW9ucy5jcmVhdGVfY29tcGxldGUoZGF0YSkpXG5cbiAgQEVmZmVjdCgpIGFkZF9jYXRlZ29yeSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyRcbiAgICAub2ZUeXBlKEN5Y2xlc0FjdGlvbnMuQUREX0NBVEVHT1JZKVxuICAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKVxuICAgIC5zd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IHRoaXMuY3ljbGVzLmFkZF9jYXRlZ29yeShwYXlsb2FkLmFtb3VudCwgcGF5bG9hZC5jYXRlZ29yeSk7XG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0aGlzLmN5Y2xlc0FjdGlvbnMuYWRkX2NhdGVnb3J5X2NvbXBsZXRlKHBheWxvYWQuaWQsIGNhdGVnb3J5KSlcbiAgICB9KVxufVxuIl19