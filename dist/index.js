"use strict";
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i - 0] = arguments[_i];
        }
        return (numbers || []).reduce(function (sum, number) { return sum + number; });
    };
    Calculator.prototype.subtract = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i - 0] = arguments[_i];
        }
        return (numbers || []).reduce(function (sum, number) { return sum - number; });
    };
    Calculator.prototype.multiply = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i - 0] = arguments[_i];
        }
        return (numbers || []).reduce(function (sum, number) { return sum * number; });
    };
    Calculator.prototype.divide = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i - 0] = arguments[_i];
        }
        return (numbers || []).reduce(function (sum, number) { return sum / number; });
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=index.js.map