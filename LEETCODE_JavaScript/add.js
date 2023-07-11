function add(...args) {
    let sum = 0;
    for(let arg of args) {
        sum += arg;
    }
    return sum; 
}

const addResult = add(2, 3, 4, 5);
console.log("addResult--->", addResult)