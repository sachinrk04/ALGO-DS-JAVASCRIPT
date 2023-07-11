// Output ?

const a = {};
const b = {key: "b"};
const c = {key: "c"};

a[b] = 123;
a[c] = 456;

console.log("output---->", a); // { [object Object] : 456 };
console.log("output---->", a[b]); // 456;

// why output is 456 ?

a["[object Object]"] = 123;  // b = "[object Object]"
a["[object Object]"] = 456;  // c = "[object Object]"

// b === c 
// So 
// a[b] = 456
