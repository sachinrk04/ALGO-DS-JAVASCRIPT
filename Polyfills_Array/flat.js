Array.prototype.myFlat = function (depth) {
    let flattenArray = [];
    function flatten(arr, dp) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && dp > 0) {
                flatten(arr[i], dp - 1);
            } else {
                flattenArray.push(arr[i]);
            }
        }
    }
    flatten(this, depth === undefined ? 1 : depth);
    return flattenArray;
}

const nestedArr = [[1], [[1, 4, [5, 3]], [1, 2, 3, [3, 4, [2, [22, [3, 4, 5, 6, 5, [2]]]]], 4]]];
const flat = nestedArr.myFlat(4);
console.log("myFlat--->",flat);