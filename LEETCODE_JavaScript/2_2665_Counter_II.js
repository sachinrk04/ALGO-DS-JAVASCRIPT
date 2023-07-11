function createCounter(init) {
    let count = init;

    function increment() {
        return ++count;
    }

    function decrement() {
        return --count;
    }

    function reset() {
        count = init;
        return count;
    }

    return {
        increment: increment, 
        decrement: decrement, 
        reset: reset, 
    }
};

const init = 5;
const counter = createCounter(init);
console.log("increment-->", counter.increment())
console.log("reset-->", counter.reset())
console.log("decrement-->", counter.decrement())

// class methods

class Counter {
    constructor(init) {
        this.init = init;
        this.count = init;
    }

    increment() {
        return ++this.count;
    };

    decrement() {
        return --this.count;
    }

    reset() {
        this.count = this.init
        return this.count;
    }
}
