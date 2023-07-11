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
