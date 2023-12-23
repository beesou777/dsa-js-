/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let result = []
        let start = 0
        let end = numbers.length -1
        while(start < end){
            let sum = numbers[start] + numbers[end]
            if(sum === target){
                result.push(start+1,end+1)
                while (start < end && numbers[start] === numbers[start + 1]) start++;
                while (start < end && numbers[end] === numbers[end - 1]) end--;
            }
            if(sum < target){
                start++
            }else{
                end--
            }
        }
    return result
};

console.log(twoSum([2,7,11,15],9))