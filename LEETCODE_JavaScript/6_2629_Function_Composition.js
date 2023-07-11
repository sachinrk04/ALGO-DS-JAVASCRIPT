function compose(fns) {
    return (args) => {
        for (let i = fns.length - 1; i >= 0; i--) {
            args = fns[i](args);
        }
        return args;
    }
}

const functions = [x => x + 1, x => x * x, x => 2 * x];
const x = 4;

const fn = compose(functions);
const fnRes = fn(x);
console.log("fnRes---->", fnRes)