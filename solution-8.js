/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const filterText = s.replace(/[^a-zA-Z0-9]/g,'').toLocaleLowerCase()
    let validPalindrome = filterText.split('').reverse().join('')
    if(filterText == validPalindrome) return true
    return false
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))