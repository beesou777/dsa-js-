/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length <= 1) {
        return nums.length;
    }

    const container = {};
    nums.forEach(num =>(container[num] = (container[num] || []).concat))
    for (let i = 0; i < nums.length; i++) {
        if (!container[nums[i]]) {
            container[nums[i]] = [nums[i]];
        } else {
            container[nums[i]].push(nums[i]);
        }
    }


    let count = 1, max = 1

    const result = Object.values(container).flatMap((arr) => arr).sort((a,b)=>a - b)
    for (let i = 0; i < result.length; i++) {
        if (result[i] - result[i - 1] === 1) {
            count += 1
            max = Math.max(max, count)
        } else if (result[i] == result[i - 1]) {
            continue
        } else {
            count = 1
        }
    }
    return max;
};

console.log(longestConsecutive([0, -1])); // Output: 2
