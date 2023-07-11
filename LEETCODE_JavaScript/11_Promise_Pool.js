async function promisePool (functions, n) {
    return new Promise((resolve, reject) => {
        let i = 0;
        let inProgress = 0;
        
        function callback() {
            if (i === functions.length && inProgress === 0) {
                resolve();
            }
    
            while (i < functions.length && inProgress < n) {
                functions[i++]()
                    .then(() => {
                        inProgress--;
                        callback();
                    });
                inProgress++;
            }
        }
        callback();
    });
};

const sleep  = (t) => new Promise(res => setTimeout(res, t));
promisePool(
    [
        () => sleep(500).then(() => 'Task 1 completed'), 
        () => sleep(400).then(() => 'Task 2 completed')
    ], 1)
    .then((res) => {
            console.log(res) // After 900ms.
    })
    .catch((err) => {
        console.log(err)
    })