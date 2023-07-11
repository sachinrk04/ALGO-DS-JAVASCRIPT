function Shape(color) {
    this.color = color
}

Shape.prototype.duplicate = function() {
    console.log("duplicate");
};

function Circle(radius, color) {
    Shape.call(this, color); // super constructor
    this.radius = radius;
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log("draw");
};

const s = new Shape();
const c = new Circle(1, "red");

console.log("Circle-->", c) // {radius: 1} --> without call method
console.log("Circle-->", window.color) // red

console.log("Circle-use call->", c) // {color: 'red', radius: 1} --> with call method
console.log("Circle-use call->", window.color) // undefind;
