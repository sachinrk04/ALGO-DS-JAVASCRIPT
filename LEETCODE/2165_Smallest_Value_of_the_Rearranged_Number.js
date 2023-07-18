function smallestRearrangedNumber(num) {
    const str = num.toString();
    const arr = str.split('');
  
    arr.sort();
  
    if (arr[0] === '0') {
      let i = 1;
      while (arr[i] === '0') {
        i++;
      }
  
      [arr[0], arr[i]] = [arr[i], arr[0]];
    }
  
    const smallestNum = Number(arr.join(''));
  
    return smallestNum;
};

const num = 628904;

console.log(smallestRearrangedNumber(num));
  