class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {};
    }

    draw() {
        console.log("draw");
    };
}

// const c =  Circle(1) //  Class constructor Circle cannot be invoked without 'new'.
const c = new Circle(1)
console.log("c-->", c);
console.log("type-of--->", typeof Circle) // function