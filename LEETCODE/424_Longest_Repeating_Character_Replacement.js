function characterReplacement(s, k) {
  let [maxLength, maxCount, left, map] = [0, 0, 0, new Map()];

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    maxCount = Math.max(maxCount, map.get(s[i]));

    if (i - left + 1 - maxCount > k) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }

    maxLength = Math.max(maxLength, i - left + 1);
  }
  return maxLength;
}

console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4
