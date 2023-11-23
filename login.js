//login 
function logIn(contact, password) {
    if (typeof (contact) != 'number') {
        return 'please provide contact as number'
    }
    if (typeof (password) != 'string') {
        return 'please provide password as string'
    }
    return true;
}

let log = logIn(123, 'abc');
console.log(log)
