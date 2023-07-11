Function.prototype.myApply = function(context, args) {
    context = context || window;
    const uniqueID = Symbol(); // Create a unique property name
    context[uniqueID] = this; // Assign the function to the context object
    let result;
    if ([args]) {
        result = context[uniqueID](...args); // Invoke the function with provided arguments
    } else {
        result = context[uniqueID](); // Invoke the function without arguments
    }
    delete context[uniqueID]; // Clean up the temporary property
    return result; // Return the result of the function invocation
};

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

let sum_result = sum.myApply(null, [5, 3]);
let subtract_result = subtract.myApply(this, [15, 3]);

console.log("sum_result---->", sum_result);
console.log("subtract_result---->", subtract_result);

let max_result = Math.max.myApply(null, [1,2,3]);
console.log("max_result---->", max_result)
