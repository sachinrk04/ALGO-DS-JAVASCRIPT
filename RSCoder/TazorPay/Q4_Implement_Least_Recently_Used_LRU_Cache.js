// Implement Least Recently Used ( LRU ) Cache

class LRU {
    constructor(max = 5) {
        this.max = max;
        this.cache = new Map();
    }

    get(key) {
        let item = this.cache.get(key);

        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }

        return item;
    }

    set(key, value) {
        if (this.cache.has(key)) this.cache.delete(key);

        else if (this.cache.size === this.max) {
            this.cache.delete(this.first())
        }

        this.cache.set(key, value);
    }

    first() {
        return this.cache.keys().next().value;
    }
};

const LruCache = new LRU(3);
LruCache.set("name", "Sachin");
LruCache.set("age", "30");
LruCache.set("profession", "SDE");
console.log(LruCache.cache);
LruCache.get("name");
console.log(LruCache.cache);
LruCache.set("location", "Bangalore");
console.log("LruCache--->", LruCache.cache)
