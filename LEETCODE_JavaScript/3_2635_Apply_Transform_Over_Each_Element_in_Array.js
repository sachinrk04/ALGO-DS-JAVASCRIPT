function map(arr, fn) {
    let res = new Array(arr.length);

    for (const i in arr) {
        res[i] = fn(arr[i], Number(i));
    }
    return res;
}

map(arr = [1,2,3], fn = function plusone(n) { return n + 1; });
map(arr = [1,2,3], fn = function plusI(n, i) { return n + i; });
map(arr = [10,20,30], fn = function constant() { return 42; });