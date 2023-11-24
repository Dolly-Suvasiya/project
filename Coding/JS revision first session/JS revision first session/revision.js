
const topicsCovered = [
    'Introduction',
    'Compiler and Interpreter',
    'Datatypes',
    'Memory Optimization',
    'Variable Declaration Types',
    'Operators and its types',
    'Arithmatic Operators, Conditional Operators',
    'Prompt, Console and Alert functions',
    'DOM APIs and DOM structure',

    'Conditional Statements',
    'Looping Statements',
    'For...of and For...in',
    'String in-built functions',
    'Number in-built functions',
    'Math in-built functions',
    'Array in-build functions',
    'Array Initiate/Edit',
    'Array Search',
    'Array Transformation',
    'Events and Event Registration',
    'Function and Function Types',
    'Function Arguments',
    'HOC and Callback Functions',
    'Class and OOPs',
    'Class Inheritance',
    'Class Method Overriding',
    'Promise Overview',
]

// Introduction
- It is a scripting language
- Javascript engine is required
- Chrome/Brave/Chromium -> V8 engine is used via Node to run javascript on any application, Safari -> JavaScript Core, Mozilla -> Spider Monkey
- Node: Runtime environment provide karta hai
- Node.Js: Native functionality access, ex. FileSystem
- NPM: package manager, to host any package which is built using nodejs and runs with Node. Also helps to execute scripts,
       npm install <package_name> - to install package
       npm uninstall <package_name> - to uninstall package
       npm run application - to run script called application
- It is mainly a Client side language
- With help of Node it can be executed on Server side

// Compiler and Interpreter (Just-in-Time Compiler provided by Node)
- both are used to convert High Level Language (English | Human readable language) into Low Level Language (machine/computer/code level language 1s and 0s)
- Compiler -> executes complete code at once 
- Interpreter -> executes code line by line
- JIT - takes specific code blocks from code and compiles it line by line

// Datatypes
- Primitive - Defined by Javascript from begining | String, Number, boolean, Null, Undefined | by value
- Non Primitive - User Defined | Array, Object, Function | by reference

- String: anything written inside a quote or double quote, '12Av`;[]' | "[a,b]"
- Number: any numeric value, 1, -1, 0.234, 1e
- Boolean: true (1) | false (0) | a = true, a = !0, a = !'', a = !null
- Null: null - to reset a value
- Undefined: default value for any Declaration

- Array: to create collection of data | can consist of any datatype | can consist of multiple Datatypes | values can be referred using index (numeric)
    | index value always starts from 0 goes till n
 [1, 2, 3, 4] // Array of Number
 [{ name: 'User1' }, { name: 'User 2' }] // Array of Objects
 ['A', 'B'] // Array of Strings
 [1, true, 'B', { name: 'User1' }] // Mixed Array
- Object: to create set of data | key-value pair | value can be of any data type | object can have nested structure | values can be referred using key
 | for Defined keys we can use dot operator | for new keys to add we have to use [] operator
 const user = {
    firstname: 'UserFirstName',
    lastname: 'UserLastName',
    age: 12,
    isStudent: true,
    subjects: ['html', 'css', 'js'],
    address: {
        pincode: 400612,
        city: 'Thane',
        country: {
            name: 'India',
            lat: '',
            long: ''
        }
    }
 }
// read 
user.firstname // UserFirstName
user.address.city // Thane

// write
user.firstname = 'Amir'
user.address.city = 'Mumbai'

// write using new key 
user['dob'] = '08-01-1994';


// Memory Optimization
// use appropriate data types for variable Declaration
'A' -> 67
'a' -> 120
// option 1
let age = 10;
age = 20;

// option 2
let age = '10';

// make use of object for large data set
let username = 'UserFirstName';
let age = 12;

console.log(username)
console.loe(age)

let user = {
    username: 'UserFirstName',
    age: 12,
}
console.log(user.username)
console.log(user.age)


// Variable Declaration Types | let | const | var
// both can be updated
var -> global scope 
let -> parent/block scope {... let ...} x...

var user; // declaration of a variable
user = 'Amir' // assigning a value to a variable

// 
const -> this is a constant value | works as readonly after initialization


// Operators and its types
Arithmatic -> + | - | / | * | % | ++ | --
Shorthand -> += | -= | /= | *= | %= 
Comparison -> > | < | >= | <= | == | === | != | !==
logical -> && (AND) | || (OR)


// Prompt, Console and Alert functions
//
prompt -> used to show an input inside an alert box and get input from user
const answer = prompt('question statement');

//
console 
.log(args) -> to print statement without highlight
.warn(args) -> to print statement with warning highlight
.error(args) -> to print statement with error hightlight
.table(args (Object|Array)) -> to print statement in table format

// 
Alert -> used to show an alert message
Alert('Welcome');

//
Confirm -> used to show an alert message and get confirmation from user
returns a boolean value as true | false


// DOM APIs and DOM structure
// DOM Tree

// DOM selectors APIs
document.querySelector // single selector
document.querySelectorAll // multiple selector [Elements]
document.getElementById // single selector
document.getElementsByClassName // multiple selector [Elements]
document.getElementsByTagName // multiple selector [Elements]

// DOM update
to read
const domElement = document.getElementById('provideIdName');
domElement.innerHTML
domElement.id
domElement.className

to update
domElement.innerHTML = '<h1>Some HTML here</h1>'
domElement.id = 'test id'
domElement.className = domElement.className + ' new-class-name'

