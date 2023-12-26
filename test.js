// let a = 9
// for (let i = 1; i <= 10; i++) {
//     console.log(i * a);
// }


let arr = [];
function table(number) {
    for (let i = 1; i <= 10; i++) {
        let a = i * number;

        arr.push(a);

    }
    return arr;
}
console.log(table(6));

function getpercecateof(percentage, from) {
    let a = percentage / from * 100;

    return a;
}
console.log(getpercecateof(10, 200));



function isSquareOf(number) {
    var number;
    // let a = number * number;
}
console.log(isSquareOf(5));


function getpowerby(of, by) {
    let a = of ** by;
    return a;
}
console.log(getpowerby(2, 4));


function aplha(str) {
    if (typeof (str) != 'string') {
        return 'not valid'
    }
    let check = {};
    let arr = [];
    for (let i of str) {

        if (check[i]) {
            check[i] += 1;
            if (arr.indexOf(i) == -1) {
                arr.push(i);
            }
        }
        else {
            check[i] = 1;
        }
    }
    return arr;

}
let a = aplha("hello world");
console.log(a);





