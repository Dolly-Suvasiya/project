class Car {
    brand = 'tesla';
    color = 'white';
    engine = 1000
    #tyre = 4
    constructor(b, c, e) {
        this.brand = b;
        this.color = c;
        this.engine = e;
    }
    start() {

    }
    showTyre() {
        console.log(this.#tyre);
    }
    updateTyre(tyre) {
        if (tyre != 5)
            console.log(this.#tyre = tyre)
    }
}
let ertica = new Car('n', 'b', 1200);
console.log(ertica);
ertica.color = 'blue'
ertica.tire = 3
ertica.showTyre();
ertica.updateTyre(6);