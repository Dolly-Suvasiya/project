// let add = () => {
//     console.log(10 + 20);
// }
// setTimeout(add, 2000);
// console.log("hello");

// setTimeout(() => {
//     console.log(20 + 2);
// }, 2000.);
// console.log("dolly");

// function add(p1, p2) {
//     setTimeout(() => {
//         return p1 + p2;

//     }, 2000);
// }
// let sum = add(10, 11);
// console.log("hello");
// console.log(sum);

//callback

// function add(p1, p2, CB) {
//     setTimeout(() => {
//         let result = p1 + p2;
//         return CB(result);
//     }, 2000);
// }
// add(10, 22, (sum) => { console.log(sum); });
// console.log("hii")


// function add(p1, p2, CB) {
//     setTimeout(() => {
//         let result = p1 + p2;
//         return CB(result);
//     }, 3000);
// }
// add(11, 2, (data) => { console.log(data); });
// console.log("hii");

//callback
// function add(p1, p2, CB) {
//     setTimeout(() => {
//         if (typeof (p1) != 'number') {
//             return CB('provide p1 as umber');
//         }
//         if (typeof (p2) != 'number') {
//             return CB('provide p2 as umber');
//         }
//         return CB(null, p1 + p2);
//     }, 2000);
// }
// add(10, 2, (error, data) => {
//     if (error) {
//         return console.log('error', error)
//     }
//     return console.log('data', data);
// })


// function add(p1, p2, CB) {
//     setTimeout(() => {
//         if (typeof (p1) != 'number') {
//             return CB('p1 as number');
//         }
//         if (typeof (p2) != 'number') {
//             return CB('p2 as number')
//         }
//         return CB(null, p1 + p2);
//     }, 2000)

// }
// add(2, '21', (error, data) => {
//     if (error) {
//         return console.log('Error', error)
//     }
//     return console.log('data', data)
// })



function add(p1, p2, CB) {
    setTimeout(() => {
        if (typeof (p1) != 'number') {
            return CB('p1 number');
        }
        if (typeof (p2) != 'number') {
            return CB('p2 number')
        }
        return CB(null, p1 + p2)
    }, 2000);
}
add(2, 3, (error, data) => {
    if (error) {
        return console.log('error', error);
    }
    return console.log("data", data);
})


