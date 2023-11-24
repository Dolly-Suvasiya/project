// function test (msg) {
//     console.log(msg)
// }

// setTimeout(callback, timeout)

// test('Random with function ' + Math.random())

// setTimeout(function() {
//     console.log("Console after 5000ms");    
// }, 5000);


// Promise

// Classes
// Class -> Properties, Functions

// Living beings
// Animal | Fish | Bird | Humans | Tree

// Animal
// Cat | Dog | Monkey 

// Cat
// legs = 4
// tail = 1
// sound = meow
// brid = persian

// function sound() {
//     return 'MEOW'
// }

const legs = 4;
console.log(legs)

// syntax
// define a class
// class className {}

// initialize a class
// new className();

// set value during initialization of a class
// new className(arguments);

// to use property from a class within/inside a class
// this.propertyName

// to use property from a class outside a class
// classInstance.propertyName

// to use/call method from a class within/inside a class
// this.methodName(arguments)

// to use/call method from a class outside a class
// classInstance.methodName(arguments)

class Cat {
    // properties
    legs = 4;
    tail = 'ONE';
    brid;
    sound;

    // method overriding
    // existing javascript function is getting rewritten based on new logic
    constructor(brid, sound) {
        this.brid = brid;
        this.sound = sound
    }

    // define a method to run any logic using properties of a class
    printCatInfo () {
        console.log('Cat has ' + this.legs + 'legs' + this.tail + 'tail');
    }

    // define a method to return property of a class
    getLegs() {
        return this.legs
    }

    // define a method to update property of a class
    setLegs(legCount) {
        this.legs = legCount
    }

    getTail() {
        return this.tail
    }
    
    // 
    getSound() {
        return this.sound;
    }
}

// class instance initialization
const persianCat = new Cat('persian', 'MEOW'); // instance
const desiCat = new Cat('desi', 'MEOWTH');

console.log('persianCat', persianCat.getSound());
console.log('desiCat', desiCat.getSound());

// practice for creating class

// classname -> Cars
// properties -> 
//   type: SUV | XUV 
//   model: 
//   company: HONDA | BMW
//   price: number
// methods ->
//   printCarInfo -> expected is to pring complete info of a car
//   setPrice -> expected is to set price for the car
//   getPrice -> expected is to return price of the car
