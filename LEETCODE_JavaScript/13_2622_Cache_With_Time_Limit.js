function TimeLimitedCache() {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const alreadyExists = this.cache.get(key);
    if (alreadyExists) {
        clearTimeout(alreadyExists.timeoutId)
    }
    const timeoutId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, timeoutId });

    return Boolean(alreadyExists);
};

TimeLimitedCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        return this.cache.get(key).value;
    }
    return -1;
};

TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

var obj = new TimeLimitedCache()
obj.set(1, 42, 1000); // false
obj.get(1) // 42
obj.count() // 1


// ------- class method -----------
class TimeLimitedCache {
    cache = new Map();

    set(key, value, duration) {
        const alreadyExists = this.cache.get(key);
        
        if (alreadyExists) {
            clearTimeout(alreadyExists.timeoutId)
        }

        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
    
        this.cache.set(key, { value, timeoutId });
    
        return Boolean(alreadyExists);
    };   
    
    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        }
        return -1;
    };

    count() {
        return this.cache.size;
    };
}
