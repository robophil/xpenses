"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Random number generation
 */
var qinu = require("qinu");
exports.rand = function () { return (Math.random() * 10000); };
exports.rand2 = function () { return Math.floor(exports.rand()); };
exports.uniq = function (length) { return qinu({
    length: length,
    chars: "1234567890abcdef"
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFuZG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCwyQkFBNkI7QUFFaEIsUUFBQSxJQUFJLEdBQUcsY0FBTSxPQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDO0FBRXJDLFFBQUEsS0FBSyxHQUFHLGNBQU0sT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQUksRUFBRSxDQUFDLEVBQWxCLENBQWtCLENBQUM7QUFFakMsUUFBQSxJQUFJLEdBQUcsVUFBQyxNQUFNLElBQUssT0FBQSxJQUFJLENBQUM7SUFDbkMsTUFBTSxFQUFFLE1BQU07SUFDZCxLQUFLLEVBQUUsa0JBQWtCO0NBQzFCLENBQUMsRUFIOEIsQ0FHOUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmFuZG9tIG51bWJlciBnZW5lcmF0aW9uXG4gKi9cbmltcG9ydCAqIGFzIHFpbnUgZnJvbSAncWludSc7XG5cbmV4cG9ydCBjb25zdCByYW5kID0gKCkgPT4gKE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XG5cbmV4cG9ydCBjb25zdCByYW5kMiA9ICgpID0+IE1hdGguZmxvb3IocmFuZCgpKTtcblxuZXhwb3J0IGNvbnN0IHVuaXEgPSAobGVuZ3RoKSA9PiBxaW51KHtcbiAgbGVuZ3RoOiBsZW5ndGgsXG4gIGNoYXJzOiBcIjEyMzQ1Njc4OTBhYmNkZWZcIlxufSk7XG4iXX0=