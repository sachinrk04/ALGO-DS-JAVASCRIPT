function dailyTemperatures(temperatures) {
  let len = temperatures.length;
  let result = new Array(len).fill(0);

  let arr = [];

  for (let i = 0; i < len; i++) {
    while (
      arr.length > 0 &&
      temperatures[i] > temperatures[arr[arr.length - 1]]
    ) {
      const a = arr.pop();
      result[a] = i - a;
    }

    arr.push(i);
  }

  return result;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// output [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60]));
// output [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90]));
// output [1,1,0]
