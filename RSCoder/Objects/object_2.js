const func = (function (a) {
    delete a;
    return a;
})(5);

console.log(func) // 5

// 'delete' key will be delete in object key not a local variable and 'a' is local variable.