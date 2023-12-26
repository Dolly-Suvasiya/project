
//class Employee {
//     #list = []
//     create(details) {
//         if (typeof (details) != 'object') {
//             return 'provide details as object'
//         }
//         if (typeof (details.name) != 'string') {
//             return 'provide name as  string'
//         }
//         if (typeof (details.email) != 'string') {
//             return 'provide email as  string'
//         }
//         if (typeof (details.contact) != 'number') {
//             return 'provide contact as  umber'
//         }
//         if (typeof (details.salary) != 'number') {
//             return 'provide salary as  number'
//         }


//         let id = this.#list.length + 1;

//         let data = {
//             name: details.name,
//             salary: details.salary,
//             contact: details.contact,
//             email: details.email,
//             id: id
//         }
//         this.#list.push(data);
//         return data;
//     }

//     //read
//     view() {
//         return this.#list;
//     }

//     details(id) {
//         if (typeof (id) != 'number') {
//             return 'provide id as no'
//         }
//         let data = employee[id - 1]
//         if (typeof (data) != 'object') {
//             return 'data not found'
//         }
//         return data
//     }

//     //update
//     update(data, id) {
//         if (typeof (id) != 'number' || id < 1) {
//             return 'provide id as positive value'
//         }
//         if (typeof (data) != 'object') {
//             return 'provide dsta as object'
//         }
//         let user = this.#list[id - 1]
//         if (typeof (user) != 'object') {
//             return 'data not found'
//         }
//         if (typeof (data.name) == 'string') {
//             user.name = data.name;
//         }
//         if (typeof (data.email) == 'string') {
//             user.email = data.email;
//         }
//         if (typeof (data.contact) == 'number') {
//             user.contact = data.contact;
//         }
//         if (typeof (data.salary) == 'number') {
//             user.salary = data.salary;
//         }
//         this.#list[id - 1] = user

//         return { data: user }
//     }

//     //delete

//     deleteEmp(id) {
//         if (typeof (id) != 'number') {
//             return 'provide id as number'
//         }
//         let data = this.#list[id - 1];
//         if (typeof (data) != 'object') {
//             return 'data not found'
//         }
//         delete this.#list[id - 1];
//         return true
//     }
// }
// let TCS = new Employee;
// TCS.create({ name: "dolly", salary: 123456, contact: 1234567890, email: 'sdfgh@gmail.com ' });
// TCS.create({ name: "dolly", salary: 123456, contact: 1234567890, email: 'sdfgh@gmail.com ' });
// TCS.create({ name: "dolly", salary: 123456, contact: 1234567890, email: 'sdfgh@gmail.com ' });
// TCS.create({ name: "dolly", salary: 123456, contact: 1234567890, email: 'sdfgh@gmail.com ' });

// // console.log(TCS);
// console.log('list', TCS.view());

// //update
// console.log(TCS.update({ email: 'dolly@gmail.com' }, 1));
// console.log(TCS.deleteEmp(1, 'delete'));


class Employee {
    #list = [];
    create(details) {
        if (typeof (details) != 'object') {
            return 'provide details as in pbject format'

        }
        if (typeof (details.name) != 'string') {
            return 'provide name as string'
        }

        if (typeof (details.email) != 'string') {
            return 'provide email as string'
        }
        if (typeof (details.salary) != 'number') {
            return 'provide salary as nmber'
        }
        if (typeof (details.contact) != 'number') {
            return 'provide contact as number'
        }

        let id = this.#list.length + 1;
        let data = {
            name: details.name,
            email: details.email,
            salary: details.salary,
            contact: details.contact,
            id: id
        }
        this.#list.push(data);
        return data;

    }
    view() {
        return this.#list
    }

}
let TCS = new Employee;
TCS.create({ name: 'dolly', email: 'xcfvbnmnnnnnnnnnn' });
TCS.create({ name: 'dolly', email: 'xcfvbnmnnnnnnnnnn' });
TCS.create({ name: 'dolly', email: 'xcfvbnmnnnnnnnnnn' });
// console.log(TCS)

