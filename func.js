// let arr = [2, '3', '9', 7, 6, 8, 10, '12']
// function seperate(p) {
//     if (typeof (p) != 'object') {
//         return 'invalid'
//     }

//     let num = [];
//     let str = [];
//     for (let i of p) {
//         if (typeof (i) == 'number') {
//             num.push(i)
//         }
//         if (typeof (i) == "string") {
//             str.push(i)
//         }
//     }
//     return { num, str }
// }
// console.log(seperate(arr));


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function num(p) {
//     let even = [];
//     let odd = [];
//     for (let i of p) {
//         if (i % 2 == 0) {

//             even.push(i)

//         }

//         else {
//             // console.log(i)
//             odd.push(i)
//         }
//     }

//     return { even, odd }
// }
// console.log(num(arr))


function datatype(p1, p2, p3, p4) {
    return [{ value: p1, type: typeof (p1) },
    { value: p2, type: typeof (p2) },
    { value: p3, type: typeof (p3) },
    { value: p4, type: typeof (p4) }
    ]

}
console.log(datatype(10.2,[],"Dolly",false))