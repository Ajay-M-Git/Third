var Circle = /** @class */ (function () {
    function Circle(radiouss, PI) {
        this.Radious = 0;
        this.PI = 0;
        this.Radious = radiouss;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        return this.PI * (this.Radious * this.Radious);
    };
    return Circle;
}());
var Obj = new Circle(5, 3.14);
console.log("Area of Circle : " + Obj.Area());
