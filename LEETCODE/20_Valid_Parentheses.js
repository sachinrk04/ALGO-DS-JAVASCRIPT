function isValid (s) {
    let stack = [];
    const map = {
        ")" : "(",
        "}" : "{",
        "]" : "[",
    };

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            stack.push(s[i]);
            continue;
        }

        if (stack[stack.length - 1] === map[s[i]]) {
            stack.pop();
            continue;
        }
        return false;
    }

    return stack.length === 0;
}

const s = "()[]{}";
console.log(isValid(s));