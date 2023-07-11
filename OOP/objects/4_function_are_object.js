// function is a object.
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw")
    }
}

Circle.call({}, 1) // in the above function 'this' will target {} object.

const another = new Circle(1);