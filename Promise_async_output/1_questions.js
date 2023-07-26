start();
console.log('5');
async function start() {
console.log("1");

  inside();

  async function inside() {
    console.log("2");
    try {
      const result = await getData(true);
      console.log("6");
      console.log(result);
      console.log("7");
    } catch (e) {
      console.log(e);
    }
    console.log("8");
  }

  console.log("4");
}

function getData(toggle) {
  console.log("3");
  return new Promise((resolve, reject) => {
    console.log("Inside Promise");
    if (toggle) setTimeout(() => resolve("Promise resolved"), 100);
    else {
      reject("Promise rejected");
    }
  });
}

// output:-
// 1
// 2
// 3
// "Inside Promise"
// 4
// 5
// 6
// "Promise resolved"
// 7
// 8