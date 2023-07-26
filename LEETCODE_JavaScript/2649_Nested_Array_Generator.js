function* inorderTraversal(arr) {
    for (const n of arr) {
        if (Array.isArray(n)) {
            yield* inorderTraversal(n);
        } else {
            yield n;
        }
    }
};

const arr = [[[6]],[1,3],[]];

const gen = inorderTraversal(arr);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);