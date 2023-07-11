/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * Time O(((N + 26) * N) * (M - N)) | Space O(1)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let [left, right, longest, max] = new Array(4).fill(0);
    const frequencyMap = new Array(26).fill(0);

    while (right < s.length) {
        const count = addRightFrequency(s, right, frequencyMap);

        longest = Math.max(longest, count);

        let window = right - left + 1;
        const canSlide = k < window - longest;
        if (canSlide) {
            subtractLeftFrequency(s, left, frequencyMap);
            left++;
        }

        window = right - left + 1;
        max = Math.max(max, window);

        right++;
    }

    return max;
};

const addRightFrequency = (s, right, map) => {
    const char = s[right];
    const index = getCode(char);

    map[index]++;

    return map[index];
};

const subtractLeftFrequency = (s, left, map) => {
    const char = s[left];
    const index = getCode(char);

    map[index]--;

    return map[index];
};

const getCode = (char) => char.charCodeAt(0) - 'A'.charCodeAt(0);



// M-2
var characterReplacement = function(s, k) {
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
};