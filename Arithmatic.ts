class Arithmatic
{
    Number1:number = 0;
    Number2:number = 0;

    constructor(no1:number , no2:number)
    {
       this.Number1 = no1;
       this.Number2 = no2; 
    }

    public addion(){
            return this.Number1+this.Number2;

        }

    /**
     * subtraction
     */
    public subtraction() {
            return this.Number1-this.Number2;
    }

    /**
     * multiplication
     */
    public multiplication() {
        return this.Number1*this.Number2;
    }

    /**
     * divide
     */
    public divide() {
        return this.Number1/this.Number2;
    }    




}


var Obj1 = new Arithmatic(10,20);
console.log("value of addition is "+Obj1.addion());
console.log("value of substraction is "+Obj1.subtraction());
console.log("value of multiplication is "+Obj1.multiplication());
console.log("value of division is " + Obj1.divide());


console.log("======================Second object gets called ====================");

var Obj2 = new Arithmatic(11,22);
console.log("value of Addition : "+Obj2.addion());
console.log("value of substraction is "+Obj2.subtraction());
console.log("value of multiplication is "+Obj2.multiplication());
console.log("value of division is " + Obj2.divide());

