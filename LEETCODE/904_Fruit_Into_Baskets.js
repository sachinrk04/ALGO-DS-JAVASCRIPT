// Question
// You have two baskets, and each basket can only carry one type of fruit.You are given an array 
// of integers where each integer represents a type of fruit.You need to pick fruits from the array,
// such that you collect the maximum number of fruits, but you can only pick fruits from two different
// types.

// Complexity

// The time complexity of this solution is O(n), where n is the number of elements in the 
// input array.

// The space complexity is O(1) because the size of the basket map is at most 2.

function totalFruit(fruits) {
    let maxFruits = 0;
    let basket = new Map();
    let left = 0;

    for (let i = 0; i < fruits.length; i++) {
        if (!basket.has(fruits[i])) {
            basket.set(fruits[i], 1);
        } else {
            basket.set(fruits[i], basket.get(fruits[i]) + 1);
        }

        while (basket.size > 2) {
            basket.set(fruits[left], basket.get(fruits[left] - 1));
            if (basket.get(fruits[left]) === 0) {
                basket.delete(fruits[left]);
            }
            left++;
        }
        
        maxFruits = Math.max(maxFruits, i - left + 1);
    }

    return maxFruits;
};

const fruits = [1, 2, 1, 2, 3];
const output = totalFruit(fruits)
console.log("output--->", output);
// Output: 4