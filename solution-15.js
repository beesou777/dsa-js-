/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let character = {}
    let start = 0
    let maxLength = 0
    for(let i = 0;i<s.length;i++){
     if(character[s[i]] >= start){
         start = character[s[i]] + 1
     }
     character[s[i]] = i
 
     maxLength = Math.max(maxLength, i - start + 1)
    }
    return maxLength
 };
 
 console.log(lengthOfLongestSubstring("bbbbb"))