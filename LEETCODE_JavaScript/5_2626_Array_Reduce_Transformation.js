function reduce(nums, fn, init) {
    let accum = init;

    for (let i = 0; i < nums.length; i++) {
        accum = fn(accum, nums[i]);
    }

    return accum;
}

const nums = [1,2,3,4];
const fn = function sum(accum, curr) { 
    return accum + curr; 
};
const init = 0;

const fnResult = reduce(nums, fn, init);
console.log("fnResult--->", fnResult);