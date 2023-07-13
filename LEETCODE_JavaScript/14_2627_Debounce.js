function debounce(fn, t) {
    let timeId;
    return function(...args) {
        clearInterval(timeId);
        timeId = setTimeout(() => fn(...args), t);
    };
};

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
