const user = {
    name: "Sachin",
    age: 24,
    "like this video": true
}

delete user.age;

console.log("like this video-->", user["like this video"])