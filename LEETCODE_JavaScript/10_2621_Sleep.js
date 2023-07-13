async function sleep(millis) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, millis);
    })
}

// function sleep(millis) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () { console.log(`Wake Up after ${millis/1000} Secs`); resolve(); }, millis);
//     });
// }

const millis = 1000;
let t = Date.now();
sleep(millis).then(() => {
  console.log(Date.now() - t); // 100
});