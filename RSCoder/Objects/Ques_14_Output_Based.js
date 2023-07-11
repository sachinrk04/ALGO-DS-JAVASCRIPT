// Output ?

const value = { number: 10 };

const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
};

multiply(); // 20
multiply(); // 20
multiply(value); // 20
console.log("value--->", value) // it will be change the object value const value = { number: 20 };
multiply(value); // 40 becouse number = 20 after 3rd call.