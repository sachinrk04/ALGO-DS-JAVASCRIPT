function nextGreaterElements(nums) {
    const stack = [];
    const result = new Array(nums.length).fill(-1);
  
    for (let i = 0; i < 2 * nums.length; i++) {
      const num = nums[i % nums.length];
  
      while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
        result[stack.pop()] = num;
      }
  
      if (i < nums.length) {
        stack.push(i);
      }
    }
  
    return result;
}

const nums = [1, 2, 1];

nextGreaterElements(nums);