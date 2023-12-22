/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = []
    let prefix = 1
    
    for(let i = 0; i < nums.length;i++){
        result[i] = prefix
        prefix *= nums[i]
    }
    let postfix = 1
    for(let i = nums.length - 2; i >= 0;i--){
        postfix *= nums[i+1]
        result[i] *= postfix
    }
    
    return result
};

console.log(productExceptSelf([1,2,3,4]))