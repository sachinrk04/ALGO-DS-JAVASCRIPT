// // 'use strict';

// const Circle = function() {
//     this.draw = function() { console.log(this); };
// }

// const c = new Circle();
// // Method Call
// c.draw() // point to circle object

// const draw = c.draw;
// // Function Call
// draw(); // point to window object
// // if we use 'use strict' --> undefined


class Circle {
    draw() {
        console.log(this);
    }
};

const c = new Circle();
const draw = c.draw;
draw(); // undefined --> becouse body of class excuted in strict mode.
