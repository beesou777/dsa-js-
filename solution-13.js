/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        if (currentChar === '(' || currentChar === '{' || currentChar === '[') {
            stack.push(currentChar);
        } else {
            const top = stack.pop();
            if (
                (currentChar === ')' && top !== '(') ||
                (currentChar === '}' && top !== '{') ||
                (currentChar === ']' && top !== '[')
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid('(){}')); // Outputs: false
