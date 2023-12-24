/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ""; 
    }
    let commonPrefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < commonPrefix.length && j < strs[i].length && commonPrefix[j] === strs[i][j]) {
            j++;
        }
        commonPrefix = commonPrefix.slice(0, j);
        if (commonPrefix === "") {
            return ""; // If the common prefix becomes empty, there is no longer a match
        }
    }

    return commonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["reflower", "flow", "flight"])); // Output: ""
