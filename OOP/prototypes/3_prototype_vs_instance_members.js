function Circle(radius) {
    // Instance members
    this.radius = radius;

    this.move = function() {
        this.draw();
        console.log("move");
    }
}

// Prototype members
Circle.prototype.draw = function() {
    console.log("draw");
}

const c1 = new Circle(1);
const c2 = new Circle(1);

let c1_toString = c1.toString();
console.log("c1_toString--->", c1_toString); // '[object Object]'

Circle.prototype.toString = function() {
    return "Circle with radius " + this.radius;
}
let c1_myToString = c1.toString();
console.log("c1_myToString--->", c1_myToString); //  Circle with radius 1

c1.move() // call move() function 
// draw
// move
