// call, bind and apply

var person = {
    name: "Call Apply Bind",
    hello: function (thing) {
        console.log("hello---->", this.name + " say hello " + thing);
    }
}

var alterEgo = {
    name: "Sachin Singh",
};

person.hello("world"); // Call Apply Bind say hello world

// call
person.hello.call(alterEgo, "world"); // Sachin Singh say hello world

// apply
person.hello.apply(alterEgo, ["world"]); // Sachin Singh say hello world

// bind
const bindFun1 = person.hello.bind(alterEgo); // return a new function
bindFun1("world bind 1"); // Sachin Singh say hello world bind 1

const bindFun2 = person.hello.bind(alterEgo, "world bind 2"); // return a new function
bindFun2(); // Sachin Singh say hello world bind 2

const bindFun3 = person.hello.bind(alterEgo, "world bind test 3"); // return a new function
bindFun3("world bind 3"); // Sachin Singh say hello world bind test 3