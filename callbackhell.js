function first(p, CB) {
    setTimeout(() => {
        if (p < 10) {
            return CB('p is less than 10')
        }
        let result = 10 + p;
        console.log(`the result of the first function is ${result}`)
        return CB(null, result)
    }, 2000);
}

// first(11, (error, data) => {
//     if (error) {
//         return console.log('error', error)
//     }
//     return console.log('resultdata', data)
// })

function second(q, CB) {
    setTimeout(() => {
        if (q < 10) {
            return CB('q is less than 10')
        }
        let result = q - 10;
        console.log(`the result of the second function is ${result}`)
        return CB(null, result)

    }, 2000)
}
// second(20, (error, data) => {
//     if (error) {
//         return console.log('error', error)
//     }
//     return console.log('resultdata', data)
// })

function third(r, CB) {
    setTimeout(() => {
        if (r < 5) {
            return CB('r is less 5 ')
        }
        let result = 10 * r;
        console.log(`the result of third function is ${result}`)
        return CB(null, result)
    }, 2000)
}
// third(5, (error, data) => {
//     if (error) {
//         return console.log('error', error)
//     }
//     return console.log('resultdata', data)
// })

function fourth(s, CB) {
    setTimeout(() => {
        if (s < 5) {
            return CB('s is less 5 ')
        }
        let result = s / 10;
        console.log(`the result of fourth function is ${result}`)
        return CB(null, `the result of fourth function is ${result}`)
    }, 2000)
}
// fourth(20, (error, data) => {
//     if (error) {
//         return console.log('error', error)
//     }
//     return console.log('resultdata', data)
// })

first(10, function (error, data) {
    if (error) {
        console.log(error)
    } else {
        second(data, function (error, data) {
            if (error) {
                console.log(error)
            } else {
                third(data, function (error, data) {
                    if (error) {
                        console.log(error)
                    } else {
                        fourth(data, function (error, data) {
                            if (error) {
                                console.log(error)
                            } else {
                                console.log(data)
                            }
                        })
                    }
                })
            }
        })
    }
})





