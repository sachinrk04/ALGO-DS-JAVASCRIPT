function timeLimit(fn, t) {
    return async function(...args) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fn(...args);
                resolve(res);
            } catch(err) {
                reject(err)
            }
        })

        // return new Promise( (resolve, reject) => {
        //     let id = setTimeout(() => reject("Time Limit Exceeded"), t);

        //     fn(...args)
        //         .then((res) => resolve(res))
        //         .catch((err) => reject(err))
        //         .finally(() => clearInterval(id));
        // })
    }
}


const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
