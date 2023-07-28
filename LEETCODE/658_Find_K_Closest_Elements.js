function findClosestElements (arr, k, x) {
    let left = 0;
    let right = arr.length - k;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if ( x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    };

    return arr.slice(left, left + k);
};

const arr = [1, 2, 3, 4, 5];
const k = 3;
const x = 3;
console.log(findClosestElements(arr, k, x));