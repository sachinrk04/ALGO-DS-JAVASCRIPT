function Circle(radius) {
    this.radius = radius;

    this.move = function() {
        console.log("move");
    }
}

const c1 = new Circle(1);

// Prototype members
Circle.prototype.draw = function() {
    console.log("draw");
}

c1.draw();

// Object.keys() only return instance members.
console.log("Object.keys-->",Object.keys(c1)); // ['radius', 'move'] --> here not show draw key becouse draw is a prototype member.

// for in loop will return all keys members (instance + prototype).
for (let key in c1) console.log("keys-->", key)
// radius
// move
// draw

c1.hasOwnProperty("radius") // true --> Becouse radius is a own property.
c1.hasOwnProperty("draw") // false --> Becouse radius is a prototype members.