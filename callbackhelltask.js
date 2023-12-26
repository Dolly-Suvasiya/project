function first(p, CB) {
    setTimeout(() => {
        if (p < 10) {
            return CB('p is less than 10')
        }
        let result = 10 + p;
        console.log(`the result of the first ${result}`)
        return CB(null, result)
    }, 2000)
}
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
first(10, function (error, data) {
    if (error) {
        console.log(error)
    } else {
        second(data, function (error, data) {
            if (error) {
                console.log
            }
            console.log("data is", data)
        })
    }
})


console.log("========");

function first(p, CB) {
    setTimeout(() => {
        if (p < 10) {
            return CB('p is less than 10')
        }
        let result = 10 + p;
        console.log(`the result of the first ${result}`)
        return CB(null, result)
    }, 2000)
}
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
                        console.log(data)
                    }
                })
            }

        })
    }
})

function First(number, CB) {
    setTimeout(() => {
        if (number < 10) {
            return CB("Number is less than 10");
        }
        let result = 10 + number;
        console.log(The resulte is ${ result });
        return CB(null, result);
    }, 3000);
}
First(10, (error, result) => {
    if (error) {
        return console.log("Error:", error);
    } else {
        function Second(number, CB) {
            setTimeout(() => {
                if (number < 10) {
                    return CB("Number is less than 10");
                }
                let result = number - 10;
                console.log(The resulte is ${ result });
                return CB(null, result);
            }, 3000);
        }
        Second(result, (error, result) => {
            if (error) {
                return console.log("Error:", error);
            } else {
                function Third(number, CB) {
                    setTimeout(() => {
                        if (number < 10) {
                            return CB("Number is less than 10");
                        }
                        let result = 10 * number;
                        console.log(The resulte is ${ result });
                        return CB(null, result);
                    }, 3000);
                }
                Third(result, (error, result) => {
                    if (error) {
                        return console.log("Error:", error);
                    } else {
                        function Fourth(number, CB) {
                            setTimeout(() => {
                                if (number < 10) {
                                    return CB("Number is less than 10");
                                }
                                let result = number / 10;
                                console.log(The resulte is ${ result });
                                return CB(null, result);
                            }, 4000);
                        }
                        Fourth(result, (error, result) => {
                            if (error) {
                                return console.log("Error:", error);
                            } else {
                                function Fifth(number, CB) {
                                    setTimeout(() => {
                                        if (number < 10) {
                                            return CB("Number is less than 10");
                                        }
                                        let result = (number * 10) / 100;
                                        console.log(The resulte is ${ result });
                                        return CB(null, result);
                                    }, 5000);
                                }
                                Fifth(result, (error, result) => {
                                    if (error) {
                                        return console.log("Error:", error);
                                    }
                                    return console.log("The result is:", result);
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});

