/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let character = {}
    let maxCount = 0
    let maxLength = 0
    let start = 0
    for (let i = 0; i < s.length; i++) {
        character[s[i]] = (character[s[i]] || 0) + 1
        maxCount = Math.max(maxCount, character[s[i]])
        if (i - start + 1 - maxCount > k) {
            character[s[start]]--
            start++
        }
        maxLength = Math.max(maxLength, i - start + 1)
    }
    return maxLength
};

console.log(characterReplacement("AABA", 0))