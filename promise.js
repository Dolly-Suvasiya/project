function add(p1, p2) {
    return new Promise((resolve, reject) => {
        if (typeof (p1) != 'number') {
            return reject('p1 number')
        }
        if (typeof (p2) != 'number') {
            return reject('p2 number')
        }
        let result = p1 + p2;
        return resolve(result);
    });
}
add(10, 20).then((data) => {
    console.log("data is", data)
}).catch((error) => {
    console.log("error is", error)
})