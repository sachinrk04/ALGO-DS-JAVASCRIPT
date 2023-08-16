function addTwoPromises(promise1, promise2) {
    return Promise.all([promise1, promise2]).then(([res1, res2]) => res1 + res2);
};

const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2)
  .then(sum => {
    console.log(sum); // This will output 7
  });