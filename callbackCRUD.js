let employee = [];
function create(details, CB) {
    setTimeout(() => {
        if (typeof (details) != 'object') {
            return CB('provide object')
        }
        if (typeof (details["name"]) != 'string') {
            return CB('provide name as string')
        }
        if (typeof (details["email"]) != 'string') {
            return CB('provide email as string')
        }
        if (typeof (details["contact"]) != 'number') {
            return CB('provide contact as number')
        }
        if (typeof (details["salary"]) != 'number') {
            return CB('provide salary as number')
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
        return CB(null, data);
    }, 1000);
}

create({ name: 'Dolly', salary: 5000, contact: 1234567890, email: "dolly@gmail.com" }, (error, info) => {
    if (error) {
        return console.log('error', error)
    }
    return console.log('info', info);
})
create({ name: 'Dolly2', salary: 5000, contact: 1234567890, email: "dolly@gmail.com" }, (error, info) => {
    if (error) {
        return console.log('error', error)
    }
    return console.log('info', info);
})
create({ name: 'Dolly3', salary: 5000, contact: 1234567890, email: "dolly@gmail.com" }, (error, info) => {
    if (error) {
        return console.log('error', error)
    }
    return console.log('info', info);
})

//read 
function details(id, CB) {
    setTimeout(() => {
        if (typeof (id) != 'number') {
            return CB('provide id as no')
        }
        let data = employee[id - 1]
        if (typeof (data) != 'object') {
            return CB('data not found')
        }
        return CB(null, data);
    }, 1000);
}

details(2, (error, detailInfo) => {
    if (error) {
        return console.log('error', error)
    }
    return console.log('detailInfo', detailInfo)

})

//update
function update(data, id, CB) {
    setTimeout(() => {
        if (typeof (id) != 'number' || id < 1) {
            return CB("provide id in positive")
        }
        if (typeof (data) != 'object') {
            return CB('provide data as object')
        }
        let userdata = employee[id - 1]
        if (typeof (userdata) != 'object') {
            return CB('data not found')
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
        return CB(null, userdata)

    }, 1000)
}
update({ name: " DOLLY " }, 1, (error, updateInfo) => {
    if (error) {
        return console.log("error", error)
    }
    return console.log('updateInfo', updateInfo)
})

//delete
function deleteEmp(id, CB) {
    setTimeout(() => {
        if (typeof (id) != 'number') {
            return CB('provide id as number')
        }
        let data = employee[id - 1];
        if (typeof (data) != 'object') {
            return CB('data not found')
        }
        delete employee[id - 1];
        return CB(null, true)
    }, 1000)
}

deleteEmp(1, (error, deleteInfo) => {
    if (error) {
        return console.log("error", error)
    }
    return console.log("true", deleteInfo)
})



