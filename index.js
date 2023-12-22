/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const contaier ={}
    for(let i = 0;i < nums.length;i++){
        // const sort = reSorted(nums[i])
        if(!contaier[nums[i]]){
            contaier[nums[i]] = [nums[i]]
        }else{
            contaier[nums[i]].push(nums[i])
        }
    }
    const result = Object.values(contaier).sort((a,b)=> b.length - a.length)
    return result.slice(0,k).flatMap(arr => arr[0])
};

console.log(topKFrequent([1],1))