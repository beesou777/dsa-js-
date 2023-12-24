/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let alternative1 = 0
    let alternative2 = 0
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] === "0") {
                alternative1++
            } else {
                alternative2++
            }
        } else {
            if (s[i] === "1") {
                alternative1++
            } else {
                alternative2++
            }
        }
    }
    return Math.min(alternative1, alternative2)
};