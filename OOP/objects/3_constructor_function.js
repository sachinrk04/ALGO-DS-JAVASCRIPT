function Circle(radius) {
    console.log("this-->", this); // {} if we use new Circle(1) then it will be output: {};
    this.radius = radius;
    this.draw = function() {
        console.log("draw")
    }
}

const another = new Circle(1);