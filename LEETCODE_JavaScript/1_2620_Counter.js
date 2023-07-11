// Given an integer n, return a counter function. This counter function initially returns n and then returns 
// 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// function method
function createCounter(n) {
    let counter = n;

    return function() {
        return counter++;
    }
}

const counter = createCounter(5);

console.log("createCounter--->",counter()); // Output: 5
console.log("createCounter--->",counter()); // Output: 6
console.log("createCounter--->",counter()); // Output: 7

// Class method
class Counter {
    constructor(n) {
        this.n = n;
    }

    increment() {
        return this.n++;
    }
}

const classCounter = new Counter(10);
console.log("classCounter--->", classCounter.increment()) // Output: 10
console.log("classCounter--->", classCounter.increment()) // Output: 11
console.log("classCounter--->", classCounter.increment()) // Output: 12
