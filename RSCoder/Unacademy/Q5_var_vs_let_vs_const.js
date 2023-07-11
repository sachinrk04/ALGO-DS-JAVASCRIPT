// var - function or global scope
// let and const - block scope {}

var a = 5;
var a = 10;

console.log("a--->", a) // 10

let b = 5;
b = 10;
// in the "let" we can re-initilization;

const c = 10;
// in the "const" we can't re-initilization;