// implement a function called CountUniqueValues, 
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in th array, but it will always be sorted.

// Method-1
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99]);

// Method-2
function countUniqueValues2(array) {
    if (array.length > 0) {
        let i = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[i] != array[j]) {
                i++;
                array[i] = array[j];
            }
        }
        return i + 1;
    } else {
        throw new Error("Array is Empty");
    }
}
const result = countUniqueValues2([1, 2, 2, 3, 3, 4, 4, 5, 5, 8, 8])
console.log(result)