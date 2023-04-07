class Circle
{
     Radious: any = 0;
     PI: any = 0;
    

     constructor(Data:any)
    {
       
        this.Radious=Data;
        this.PI=3.14;
    }

     area():number {
        let ret;
        ret =this.PI*this.Radious*this.Radious;
        return ret;
    }
}

class CircleX extends Circle
{

        constructor(Data : number){
            super(Data);
        }


         circumfarance(): number{
            let ret: number =0;
                     ret = 2*this.PI*this.Radious;              
                     return ret;
        }
}

var obj4 = new CircleX(5);
console.log("Value of Area"+ obj4.area() );
console.log("Value of Cirumfarance:"+ obj4.circumfarance());