function myMemoize(fn, context) {
    const res = {};
    return function (...args) {
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args);
        } 
        return res[argsCache];
    };
};

const clumsysquare = (num1, num2) => {
    for (let i = 0; i <= 100000000; i++) {}
    return num1 * num2;
};

const memoized = myMemoize(clumsysquare)

console.time("First call");
console.log("memoized-First-->", memoized(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log("memoized-Second-->", memoized(9467, 7649));
console.timeEnd("Second call");