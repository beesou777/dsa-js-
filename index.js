/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const new_array = []
    for (let arr = 0; arr < nums.length;arr++) {   
        if (!new_array.includes(nums[arr])) {
            new_array.push(nums[arr])
        }else{
            return true
        }
    }
    return false
};

console.log(containsDuplicate([2,3,4,4,4]))


