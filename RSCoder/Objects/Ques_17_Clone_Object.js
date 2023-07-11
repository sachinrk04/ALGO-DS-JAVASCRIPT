// 3 Ways to clone an Object
let user = {
    name: "Ram",
    age: 24,
}

// Method-1
// const objClone = Object.assign({}, user);

// Method-2
// const objClone = JSON.parse(JSON.stringify(user));

// Method-3
const objClone = { ...user };

objClone.name = "Shyam";

console.log("user--->", user)
console.log("objClone--->", objClone)