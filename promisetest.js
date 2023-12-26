function add(p1, p2) {
    return new Promise((res, rej) => {
        if (typeof (p1) != 'number') {
            return rej('p1 number')
        }
        if (typeof (p2) != 'number') {
            return rej("p2 number")
        }
        let result = p1 + p2;
        return res(result);
    });
}

function multiply(p1, p2) {
    return new Promise((res, rej) => {
        if (typeof (p1) != 'number') {
            return rej('p1 number')
        }
        if (typeof (p2) != 'number') {
            return rej('p2 number')
        }
        let result = p1 * p2;
        return res(result);
    })
}
add(10, 20).then((data) => {
    console.log('data is', data);
    multiply(data, 4).then((data1) => {
        console.log(data1);
    }).catch((error) => {
        console.log(error)
    
    }).catch((error)=>{
        console.log(error)

    })
