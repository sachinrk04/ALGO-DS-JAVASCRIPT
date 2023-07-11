//  Implement Promise.all()

function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    });
}

function myPromiseAll(lists) {
    const results = [];
    return new Promise((resolve, reject) => {
        lists.forEach((list, i) => {
            list.then((res) => {
                results.push(res);
                if (i === lists.length - 1) {
                    resolve(results);
                }
            }).catch((err) => reject(err))
        });
    });
};

myPromiseAll([
    showText("hello", 1000), 
    Promise.resolve("hi"),
    // Promise.reject("Bye")
]).then((value) => {console.log("Promise.all()--->", value)})