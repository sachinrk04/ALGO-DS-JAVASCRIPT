// Composition Polyfill
// Diff- Composition is start from right to left call function.

function addFive(a) {
    return a + 5;
}

function substractTwo(a) {
    return a - 2;
}

function multiplyFour(a) {
    return a * 4;
}

const compose = (...functions) => {
    return (args) => {
        return functions.reduceRight((arg, fn) => fn(arg), args);
    }
}

const evaluate = compose(addFive, substractTwo, multiplyFour);
console.log(evaluate(5)) // 23