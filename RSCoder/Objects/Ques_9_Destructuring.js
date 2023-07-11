// What is destructuring in objects ?

let user = {
    name: "Sachin",
    age: 24,
    fullName: {
        first: "Sachin",
        last: "Singh"
    },
};

const name = "Learn Objects"

const { name: myName, fullName: { first, last} } = user;

console.log("myName--->", myName); // Sachin
console.log("fullName-first-->", first); // Sachin