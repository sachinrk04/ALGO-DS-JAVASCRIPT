function reverseWords(str) {
  let wordArr = str.split("");

  let start = 0;
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === " " || i === wordArr.length - 1) {
      let end = i === wordArr.length - 1 ? i : i - 1;
      reverseWord(wordArr, start, end);
      start = i + 1;
    }
  }

  return wordArr.join("");
}

function reverseWord(word, start, end) {
  while (start < end) {
    [word[start], word[end]] = [word[end], word[start]];
    start++;
    end--;
  }
}

const s = "Let's take LeetCode contest";
const output = reverseWords(s);
console.log("output--->", output);
