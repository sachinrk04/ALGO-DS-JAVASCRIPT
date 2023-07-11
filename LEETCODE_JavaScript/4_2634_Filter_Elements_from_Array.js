function filter(arr, fn) {
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            res.push(arr[i]);
        }
    };

    return res;
}

const arr = [0,10,20,30];
const fn = function greaterThan10(n) { 
    return n > 10; 
};

const newArray = filter(arr, fn); 
console.log("newArray--->", newArray)
// [20, 30]
