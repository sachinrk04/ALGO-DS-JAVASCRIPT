function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw")
    }
}

const circle = new Circle(10);

// adding new property.
circle.location = { x: 1 };
// circle.location = { y: 1 }; // it will be replace the location value { x: 1 } ---> { y: 1 }
// circle.location.y = 1;

// const propertyName = "center location";
// circle[propertyName] = {x: 1}


// removing new property.
delete circle['location'];