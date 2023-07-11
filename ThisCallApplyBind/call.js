// Diff-
// The call() method calls the function with a given this value and arguments provided individually.

Function.prototype.myCall = function(context, ...args) {
    console.log("arguments--->", arguments)
    context = context || window;
    const uniqueID = Symbol(); // Create a unique property name
    context[uniqueID] = this; // Assign the function to the context object
    const result = context[uniqueID](...args) // Invoke the function with provided arguments
    delete context[uniqueID]; // Clean up the temporary property
    return result
}

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

let sum_result = sum.myCall(this, 5, 3);
let subtract_result = subtract.myCall(this, 5, 3);

console.log("sum_result---->", sum_result);
console.log("subtract_result---->", subtract_result);

function fullName(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
}

const person1 = {
    firstName:"John",
    lastName: "Doe"
}

let person_result = fullName.myCall(person1, "Oslo", "Norway");
console.log("person_result--->", person_result)
