function curry(fn) {
    return function curried(...args) {

        const expectedArgLength = fn.length;
        const  isArgsEnough = args.length >= expectedArgLength && 
               args.slice(0, expectedArgLength).every(arg => arg !== curry.placeholder)

        if (isArgsEnough) {
            // return fn(...args); 
            return fn.apply(this, args);
        } else {
            return function (...newArgs) {
                const finalArgs = [];
                let i = 0;
                let j = 0;

                while (i < args.length && j < newArgs.length) {
                    if (args[i] === curry.placeholder) {
                        finalArgs.push(newArgs[j]);
                        i += 1;
                        j += 1;
                    } else {
                        finalArgs.push(args[i]);
                        i += 1;
                    }
                }

                while (i < args.length) {
                    finalArgs.push(args[i]);
                    i += 1;
                }

                while (j < newArgs.length) {
                    finalArgs.push(newArgs[j]);
                    j += 1;
                }

                return curried(...finalArgs);
            };
        }
    };
};

curry.placeholder = Symbol()

const  join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
console.log(curriedJoin(1, 2, 3))