class Car {
    wheels = 4;
    mirror = 2;
    speedMeter = 1;
    stearing = 1;

    constructor(props) {
        console.log('car props', props)
        if (props.mirror) {
            this.mirror = props.mirror
        }
        // console.log("Car instance", this)
        // console.log("++++++")
    }
}

// new Car();

// 1st level of inheritance// 1st generation
class SUV extends Car {
    seats = 5;
    constructor(props) {
        super(props);
        // console.log("SUV instance", this)
        // console.log("++++++")
    }
}

// new SUV();

class XUV extends Car {
    seats = 7;
    constructor(props) {
        super(props);
        // console.log("XUV instance", this)
        // console.log("++++++")
    }
}

// new XUV();

class HATCHBACK extends Car {
    seats = 4;
    constructor(props) {
        props['mirror'] = 3;
        super(props);
        // console.log("HATCHBACK instance", this)
        // console.log("++++++")
    }
}

// new HATCHBACK();


// 2nd level of inheritance// 2nd generation

class HONDA_CITY extends SUV {
    company = "HONDA"
    model = 'HONDA CITY'

    constructor(props) {
        super(props)
        console.log("=====")
        console.log("HONDA_CITY instance", this)
    }
}

new HONDA_CITY({})

class WAGONR extends HATCHBACK {
    company = "MARUTI SUZUKI"
    model = 'WAGONR'

    constructor(props) {
        super(props)
        console.log("=====")
        console.log("WAGONR instance", this)
    }
}

new WAGONR({})

