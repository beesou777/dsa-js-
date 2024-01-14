/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let first = []
    let second = []
    for(let i = 0;i < word1.length;i++){
           first.push(word1.join(''))
    }
    for(let i = 0;i < word2.length;i++){
            second.push(word2.join(''))
    }
    if(first[0] == second[0]){
        return true
    }
    return false

};

console.log(arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"]))