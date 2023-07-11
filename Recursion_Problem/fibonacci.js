// Write a recursive function called fibonacci() which accepts a number and returns the nth number in the 
// Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole 
// numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to 
// the sum of the previous two numbers.

function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
};