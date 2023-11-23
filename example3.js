// function example 3 with typeof()
// function add(P1, P2) {
//     if (typeof (P1) == 'number' && typeof (P2) == 'NUMBER') {
//         return P1 + P2
//     }
//     else {
//         return "please provide number"
//     }

// }
// let sum = add(10, 2);
// console.log(sum);

// negative approach
function add(P1, P2) {
    if (typeof (P1) != 'number' && typeof (P2) != 'number') {
        return 'PROVIDE  NUMBER'
    }
    return P1 + P2;
}
let sum = add('dolly');
console.log(sum);