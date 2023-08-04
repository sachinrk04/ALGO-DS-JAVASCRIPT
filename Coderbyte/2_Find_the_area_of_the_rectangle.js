// Question--------------
// Have the function ArrayChallenge(strArr) take the array of strings stored in strArr,
// which will only contain 4 elements and be in the form(x y) where x and y are both
// integers, and return the area of the rectangle formed by the 4 points on a Cartesian
// grid.The 4 elements will be in arbitrary order.For example: if strArr is
// ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the width 
// of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the
// width * height.

// Approch---------
// To find the area of the rectangle formed by the four points on a Cartesian grid, you need 
// to follow these steps:

// 1. Parse the coordinates of the four points from the strArr input.
// 2. Find the minimum and maximum x and y values among the four points.
// 3. Calculate the width and height of the rectangle using the min and max x and y values.
// 4. Calculate the area of the rectangle by multiplying the width and height.


function rectangleArea(strArr) {
    function parseCoordinates(coordStr) {
      // Remove the parentheses and split the coordinates
      const [x, y] = coordStr.slice(1, -1).split(' ');
      return { x: parseInt(x), y: parseInt(y) };
    }

    // Step 1: Parse the coordinates of the four points
    const point1 = parseCoordinates(strArr[0]);
    const point2 = parseCoordinates(strArr[1]);
    const point3 = parseCoordinates(strArr[2]);
    const point4 = parseCoordinates(strArr[3]);

    // Step 2: Find the minimum and maximum x and y values
    const minX = Math.min(point1.x, point2.x, point3.x, point4.x);
    const maxX = Math.max(point1.x, point2.x, point3.x, point4.x);
    const minY = Math.min(point1.y, point2.y, point3.y, point4.y);
    const maxY = Math.max(point1.y, point2.y, point3.y, point4.y);

    // Step 3: Calculate the width and height of the rectangle
    const width = maxX - minX;
    const height = maxY - minY;

    // Step 4: Calculate the area of the rectangle
    const area = width * height;

    return area;
}

console.log(rectangleArea(["(0 0)", "(3 0)", "(0 2)", "(3 2)"]));
// Output: 6
