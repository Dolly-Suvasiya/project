let employee = [];
function create(details) {
    if (typeof (details) != 'object') {
        return 'provide details as object'
    }
    if (typeof (details.name) != 'string') {
        return 'please provide name as string'
    }
    if (typeof (details.email) != 'string') {
        return 'please provide email as string'
    }
    if (typeof (details.salary) != 'number') {
        return 'please provide salary as string'
    }
    if (typeof (details.contact) != 'number') {
        return 'please provide contact as string'
    }
    let id = employee.length + 1;
    let data = {
        name: details.name,
        email: details.email,
        contact: details.contact,
        salary: details.salary,
        id: id
    }
    employee.push(data);
    return data
}

function list() {
    return employee
}
function details(id) {
    if (typeof (id) != 'number') {
        return 'provide id as number'
    }

    let data = employee[id - 1]
    if (typeof (data) != 'object') {
        return 'provide data as object'
    }
    return data
}

//update

function update(data, id) {
    if (typeof (id) != 'number' || id > 1) {
        return 'provide id as a positive as'
    }
    if (typeof (data) != 'object') {
        return 'data not found'
    }
    let updateData = employee[id - 1]
    if (typeof (data.name) == 'string') {
        updateData.name = data.name;
    }
    if (typeof (data.email) == 'string') {
        updateData.email = data.email;
    }
    if (typeof (data.salary) == 'number') {
        updateData.name = data.salary;
    }
    if (typeof (data.contact) == 'number') {
        updateData.contact = data.contact;
    }
    employee[id - 1] = updateData;
    return data
}

function deleteEmp(id) {
    if (typeof (id) != 'number') {
        return 'provide id as number'
    }

    let data = employee[id - 1];
    if (typeof (data) != 'object') {
        return 'data not found for delete'
    }
    delete employee[id - 1];

    return true
}

console.log(create({ name: 'dolly', email: 'dolly@gmail.com', salary: 20000, contact: 1234567890 }),
    create({ name: 'Dolly', email: 'dolly@gmail.com', salary: 20000, contact: 1234567890 }),
    create({ name: 'DOLLY', email: 'dolly@gmail.com', salary: 20000, contact: 1234567890 }),
    create({ name: 'dOLLY', email: 'dolly@gmail.com', salary: 20000, contact: 1234567890 }));


let read = details(1)
console.log('details called', read);
let view = list();
console.log('list called', view)


//check for updata
let user1 = update({ name: "Priya", email: "priya@gmail.com" }, 1)
console.log("update called", user1)

//for delete
let ab = deleteEmp(1);
console.log(ab);

console.log(employee)