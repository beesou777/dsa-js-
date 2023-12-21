/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const anagramMap = {}
    for (let i = 0; i < strs.length; i++) {
        const sorted = reorder(strs[i])
        if(!anagramMap[sorted]){
            anagramMap[sorted] = [strs[i]]
        }else{
            anagramMap[sorted].push(strs[i])
        }
    }
    const result = Object.values(anagramMap)
    return result
};

const reorder = (str) => (
    str.split('').sort().join('')
)

