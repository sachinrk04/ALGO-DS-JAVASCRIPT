function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    // get value out side of it's function.
    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function() {
        console.log("draw");
    };

    // getter and setter function 
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            console.log("value---->", value)
            if (!value.x || !value.y) 
                throw new Error("Invalid location");

            defaultLocation = value;
        }
    });
};

const circle = new Circle(10);
let getLocation = circle.getDefaultLocation(); // get a private value of the function.
console.log("getLocation-->", getLocation) // { x: 0, y: 0 }
circle.draw();

// circle.defaultLocation = { x: 10 } // throw error.
// circle.defaultLocation = { y: 10 } // throw error.
circle.defaultLocation = { x: 10, y: 2 } // set value.(It will didn't throw an error)
let getterValue = circle.defaultLocation;
console.log("getterValue--->", getterValue)