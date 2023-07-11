// Output ?

console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false

// Value of both result is false.
// Becouse both object are in different space memory.
// Both are independent object.

// Note: if reference of to each other then it will be equal (true)