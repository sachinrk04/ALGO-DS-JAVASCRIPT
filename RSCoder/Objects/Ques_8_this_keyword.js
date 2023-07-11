// Output ?

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => {
        console.log("this.radius-->", this.radius) // undefined
        return 2 * Math.PI * this.radius // NaN
    },
};

console.log("diameter--->", shape.diameter()); // 20
console.log("perimeter--->", shape.perimeter()); // NaN 

// Why output of shape.perimeter() is NaN ?
// Becouse perimeter() function is arrow function and arrow function will point to window object in the window 
// object this.radius is undefined
