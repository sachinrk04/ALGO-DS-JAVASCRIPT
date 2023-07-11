// Output ?

const settings = {
    username: "Sachin",
    level: 19,
    health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log("Data---->", data); //  {"level":19,"health":90}