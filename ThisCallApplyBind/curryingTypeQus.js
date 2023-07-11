function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a
    }
};

let res = add(5)(2)(4)(-8)();
console.log(res)