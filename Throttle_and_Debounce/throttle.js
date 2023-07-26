function throttle(func, delay) {
    let timeoutId;

    return function() {
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                func.apply(this, arguments);
                timeoutId = null;
            }, delay);
        }
    };
}

function search(e) {
    fetch(`https://jsonplaceholder.typicode.com/comments?name=${e}`)
        .then(res => res.json())
        .then(data => console.log(data));
}

const throttledSearch = throttle(search, 1000);


// function throttle(func, wait) {
//     let timerId; 
//     let lastArgs;
//     return function throttled(...args) {
//         if(!timerId) {
//             func.apply(this, args)
//             timerId = setTimeout(() => {
//             if(lastArgs) {
//                 func.apply(this, lastArgs)
//             }
//             }, wait)
//         } else {
//             lastArgs = args
//         }
//     }
// }