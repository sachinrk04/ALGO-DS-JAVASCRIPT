const user = {
    name: "Sachin Singh",
    age: 24,
    isTotallyAwesome: true,
};

for (key in user) {
    console.log(`${key}---->`, user[key])
}