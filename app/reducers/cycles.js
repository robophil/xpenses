"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var cycles_action_1 = require("../actions/cycles.action");
var initialState = {
    selected: '',
    date: new Date,
    status: false,
    ids: [],
    data: null,
};
// Reducer
function cycles(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case cycles_action_1.CyclesActions.SELECT: { }
        case cycles_action_1.CyclesActions.CREATE_COMPLETE: { }
        case cycles_action_1.CyclesActions.INIT_COMPLETE: {
            var ids = payload.map(function (data) { return data.id; });
            var data = _.mapKeys(payload, 'id');
            // return {status: false, ids, data} as CyclesState;
            return Object.assign({}, state, { status: false, ids: ids, data: data });
            // return Object.assign({}, state, { status: false, ids, data });
            // return { ...state, status: false, ids, data };
        }
        default: return state;
    }
}
exports.cycles = cycles;
;
// Selectors
function getIds() {
    return function (diary$) { return diary$.map(function (t) { return t.ids; }).filter(function (ids) { return !!ids; }); };
}
exports.getIds = getIds;
function getData(ids) {
    return function (diary$) { return diary$
        .map(function (t) { return t.data; })
        .filter(function (data) { return data !== null; })
        .map(function (data) { return ids.map(function (id) { return data[id]; }); }); };
}
exports.getData = getData;
function getSelectedId() {
    return function (diary$) { return diary$.map(function (t) { return t.selected; }).filter(function (s) { return !!s.length; }); };
}
exports.getSelectedId = getSelectedId;
function getSelectedDate() {
    return function (diary$) { return diary$.map(function (t) { return t.date; }); };
}
exports.getSelectedDate = getSelectedDate;
function getSelected() {
    return function (diary$) { return diary$.filter(function (s) { return !!s.ids.length; }).map(function (t) { return t.data[t.selected]; }); };
}
exports.getSelected = getSelected;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3ljbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMEJBQTRCO0FBRzVCLDBEQUF5RDtBQVd6RCxJQUFNLFlBQVksR0FBZ0I7SUFDaEMsUUFBUSxFQUFFLEVBQUU7SUFDWixJQUFJLEVBQUUsSUFBSSxJQUFJO0lBQ2QsTUFBTSxFQUFFLEtBQUs7SUFDYixHQUFHLEVBQUUsRUFBRTtJQUNQLElBQUksRUFBRSxJQUFJO0NBQ1gsQ0FBQTtBQUVELFVBQVU7QUFDVixnQkFBdUIsS0FBaUMsRUFBRSxFQUF1QjtJQUExRCxzQkFBQSxFQUFBLG9CQUFpQztRQUFHLGNBQUksRUFBRSxvQkFBTztJQUN0RSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2IsS0FBSyw2QkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5QixLQUFLLDZCQUFhLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXZDLEtBQUssNkJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNqQyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsRUFBUCxDQUFPLENBQUMsQ0FBQztZQUN6QyxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQWUsQ0FBQztZQUVwRCxvREFBb0Q7WUFDcEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO1lBQzlELGlFQUFpRTtZQUNqRSxpREFBaUQ7UUFDbkQsQ0FBQztRQUVELFNBQVMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN4QixDQUFDO0FBQ0gsQ0FBQztBQWxCRCx3QkFrQkM7QUFBQSxDQUFDO0FBR0YsWUFBWTtBQUNaO0lBQ0UsTUFBTSxDQUFDLFVBQUMsTUFBK0IsSUFBSyxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxFQUFMLENBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBSyxDQUFDLEVBQTNDLENBQTJDLENBQUM7QUFDMUYsQ0FBQztBQUZELHdCQUVDO0FBQ0QsaUJBQXdCLEdBQUc7SUFDekIsTUFBTSxDQUFDLFVBQUMsTUFBK0IsSUFBSyxPQUFBLE1BQU07U0FDL0MsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUM7U0FDaEIsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxLQUFLLElBQUksRUFBYixDQUFhLENBQUM7U0FDN0IsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBUixDQUFRLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxFQUhLLENBR0wsQ0FBQztBQUMxQyxDQUFDO0FBTEQsMEJBS0M7QUFDRDtJQUNFLE1BQU0sQ0FBQyxVQUFDLE1BQStCLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFFBQVEsRUFBVixDQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBVixDQUFVLENBQUMsRUFBbkQsQ0FBbUQsQ0FBQztBQUNsRyxDQUFDO0FBRkQsc0NBRUM7QUFDRDtJQUNFLE1BQU0sQ0FBQyxVQUFDLE1BQStCLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztBQUN0RSxDQUFDO0FBRkQsMENBRUM7QUFDRDtJQUNFLE1BQU0sQ0FBQyxVQUFDLE1BQStCLElBQUssT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFkLENBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFsQixDQUFrQixDQUFDLEVBQS9ELENBQStELENBQUM7QUFDOUcsQ0FBQztBQUZELGtDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBDeWNsZXNNb2RlbCB9IGZyb20gJy4uL21vZGVscy9jeWNsZS5tb2RlbCc7XG5pbXBvcnQgeyBDeWNsZXNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9jeWNsZXMuYWN0aW9uJztcblxuZXhwb3J0IHR5cGUgQ3ljbGVzRGF0YSA9IHsgW2lkOiBudW1iZXJdOiBDeWNsZXNNb2RlbCB9O1xuZXhwb3J0IGludGVyZmFjZSBDeWNsZXNTdGF0ZSB7XG4gIHNlbGVjdGVkOiBzdHJpbmc7XG4gIGRhdGU6IERhdGU7XG4gIHN0YXR1czogYm9vbGVhbjtcbiAgaWRzOiBudW1iZXJbXTtcbiAgZGF0YTogQ3ljbGVzRGF0YTtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBDeWNsZXNTdGF0ZSA9IHtcbiAgc2VsZWN0ZWQ6ICcnLFxuICBkYXRlOiBuZXcgRGF0ZSxcbiAgc3RhdHVzOiBmYWxzZSxcbiAgaWRzOiBbXSxcbiAgZGF0YTogbnVsbCxcbn1cblxuLy8gUmVkdWNlclxuZXhwb3J0IGZ1bmN0aW9uIGN5Y2xlcyhzdGF0ZTogQ3ljbGVzU3RhdGUgPSBpbml0aWFsU3RhdGUsIHt0eXBlLCBwYXlsb2FkfTogQWN0aW9uKTogQ3ljbGVzU3RhdGUge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEN5Y2xlc0FjdGlvbnMuU0VMRUNUOiB7IH1cblxuICAgIGNhc2UgQ3ljbGVzQWN0aW9ucy5DUkVBVEVfQ09NUExFVEU6IHsgfVxuXG4gICAgY2FzZSBDeWNsZXNBY3Rpb25zLklOSVRfQ09NUExFVEU6IHtcbiAgICAgIGNvbnN0IGlkcyA9IHBheWxvYWQubWFwKGRhdGEgPT4gZGF0YS5pZCk7XG4gICAgICBjb25zdCBkYXRhID0gXy5tYXBLZXlzKHBheWxvYWQsICdpZCcpIGFzIEN5Y2xlc0RhdGE7XG5cbiAgICAgIC8vIHJldHVybiB7c3RhdHVzOiBmYWxzZSwgaWRzLCBkYXRhfSBhcyBDeWNsZXNTdGF0ZTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBzdGF0dXM6IGZhbHNlLCBpZHMsIGRhdGEgfSk7XG4gICAgICAvLyByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgc3RhdHVzOiBmYWxzZSwgaWRzLCBkYXRhIH0pO1xuICAgICAgLy8gcmV0dXJuIHsgLi4uc3RhdGUsIHN0YXR1czogZmFsc2UsIGlkcywgZGF0YSB9O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuXG4vLyBTZWxlY3RvcnNcbmV4cG9ydCBmdW5jdGlvbiBnZXRJZHMoKSB7XG4gIHJldHVybiAoZGlhcnkkOiBPYnNlcnZhYmxlPEN5Y2xlc1N0YXRlPikgPT4gZGlhcnkkLm1hcCh0ID0+IHQuaWRzKS5maWx0ZXIoaWRzID0+ICEhaWRzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKGlkcykge1xuICByZXR1cm4gKGRpYXJ5JDogT2JzZXJ2YWJsZTxDeWNsZXNTdGF0ZT4pID0+IGRpYXJ5JFxuICAgIC5tYXAodCA9PiB0LmRhdGEpXG4gICAgLmZpbHRlcihkYXRhID0+IGRhdGEgIT09IG51bGwpXG4gICAgLm1hcChkYXRhID0+IGlkcy5tYXAoaWQgPT4gZGF0YVtpZF0pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZElkKCkge1xuICByZXR1cm4gKGRpYXJ5JDogT2JzZXJ2YWJsZTxDeWNsZXNTdGF0ZT4pID0+IGRpYXJ5JC5tYXAodCA9PiB0LnNlbGVjdGVkKS5maWx0ZXIocyA9PiAhIXMubGVuZ3RoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZERhdGUoKSB7XG4gIHJldHVybiAoZGlhcnkkOiBPYnNlcnZhYmxlPEN5Y2xlc1N0YXRlPikgPT4gZGlhcnkkLm1hcCh0ID0+IHQuZGF0ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWQoKSB7XG4gIHJldHVybiAoZGlhcnkkOiBPYnNlcnZhYmxlPEN5Y2xlc1N0YXRlPikgPT4gZGlhcnkkLmZpbHRlcihzID0+ICEhcy5pZHMubGVuZ3RoKS5tYXAodCA9PiB0LmRhdGFbdC5zZWxlY3RlZF0pO1xufVxuIl19