function throttle(fn, t) {
    let timeId;
    return function(...args) {
        if (!timeId) {
            timeId = setTimeout(() => {
                fn(...args);
                timeId = null;
            }, t);
        }
    };
};

const throttled = throttle(console.log, 100);
throttled('log'); // logged immediately
throttled('log'); // logged at t = 100ms