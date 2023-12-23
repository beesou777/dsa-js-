// this works but in leetcode it will runs an error due to time complexity
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=> b -a)
    const container = {}
    for(let i = 0;i< nums.length -1;i++){
        if( i > 0 && nums[i] === nums[i -1]) continue 
        for(let j = i + 1 ;j< nums.length -1 ;j++){
            if( j > i + 1 && nums[j] === nums[j -1]) continue
            for(let k = j+1;k < nums.length;k++){
                if(k > j + 1 && nums[k] === nums[k -1]) continue
                if(nums[k].length == 0) return nums[k] == 0
                let sum = nums[i] + nums[j] + nums[k]
                if(sum === 0){
                    const triplet =  [nums[i],nums[j],nums[k]]
                    container[`${triplet}`] = triplet
                }
            }
        }
    }
    const result = Object.values(container)
    return result
};

console.log(threeSum([0,0,0]))


// solution with 0(n*n)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=> a -b)
     const container = []
     for(let i = 0;i< nums.length -1;i++){
         if( i > 0 && nums[i] === nums[i -1]) continue 
         let leftPointer = i + 1
         let rightPointer = nums.length -1
         while(leftPointer < rightPointer){
             sum = nums[i] + nums[leftPointer] + nums[rightPointer]
             if(sum === 0){
                 container.push([nums[i],nums[leftPointer],nums[rightPointer]])
                 while (leftPointer < rightPointer && nums[leftPointer] === nums[leftPointer + 1]) leftPointer++;
                 while (leftPointer < rightPointer && nums[rightPointer] === nums[rightPointer - 1]) rightPointer--;
             }
             if(sum < 0){
                 leftPointer++
             }else{
                 rightPointer--
             }
 
         }
     }
     return container
 };