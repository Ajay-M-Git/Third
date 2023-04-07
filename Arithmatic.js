var Arithmatic = /** @class */ (function () {
    function Arithmatic(no1, no2) {
        this.Number1 = 0;
        this.Number2 = 0;
        this.Number1 = no1;
        this.Number2 = no2;
    }
    Arithmatic.prototype.addion = function () {
        return this.Number1 + this.Number2;
    };
    /**
     * subtraction
     */
    Arithmatic.prototype.subtraction = function () {
        return this.Number1 - this.Number2;
    };
    /**
     * multiplication
     */
    Arithmatic.prototype.multiplication = function () {
        return this.Number1 * this.Number2;
    };
    /**
     * divide
     */
    Arithmatic.prototype.divide = function () {
        return this.Number1 / this.Number2;
    };
    return Arithmatic;
}());
var Obj1 = new Arithmatic(10, 20);
console.log("value of addition is " + Obj1.addion());
console.log("value of substraction is " + Obj1.subtraction());
console.log("value of multiplication is " + Obj1.multiplication());
console.log("value of division is " + Obj1.divide());
console.log("======================Second object gets called ====================");
var Obj2 = new Arithmatic(11, 22);
console.log("value of Addition : " + Obj2.addion());
console.log("value of substraction is " + Obj2.subtraction());
console.log("value of multiplication is " + Obj2.multiplication());
console.log("value of division is " + Obj2.divide());
