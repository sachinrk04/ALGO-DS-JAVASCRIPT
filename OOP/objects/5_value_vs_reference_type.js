// Primitives are copied by their value.
// Object are copied by their reference.

let x = 10;
let y = x;

x = 20;

console.log("x---->", x); // 20
console.log("y---->", y); // 10

// use object

let a = { value: 10};
let b = a;

a.value = 20;

console.log("a---->", a); // {value: 20}
console.log("b---->", b); // {value: 20}
// a and b are pointing same memory object.

// Example-1
let number = 10;
function increase(number) {
    number++;
}
increase(number);
console.log("number---->", number)

// Example-2
let obj = { value: 10 };
function increase(obj) {
    obj.value++;
}
increase(obj);
console.log("obj---->", obj)