/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const container = {}
    for(let i = 0;i < nums.length;i++){
        if(!container[nums[i]]){
            container[nums[i]] = [nums[i]]
        }else{
            container[nums[i]].push(nums[i])
        }
    }
    let result = Object.values(container).sort((a,b)=>a.length - b.length)
    return result[0]
};

console.log(singleNumber([4,1,2,1,2]))