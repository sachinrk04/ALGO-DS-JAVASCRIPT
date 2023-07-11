console.log("a"); // 1
setTimeout(() => console.log("set"), 0); // 4
Promise.resolve(() => console.log("pro")).then((res) => res()); // 3
console.log("b"); // 2

// Output:
// a
// b
// pro
// set