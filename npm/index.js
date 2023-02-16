// -------------------Super Dream fit training Notes-----------


// console.log("Learning Javascript");

// let a = 10;   //let is a keyword to decalre variable
// // let a = 11;   //redeclaration -  let keyword does not allow
// // but we can reassign it

// a = 11;
// console.log(a);

// var a = 10;
// console.log(a);

// var a = 20;
// console.log(a);


// const b = 10;    only declare, not redeclare and reassign
// console.log(b);
// b = b + 1;
// console.log(b);


// NOTE:-

// Undefined is a datatype in JS

// let a = 10;    //For variable, any datatype can be assigend in JS, No type restriction is there
// a = "Welcome";
// console.log(a);





// number - 64 bits in JS


// let a = 10;
// let b = "Tharun";
// let c;
// let isAvailable = true;


// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof isAvailable);


// collection of key-value pairs - Object

//user is a object

// let user = {

//     firstName: "Tharun",
//     lastName: "S",
//     age: "21",
//     isAdmin: true

// }
// console.log(user);
// console.log(user.firstName);
// console.log(user.lastName);



//Functions in JS  - building block of a program

// getName is a function name with no parameter

// function getName(firstName) {
//     // console.log("Tharun");
//     // console.log(firstName);
//     return firstName + "! Hi";
// }


// let result = getName(user.firstName);   //calling the function

// console.log(result);



// ----------------Arrays---------------

// In JS it is heterogeneous, continusly allocated in the memory - any datatype can be stored


// let array = [10, 20, 30, 40, "ABC", user];
// console.log(array);
// console.log(array[0]);
// array.push(true);  //new Element added in the array
// console.log(array);


// If - else clause--------

// let age = '21'

// if (age == 21) {
//     console.log("Not Eligible");
// } else {
//     console.log("Eligible");
// }



// == -------> check the values of the operand.
// === ------> check the types of the operands.


// for loop-----------
// data = [10,true,"kishroe",{name:"jay", roll:251}]
// for(let it=0; it<data.length; it++)
// console.log(data[it]);


// Topics to learn

// Process.argv

// npm modules

// create own realy - lrge - application

// REPL

// file operations

// promises

// async nodejs

// async / await

// web server

// JSON

// returning different DATA

// rendering HTML file using web server

// rendering HTML according to routes

// EVENT - EVENT EMITTERS (optional)



// In backend - REST API is so called

// NOTE:

// Git and Github to master



// let returnSomething = (num1, num2) => {
//     let a = 10;
//     console.log(num1 + num2);
// }

// returnSomething(10, 20);


// // argv['', ''] - Array datatype

// console.log(process);

// console.log(process.argv[2]);



// Functions

// let addition = (num1, num2) => {
//     console.log(num1 + num2);
// }

// let sub = (num1, num2) => {
//     console.log(num1 - num2);
// }

// let multiple = (num1, num2) => {
//     console.log(num1 * num2);
// }


// let div = (num1, num2) => {
//     console.log(num1 / num2);
// }


// // In terminal argument getting
// let operation = process.argv[2];
// let num1 = parseInt(process.argv[3]);
// let num2 = parseInt(process.argv[4]);


// console.log(typeof process.argv[4]);

// addition(num1, num2);
// sub(num1, num2);

// // operation - variable

// function init() {
//     switch (operation) {
//         case '+': addition(num1, num2);
//             break;
//         case '-': sub(num1, num2);
//             break;
//         case '*': multiple(num1, num2);
//             break;
//         case '/': div(num1, num2);
//             break;
//     }
// }

// init();    //when we call init, it will check the operation and execute it  - init is a default constructor

// NOTE:

// REPL - read evaluate process or (print) loop

// version control system - GIT tool

// existing version to not break So using GIT tool

// MIT, Apache, ISC - types of licenses




// commands------------
// 1. mkdir npm
// 2. cd npm
// 3. npm init

// API - Postman  - to learn




//constructor 

// class Color {
//     constructor(name, code) {
//         this.name = name;
//         this.code = code;
//     }
// }


// let blackColor = new Color('black', '#000000');
// console.log(blackColor);



// let allColors = [
//     new Color('groovygrapy', '#D7DBDD'),
//     new Color('Red', '#FF0000'),
//     new Color('Blue', '#0000FF'),
//     new Color('Yellow', '#FFFF00')
// ]



// exports.getRandomColors = () => {
//     return allColors[Math.floor(Math.random() * allColors.length)];
// }

// exports.allColors = allColors;



// const getRandomColors = () => {
//     return allColors[Math.random()]
// }

// console.log(getRandomColors());





// ------file operations------------


// -------------Read operation------

// const fs = require('fs');

// fs.readFile(`${__dirname}/pet.txt`, (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// });


// -------------Write operation------

const fs = require('fs');

fs.writeFile(`${__dirname}/pet1.txt`, ('boxer','pomeriyandog'),(err) => {
    if (err) {
        console.log("Error happened")
        return;
    }

    console.log("Saved data successfully");
})


// -------------Delete operation------

