// class Car {
//     brand = "Tesla";
//     color = "white"
//     engine = 1000;
//     tyre = 4;
//     seater = 5

//     start() {
//         console.log("started");
//     }
//     stop() {
//         console.log("stoped")
//     }
// }
// let ertica = new Car()
// ertica.color;
// console.log(ertica.color);
// console.log(ertica)


class Car {
    brand = 'Tesla';
    color = 'white'
    engine = 1000
    tyre = 4
    seats = 5
    constructor(b, c, e, s) {
        this.brand = b;
        this.color = c;
        this.engine = e;
        this.seats = s;

    }
    start() {
        console.log('start called')
    }
    stop() {
        console.log('stop called')
    }
}
let ertica = new Car('maruti', 'red', 1200, 7)
let swift = new Car('swift', 'blue', 800, 6)
console.log(ertica);
console.log(swift)