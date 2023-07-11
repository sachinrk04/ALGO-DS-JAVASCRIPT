function once(fn) {
    let callFn = false;

    return function(...args) {
        if (callFn) {
            return undefined
        }
        callFn = true;
        // return fn(...args);
        // or
        return fn.apply(this, args);
    }
};

const fn = (a,b,c) => (a + b + c);
const calls = [[1,2,3],[2,3,6]];

let onceFn = once(fn)
const callOne = onceFn(1,2,3); // 6
console.log("callOne---->", callOne)
let callTwo = onceFn(2,3,6); // returns undefined without calling fn
console.log("callTwo---->", callTwo)

// Method-2

function onceMethodTwo(fn) {
    let callFn = false;

    return function(...args) {
        if (!callFn) {
            callFn = true;
            return fn.apply(this, args);
        }
    }
}
