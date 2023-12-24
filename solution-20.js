/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0){
        return 0
    }
    let result = 1
    for(let i = 0;i < nums.length;i++){
       if(nums[i] !== nums[result]){
        result++
        nums[result] = nums[i]
       }
    }
    return result + 1
};

console.log(removeDuplicates([1,1,2]))