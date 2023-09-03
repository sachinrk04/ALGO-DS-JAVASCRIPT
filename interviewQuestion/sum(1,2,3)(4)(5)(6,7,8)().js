// Curried Function Sum Calculation

// Approach:
// It looks like you're trying to define a curried function in JavaScript that can take multiple sets 
// of arguments and return their sum.Here's how the code seems to be working step by step:

// 1. sum(1, 2, 3) returns a function that takes another argument.

// 2. (4) is passed as an argument to the returned function from step 1. This step doesn't really 
//    do anything, as(4) is just a single value inside parentheses.

// 3. (5) is passed in the same way as step 2.

// 4. (6, 7, 8) is a comma-separated list of values inside parentheses. However, this doesn't 
//    really do anything special in JavaScript syntax.Only the last value, 8, would be considered 
//    as the argument.

// 5. () is an empty set of parentheses, which is ignored and doesn't affect the result.

// Method-1--------------------------------------------
function sum1(...args) {
  let total = args.reduce((acc, val) => acc + val, 0);

  function innerSum(...innerArgs) {
    if (innerArgs.length === 0) {
      return total;
    } else {
      total += innerArgs.reduce((acc, val) => acc + val, 0);
      return innerSum;
    }
  }

  innerSum.valueOf = function () {
    return total;
  };

  return innerSum;
}

const output = sum1(1, 2, 3)(4)(5)(6, 7, 8)()

console.log("output--->", output); // Output: 36

// Method-2--------------------------------------------

function sum2(...args) {
  const innerSum = (...innerArgs) => {
    if (innerArgs.length === 0) {
      return args.reduce((acc, val) => acc + val, 0);
    } else {
      return sum(...args, ...innerArgs);
    }
  };

  return innerSum;
}

console.log(sum2(1, 2, 3)(4)(5)(6, 7, 8)()); // Output: 36

