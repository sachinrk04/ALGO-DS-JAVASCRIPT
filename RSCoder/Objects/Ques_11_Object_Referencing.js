// Output ?

let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log("Output--->", d.greeting); // Hello
// Becouse value of "d" is reference of "c" and c.greeting = "Hello" so value of d.greeting = "Hello".