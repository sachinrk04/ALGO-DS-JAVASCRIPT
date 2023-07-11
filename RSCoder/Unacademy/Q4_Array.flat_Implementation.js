// Q4 - Flatten the Array

let arr = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]];


// Method-1
let Method_1_flatArr = arr.flat();
console.log("Method_1_flatArr--->", Method_1_flatArr);

// Method-1 - Custom Method

Array.prototype.myFlat = function(depth) {
    let flatArray = [];
    function flatten(arr, dp) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && dp > 0) {
                flatten(arr[i], dp - 1)
            } else {
                flatArray.push(arr[i])
            }
        }
    }
    flatten(this, depth === undefined ? 1 : depth);
    return flatArray;
}

let Method_2_flatArr = arr.myFlat();
console.log("Method_2_flatArr--->", Method_2_flatArr);