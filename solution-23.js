/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (!nums.includes(target)) {
        nums.push(target);
    }

    let sorted = nums.sort((a, b) => a - b);
    return sorted.indexOf(target)

};

console.log(searchInsert([1,2,3,4,5,10],7))