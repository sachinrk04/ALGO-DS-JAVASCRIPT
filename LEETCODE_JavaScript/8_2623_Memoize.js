function memoize(fn) {
    const cache = {};
    return function(...args) {
        const argsKey = JSON.stringify(args);

        if (argsKey in cache) {
            return cache[argsKey];
        }
        
        cache[argsKey] = fn(...args);
        return cache[argsKey];
    };
};

// const num = [[2,2],[2,2],[],[1,2],[]];
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// console.log(memoizedSum(2,2))


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 
