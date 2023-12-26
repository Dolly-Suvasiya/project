let employee = [];
function create(details) {
    if (typeof (details) != 'object') {
        return 'please provude object'
    }
    if (typeof (details["name"]) != 'string') {
        return 'please provide name sa string'
    }
    if (typeof (details["salary"]) != 'number') {
        return 'please provide salary as number'
    }
    if (typeof (details["contact"]) != 'number') {
        return 'please provide contact as number'
    }
    if (typeof (details["email"]) != 'string') {
        return 'please provide email sa string'
    }
    let id = employee.length + 1;
    let data = {
        name: details.name,
        salary: details.salary,
        contact: details.contact,
        email: details.email,
        id: id

    }
    employee.push(data);
    return data;
}

function list() {
    return employee
}

function details(id) {
    if (typeof (id) != 'number') {
        return 'provide id as no'
    }
    let data = employee[id - 1]
    if (typeof (data) != 'object') {
        return 'data not found'
    }
    return data
}
create({ name: 'Dolly', salary: 5000, contact: 1234567890, email: "dolly@gmail.com" })
create({ name: 'abc', salary: 5000, contact: 1234567890, email: "dolly@gmail.com" })
create({ name: 'def', salary: 5000, contact: 1234567890, email: "dolly@gmail.com" })

let read = details(1);
console.log(read);
let view = list();
console.log("list", view);
// console.log(create({ name: '12344' }));

function update(data, id) {
    if (typeof (id) != 'number' || id < 1) {
        return { error: "provide id in positive" }
    }
    if (typeof (data) != 'object') {
        return { error: 'provide data as object' }
    }
    let userdata = employee[id - 1]
    if (typeof (userdata) != 'object') {
        return { error: 'data not found' }
    }
    if (typeof (data.name) == 'string') {
        userdata.name = data.name
    }
    if (typeof (data.salary) == 'number') {
        userdata.salary = data.salary
    }
    if (typeof (data.contact) == 'number') {
        userdata.contact = data.contact
    }
    if (typeof (data.email) == 'string') {
        userdata.email = data.email
    }
    employee[id - 1] = userdata;
    return { data: userdata }

}
let udsum1 = update({ name: "dolly" }, 1)
console.log(udsum1)

function deleteEmp(id) {
    if (typeof (id) != 'number') {
        return 'provide id as number'
    }
    let data = employee[id - 1];
    if (typeof (data) != 'object') {
        return 'data not found'
    }
    delete employee[id - 1];
    return true
}
a = deleteEmp(1);
console.log('delete', a);