class Company {
    #userlist = [];
    //create
    register(users) {
        if (typeof (users) != 'object') {
            return 'provide details as object'
        }
        if (typeof (users.name) != 'string') {
            return 'provide name as  string'
        }
        if (typeof (users.email) != 'string') {
            return 'provide email as  string'
        }
        if (typeof (users.password) != 'string') {
            return 'provide password as  string'
        }
        if (typeof (users.contact) != 'number') {
            return 'provide contact as  umber'
        }
        if (typeof (users.age) != 'number') {
            return 'provide age as  number'
        }
        let id = this.#userlist.length + 1;
        let data = {
            name: users.name,
            email: users.email,
            password: users.password,
            contact: users.contact,
            age: users.age,
            id: id
        }


        this.#userlist.push(data);
        return data;
    }

    Allregisterd() {
        return this.#userlist;
    }


    login(email, password) {
        if (typeof (email) != 'string') {
            return ("provide email")
        }
        if (typeof (password) != 'string') {
            return ("provide user password as string")
        }
        // let userupdate = this.#userlist;
        // if (typeof (users) != 'object') {
        //     return 'data not found'
        // }
        //  if(typeof(data.email)=='string'){
        //      userupdate.email=data.email;
        //  }
        //  if(typeof(data.password)=='string'){
        //      userupdate.password=data.password;
        //  }
        for (let i in this.#userlist) {
            if (
                this.#userlist[i]["email"] == email &&
                this.#userlist[i]["password"] == password
            ) {
                this.#userlist[i]["is_login"] = true;
                break;
            }
        }
        return this.#userlist;
    }
}
let TCS = new Company;

TCS.register({ name: "dolly", email: "dolly1@gmail.com", password: "Dolly", age: 21, contact: 123456789 })
TCS.register({ name: "dolly", email: "dolly@gmail.com", password: "1234567890", age: 21, contact: 123456789 })
TCS.register({ name: "dolly", email: "dolly@gmail.com", password: "1234567890", age: 21, contact: 123456789 })
TCS.register({ name: "dolly", email: "dolly@gmail.com", password: "1234567890", age: 21, contact: 123456789 })
TCS.register({ name: "dolly", email: "dolly@gmail.com", password: "1234567890", age: 21, contact: 123456789 })
console.log(TCS.Allregisterd())
console.log(TCS.login("dolly1@gmail.com", "Dolly"))