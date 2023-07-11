const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }

    draw() {
        console.log("Circle with radius " + _radius.get(this));
    }
}

const c = new Circle(10);
console.log("_radius-->", _radius.get(c));
c.draw();