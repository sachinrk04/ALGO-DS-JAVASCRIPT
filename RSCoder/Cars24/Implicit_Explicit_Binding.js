var obj = {
  name: "Sachin",
  display: () => {
    console.log(this.name);
  },
};

var obj1 = {
  name: "ABC",
};

// obj.display();
obj.display.call(obj1);
