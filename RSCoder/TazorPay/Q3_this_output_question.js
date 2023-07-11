// 'this' output question

const user = {
  name: "Sachin",
  greet() {
    return `Hello, ${this.name}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}!`;
  },
};
console.log(user.greet()); // Hello Sachii!
console.log(user.farewell()); // Goodbye (Undefind or Nothing) !