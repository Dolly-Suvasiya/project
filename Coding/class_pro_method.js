class Car{
    type;
    model=2023;
    company;
    price;

    constructor(type,company){
this.type=type;
this.company=company;
    }

    printCarInfo(){
        console.log("Car has"+this.type+'type'+this.model+'model'+this.company+"company"+this.price+'price')
    }

    getPrice(){
        return this.price
    }

    setPrice(){
        return this.price
    }

   
}

    //class instance initialization
const suvCar=new Car('SUV','HONDA')
const xuvCar=new Car('XUV','BMW')
console.log('suvCar',suvCar)
console.log('xuvCar',xuvCar,
xuvCar.getPrice())

console.log("Car",Car)