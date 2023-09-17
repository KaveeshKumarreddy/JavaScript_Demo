// //________________________ Exports & Imports _________________
// import abc from "./util.js";

// import { api as content } from "./util.js";

// import * as props from "./util.js";

// console.log("the default export is " + abc);

// console.log("the named export is " + content);

// console.log("the object of props are " + props.api);

// //________________________ Normal Functions  _________________

// function createGreeting(name, msg = "Hello !") {
//   return "I am " + name + ", " + msg;
// }

// const greeting1 = createGreeting("kavi");
// console.log(greeting1);
// const greeting2 = createGreeting("Kaveesh", "how are you");
// console.log(greeting2);

// //_________________________ Arrow Functions ___________________

// const arrow = (name, msg = "Hello !") => {
//   return "I am " + name + " in arrow function, " + msg;
// };

// const greeting3 = arrow("kavi");
// console.log(greeting3);

// //_______________________ Objects and class ___________________

// const person = {
//   name: "kavi",
//   age: 25,
//   details() {
//     return "My name is " + this.name + " and My age is " + this.age;
//   }
// };

// console.log(person.name + " " + person.age + " " + person.details());

// class PersonClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   details() {
//     return "My name is " + this.name + " and My age is " + this.age;
//   }
// }

// let personClass = new PersonClass("kavi", 25);
// console.log(personClass);
// console.log(personClass.details());

// //_________________________ Arrays and Array Methods ________________
// const values = ["sports", "hobbies", "study"];

// const index = values.findIndex((item) => {
//   return item === "sports";
// });

// console.log("the sports index is " + index);

// const modifiedValues = values.map((item) => {
//   return item + "!";
// });

// console.log(modifiedValues);

// const modifiedValues1 = values.map((item) => {
//   return { text: item };
// });

// console.log(modifiedValues1);

// //___________________________Array and Object Destructuring __________________
// //Normal Array:
// const arr = ["kavi", "kumar"];
// let name = arr[0];
// let last = arr[1];
// console.log(name + " " + last);
// // Array Destructuring :

// const [name1, last1] = ["kavi", "kumar"];
// console.log(name1 + " " + last1);

// // normal Object:
// const obj = {
//   name: "kavi",
//   last: "kumar"
// };

// let name2 = obj.name;
// let last2 = obj.last;
// console.log(name2 + " " + last2);

// const { name: userName, last3 } = {
//   name: "kavi",
//   last3: "kumar"
// };

// console.log(userName + " " + last3);

// //______________________________ Spread Operator __________________

// const oldArr = ["Hi", "Hello"];

// const newArr = ["Namste", ...oldArr];

// console.log(newArr);

// const oldObj = {
//   key2: "Hello"
// };

// const newObj = {
//   key1: "namaste",
//   ...oldObj
// };

// console.log(newObj);

// //__________________________________ Prompt _________________________

// const password = prompt("");

// if (password === "Hello") {
//   console.log("Hello is a valid Password");
// } else if (password === "hello") {
//   console.log("hello is a valid Password");
// } else {
//   console.log("Invalid password !!!");
// }

// //__________________________passing function to a function________________

// function timeout() {
//   console.log("Time Out !!!");
// }

// const timeout1 = () => {
//   console.log("Timed out again !!!");
// };

// setTimeout(timeout, 3000);
// setTimeout(timeout1, 5000);
// setTimeout(() => {
//   console.log("More Time Out !!!");
// }, 7000);

// function greet(fn) {
//   fn();
// }

// greet(() => {
//   console.log("Hi Everyone");
// });

//__________________________Function in a Function______________________

function init() {
  function greet() {
    console.log("Hi");
  }
  greet();
}

init();

console.log("Adding a new low to check the commit from sandbox to Git");
