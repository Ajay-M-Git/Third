var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(Data) {
        this.Radious = 0;
        this.PI = 0;
        this.Radious = Data;
        this.PI = 3.14;
    }
    Circle.prototype.area = function () {
        var ret;
        ret = this.PI * this.Radious * this.Radious;
        return ret;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(Data) {
        return _super.call(this, Data) || this;
    }
    CircleX.prototype.circumfarance = function () {
        var ret = 0;
        ret = 2 * this.PI * this.Radious;
        return ret;
    };
    return CircleX;
}(Circle));
var obj4 = new CircleX(5);
console.log("Value of Area" + obj4.area());
console.log("Value of Cirumfarance:" + obj4.circumfarance());
