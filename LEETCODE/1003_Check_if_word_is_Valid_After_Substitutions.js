function isValidSubstitution(s) {
  const stack = [];

  for (const char of s) {
    stack.push(char);

    // Check if the last three characters in the stack form "abc"
    if (stack.length >= 3 && stack.slice(-3).join("") === "abc") {
      // Remove the last three characters
      stack.pop();
      stack.pop();
      stack.pop();
    }
  }

  // If the stack is empty, all "abc" patterns were matched correctly
  return stack.length === 0;
}

// Example usage
console.log(isValidSubstitution("aabcbc")); // Output: true
console.log(isValidSubstitution("abcabcababcc")); // Output: true
console.log(isValidSubstitution("abccba")); // Output: false
