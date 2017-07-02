"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var categories_action_1 = require("../actions/categories.action");
var categories_service_1 = require("../services/categories.service");
var CategoriesEffects = (function () {
    function CategoriesEffects(store, actions$, categoriesActions, categories) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.categoriesActions = categoriesActions;
        this.categories = categories;
        // Initiate load of all appointments at App boot
        this.boot$ = this.store.take(1)
            .mapTo(this.categoriesActions.init());
        this.init$ = this.actions$
            .ofType(categories_action_1.CategoriesActions.INIT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.categories.fetch(payload); })
            .map(function (data) { return _this.categoriesActions.init_complete(data); });
        this.create$ = this.actions$
            .ofType(categories_action_1.CategoriesActions.CREATE)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.categories.create(payload); })
            .map(function (data) { return _this.categoriesActions.create_complete(data); });
    }
    return CategoriesEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], CategoriesEffects.prototype, "boot$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], CategoriesEffects.prototype, "init$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], CategoriesEffects.prototype, "create$", void 0);
CategoriesEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        effects_1.Actions,
        categories_action_1.CategoriesActions,
        categories_service_1.CategoriesService])
], CategoriesEffects);
exports.CategoriesEffects = CategoriesEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5lZmZlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yaWVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxxQ0FBNEM7QUFDNUMseUNBQWdEO0FBQ2hELDhDQUE2QztBQUU3QyxtQkFBaUI7QUFHakIsa0VBQWlFO0FBQ2pFLHFFQUFtRTtBQUduRSxJQUFhLGlCQUFpQjtJQUU1QiwyQkFDVSxLQUFzQixFQUN0QixRQUFpQixFQUNqQixpQkFBb0MsRUFDcEMsVUFBNkI7UUFKdkMsaUJBS007UUFKSSxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFHdkMsZ0RBQWdEO1FBQ3RDLFVBQUssR0FBdUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JELEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUU3QixVQUFLLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQ2hELE1BQU0sQ0FBQyxxQ0FBaUIsQ0FBQyxJQUFJLENBQUM7YUFDOUIsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUM7YUFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQTlCLENBQThCLENBQUM7YUFDcEQsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFBO1FBRWhELFlBQU8sR0FBdUIsSUFBSSxDQUFDLFFBQVE7YUFDbEQsTUFBTSxDQUFDLHFDQUFpQixDQUFDLE1BQU0sQ0FBQzthQUNoQyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQzthQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQzthQUNyRCxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUE7SUFoQnZELENBQUM7SUFpQlIsd0JBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBZFc7SUFBVCxnQkFBTSxFQUFFOzhCQUFRLHVCQUFVO2dEQUNZO0FBRTdCO0lBQVQsZ0JBQU0sRUFBRTs4QkFBUSx1QkFBVTtnREFJK0I7QUFFaEQ7SUFBVCxnQkFBTSxFQUFFOzhCQUFVLHVCQUFVO2tEQUkrQjtBQXZCakQsaUJBQWlCO0lBRDdCLGlCQUFVLEVBQUU7cUNBSU0sYUFBSztRQUNGLGlCQUFPO1FBQ0UscUNBQWlCO1FBQ3hCLHNDQUFpQjtHQU41QixpQkFBaUIsQ0F3QjdCO0FBeEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBDYXRlZ29yaWVzQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvY2F0ZWdvcmllcy5hY3Rpb24nO1xuaW1wb3J0IHsgQ2F0ZWdvcmllc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYXRlZ29yaWVzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc0VmZmVjdHMge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2F0ZWdvcmllc0FjdGlvbnM6IENhdGVnb3JpZXNBY3Rpb25zLFxuICAgIHByaXZhdGUgY2F0ZWdvcmllczogQ2F0ZWdvcmllc1NlcnZpY2VcbiAgICApIHt9XG5cbiAgLy8gSW5pdGlhdGUgbG9hZCBvZiBhbGwgYXBwb2ludG1lbnRzIGF0IEFwcCBib290XG4gIEBFZmZlY3QoKSBib290JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5zdG9yZS50YWtlKDEpXG4gICAgLm1hcFRvKHRoaXMuY2F0ZWdvcmllc0FjdGlvbnMuaW5pdCgpKVxuXG4gIEBFZmZlY3QoKSBpbml0JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJFxuICAgIC5vZlR5cGUoQ2F0ZWdvcmllc0FjdGlvbnMuSU5JVClcbiAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZClcbiAgICAuc3dpdGNoTWFwKHBheWxvYWQgPT4gdGhpcy5jYXRlZ29yaWVzLmZldGNoKHBheWxvYWQpKVxuICAgIC5tYXAoZGF0YSA9PiB0aGlzLmNhdGVnb3JpZXNBY3Rpb25zLmluaXRfY29tcGxldGUoZGF0YSkpXG5cbiAgQEVmZmVjdCgpIGNyZWF0ZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyRcbiAgICAub2ZUeXBlKENhdGVnb3JpZXNBY3Rpb25zLkNSRUFURSlcbiAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZClcbiAgICAuc3dpdGNoTWFwKHBheWxvYWQgPT4gdGhpcy5jYXRlZ29yaWVzLmNyZWF0ZShwYXlsb2FkKSlcbiAgICAubWFwKGRhdGEgPT4gdGhpcy5jYXRlZ29yaWVzQWN0aW9ucy5jcmVhdGVfY29tcGxldGUoZGF0YSkpXG59XG4iXX0=