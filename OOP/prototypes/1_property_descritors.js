// let person = { name: "Sachin" };
// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
// console.log("---->", descriptor)


let person = { name: "Sachin" };
Object.defineProperty(person, "name", {
    writable: false,
    enumerable: false,
    configurable: false
})

// writable
person.name = "SS";
console.log("writable--->", person) // writable: false so we can not edit name value.

// enumerable
console.log("enumerable--->", Object.keys(person)) // enumerable = false so it will not show keys property.

// configurable
delete person.name;
console.log("configurable--->", person) // configurable: false so we can not delete name key.