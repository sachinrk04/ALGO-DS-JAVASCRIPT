// diff- 
// The bind() method creates a new function that, when called, has its 
// this keyword set to the provided value, with a given sequence of 
// arguments preceding any provided when the new function is called.

Function.prototype.myBind = function (context, ...args) {
    const fn = this; // The original function
    return function(...innerArgs) {
        return fn.apply(context, args.concat(innerArgs)); // Invoke the original function with merged arguments
    }
}

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

let name = {
    a: 10,
    b: 5,
};

let sum_result = sum.myBind(this, 3, 6);
let subtract_result = subtract.myBind();

console.log("sum_result---->", sum_result());
console.log("subtract_result---->", subtract_result(15, 3));