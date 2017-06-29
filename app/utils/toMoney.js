"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Comma separated money value
 * @param input [number]
 */
var toLocaleString_1 = require("./toLocaleString");
var toRound_1 = require("./toRound");
exports.sign = '₦';
var def = function (input) { return input && exports.sign + toLocaleString_1.default(toRound_1.default(input)); };
exports.default = def;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Nb25leS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvTW9uZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7O0dBR0c7QUFDSCxtREFBOEM7QUFDOUMscUNBQWdDO0FBRW5CLFFBQUEsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUV4QixJQUFNLEdBQUcsR0FBRyxVQUFDLEtBQWEsSUFBSyxPQUFBLEtBQUssSUFBSSxZQUFJLEdBQUcsd0JBQWMsQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTlDLENBQThDLENBQUM7QUFDOUUsa0JBQWUsR0FBRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb21tYSBzZXBhcmF0ZWQgbW9uZXkgdmFsdWVcbiAqIEBwYXJhbSBpbnB1dCBbbnVtYmVyXVxuICovXG5pbXBvcnQgdG9Mb2NhbGVTdHJpbmcgZnJvbSBcIi4vdG9Mb2NhbGVTdHJpbmdcIjtcbmltcG9ydCB0b1JvdW5kIGZyb20gXCIuL3RvUm91bmRcIjtcblxuZXhwb3J0IGNvbnN0IHNpZ24gPSAn4oKmJztcblxuY29uc3QgZGVmID0gKGlucHV0OiBudW1iZXIpID0+IGlucHV0ICYmIHNpZ24gKyB0b0xvY2FsZVN0cmluZyh0b1JvdW5kKGlucHV0KSk7XG5leHBvcnQgZGVmYXVsdCBkZWY7XG4iXX0=