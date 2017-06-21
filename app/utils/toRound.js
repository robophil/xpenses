"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Round to 2dp
 * @param num [number|string]
 * @param precision [number]
 */
var round = function (num, precision) {
    if (precision === void 0) { precision = 2; }
    return +(Math.round(+('' + num + 'e+' + precision)) + 'e-' + precision);
};
exports.default = round;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Sb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvUm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztHQUlHO0FBQ0gsSUFBTSxLQUFLLEdBQUcsVUFBQyxHQUFrQixFQUFFLFNBQXFCO0lBQXJCLDBCQUFBLEVBQUEsYUFBcUI7SUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsR0FBRyxHQUFHLElBQUksR0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFJLElBQUksR0FBQyxTQUFTLENBQUM7QUFBM0QsQ0FBMkQsQ0FBQztBQUN6SCxrQkFBZSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJvdW5kIHRvIDJkcFxuICogQHBhcmFtIG51bSBbbnVtYmVyfHN0cmluZ11cbiAqIEBwYXJhbSBwcmVjaXNpb24gW251bWJlcl1cbiAqL1xuY29uc3Qgcm91bmQgPSAobnVtOiBudW1iZXJ8c3RyaW5nLCBwcmVjaXNpb246IG51bWJlciA9IDIpID0+ICsoTWF0aC5yb3VuZCgrKCcnK251bSArICdlKycrcHJlY2lzaW9uKSkgICsgJ2UtJytwcmVjaXNpb24pO1xuZXhwb3J0IGRlZmF1bHQgcm91bmQ7XG4iXX0=