var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const a = target - nums[i];

    if (map.has(a)) {
      return [map.get(a), i];
    }

    map.set(nums[i], i);
  }
  return [];
};
