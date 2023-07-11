function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw")
    }
}

const circle = new Circle(10);

for (let key in circle) {
    if (typeof circle[key] !== 'function') {
        console.log(`${key} is not function---->`, circle[key])
    } else {
        console.log(`${key} is function---->`, circle[key]);
        circle[key]();
    }
}

const keys = Object.keys(circle);
console.log("keys--->", keys)

if ("radius" in circle) {
    console.log("Circle has in radius.")
}