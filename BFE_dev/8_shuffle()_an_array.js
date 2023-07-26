function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    return arr;
}

const originalArray = [1, 2, 3, 4];
const shuffledArray = shuffle(originalArray);

console.log(shuffledArray); 
// Output: [4, 2, 1, 5, 3] (randomized order)


// function shuffle(arr) {
//     let lastIndex = arr.length;
  
//     while(lastIndex > 0) {
//       randomIndex = Math.floor(Math.random() * lastIndex);
//       temp = arr[lastIndex];
//       arr[lastIndex] = arr[randomIndex];
//       arr[randomIndex] = temp;
//       lastIndex -= 1;
//     }
// }