class Circle
{
    Radious: any = 0;
    PI: any = 0;

    constructor(radiouss:any , PI:any){
        this.Radious = radiouss;
        this.PI = 3.14;
    }

       public Area() {
         
     
        return this.PI * (this.Radious * this.Radious);
    }

}

var Obj = new Circle(5,3.14);

console.log("Area of Circle : " + Obj.Area());