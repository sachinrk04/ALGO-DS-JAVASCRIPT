function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    const length = flowerbed.length;

    for (let i = 0; i < length; i++) {
        if (
            flowerbed[i] === 0 && // Check if the current position is empty
            (i === 0 || flowerbed[i - 1] === 0) && // Check the previous position or for the first position
            (i === length - 1 || flowerbed[i + 1] === 0) // Check the next position or for the last position
        ) {
            flowerbed[i] = 1; // Plant a flower
            count++;

            if (count >= n) {
                return true; // We've planted enough flowers
            }
        }
    } 

    return false;
};

const flowerbed = [1, 0, 0, 0, 1];
const n = 1;

console.log(canPlaceFlowers(flowerbed, n));