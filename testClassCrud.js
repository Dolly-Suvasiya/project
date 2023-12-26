
class Employee {
    #list = []
    create(details) {
        if (typeof (details) != 'object') {
            return 'provide details as object'
        }
        if (typeof (details.name) != 'string') {
            return 'provide name as  string'
        }
        if (typeof (details.email) != 'string') {
            return 'provide email as  string'
        }
        if (typeof (details.contact) != 'number') {
            return 'provide contact as  umber'
        }
        if (typeof (details.salary) != 'number') {
            return 'provide salary as  number'
        }


        let id = this.#list.length + 1;

        let data = {
            name: details.name,
            salary: details.salary,
            contact: details.contact,
            email: details.email,
            id: id
        }
        this.#list.push(data);
        return data;
    }

    //read
    view() {
        return this.#list;
    }



    details(id) {
        if (typeof (id) != 'number') {
            return 'provide id as no'
        }
        let data = employee[id - 1]
        if (typeof (data) != 'object') {
            return 'data not found'
        }
        return data
    }
    update(data, id) {
        if (typeof (id) != 'number' || id < 1) {
            return 'provide id as no or positive'
        }
        if (typeof (data) != 'object') {
            return 'provide data as in object'
        }
        let user = this.#list[id - 1];
        if (typeof (user) != 'object') {
            return 'data not found'
        }
        if (typeof (data.name) == 'string') {
            user.name = data.name;
        }
        if (typeof (data.email) == 'string') {
            user.email = data.email;
        }
        if (typeof (data.contact) == 'number') {
            user.contact = data.contact;
        }
        if (typeof (data.salary) == 'number') {
            user.salary = data.salary
        }
        this.#list[id - 1] = user

        return { data: user }

    }
    deleteEmp(id) {
        if (typeof (id) != 'number') {
            return 'provide id as number'
        }
        let data = this.#list[id - 1];
        if (typeof (data) != 'object') {
            return 'data not found'
        }
        delete this.#list[id - 1];
        return true
    }
}

let abc = new Employee;
abc.create({ name: "dolly", salary: 123456, contact: 1234567890, email: 'dolly@gmail.com' });
abc.create({ name: "dolly", salary: 123456, contact: 1234567890, email: 'abc.gmail.com ' });
abc.create({ name: "dolly", salary: 123456, contact: 1234567890, email: 'sdfgh@gmail.com ' });
abc.create({ name: "dolly", salary: 123456, contact: 1234567890, email: 'sdfgh@gmail.com ' });
console.log(abc.update({ email: "Dsuwasiya@gmail.cpm" }, 2));
console.log(abc.deleteEmp(1, 'delete'));

console.log(abc);
console.log('list', abc.view());

