/**
 * @param {number[]} nums
 * @return {boolean}
 */

// my own soution
// var containsDuplicate = function () {
    // const new_array = []
    // for (let arr = 0; arr < nums.length;arr++) {   
    //     if (!new_array.includes(nums[arr])) {
    //         new_array.push(nums[arr])
    //     }else{
    //         return true
    //     }
    // }
    // return false
    
// };

// console.log(containsDuplicate([2,3,4,5,4]))


// prefered solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a-b);
    for(let i = 0; i <= nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false
};
