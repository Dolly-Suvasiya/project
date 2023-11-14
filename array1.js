// let list=[123,"Dolly",true]
// console.log(list)
// console.log(list[1])

//  let count=[10,20,30,40]
//  console.log(count)
//  console.log(count[2]+count[3])
//  console.log(count[2]+count[5])

//  let student=["jiya","jenny","joe"]
//  student[2]="jigar"
//  console.log(student)

//  student[3]="john"
// console.log(student)

// delete student[1]
// console.log(student)

let users = []
let id = 1;

function create(name, email, contact) {
    // for (let i of arguments) {
    //     if (typeof (i) != 'string')
    //         return 'value must be string ${i}'

    // }


    if (typeof (name) != "string") {
        return 'error name'
    }
    if (typeof (email) != "string") {
        return 'error email'
    }

    if (typeof (contact) != "string") {
        return 'error conact'
    }
    let data = {
        name,
        email,
        contact,
    }
    data.id = id;
    id++
    users.push(data)
    return data;
}

console.log(create("Dolly Suvasiya", " dolly@gmail.com", " 9987654321"))
console.log(create("Dolly Suvasiya", " dolly@gmail.com", " 9987654321"))