/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length <= 1) {
        return nums.length;
    }

    const container = [...new Set(nums)].sort((a,b)=> a -b)

    let count = 1, max = 1
    for (let i = 0; i < container.length; i++) {
        if (container[i] - container[i - 1] === 1) {
            count += 1
            max = Math.max(max, count)
        } else if (container[i] == container[i - 1]) {
            continue
        } else {
            count = 1
        }
    }
    return max;
};

console.log(longestConsecutive([0, -1])); // Output: 2
