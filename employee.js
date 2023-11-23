let TCS = [30, 26, 40, 50, 80, 95];
let Wipro = [50, 90, 100, 39, 79];
function cardRecomment(salaries) {
    for (let i of salaries) {
        if (i <= 35) {
            console.log('no card');
        }
        else if (i > 35 && i <= 50) {
            console.log("silver card")
        }
        else if (i > 50 && i <= 80) {
            console.log("gold card")
        }
        else if (i > 80) {
            console.log('platinum card')
        }
        else {
            console.log("provide info")
        }

    }
}
cardRecomment(TCS);
cardRecomment(Wipro);




let persons = [{ name: 'Dolly', email: 'dolly@gmail.com', contact: 987654321 },
{ name: 'Abc', email: 'abc@gmail.com', contact: 123456789 },
{ name: 'Def', email: '', contact: 456789321 }]
for (let i of persons) {
    console.log('hello ' + i['name']);
}