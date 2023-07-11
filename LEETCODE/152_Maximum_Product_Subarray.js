function maxProduct(nums) {
    if (nums.length === 0) return 0;
    return products(nums);
};

function products(nums) {
    let min = max = product = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const minProd = min * nums[i];
        const maxProd = max * nums[i];

        min = Math.min(maxProd, minProd, nums[i]);
        max = Math.max(maxProd, minProd, nums[i]);

        product = Math.max(product, max);
    }

    return product;
};

let nums = [2, 3, -2, 4];
maxProduct(nums);