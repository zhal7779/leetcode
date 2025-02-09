/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {

    let minNum = Number.MAX_SAFE_INTEGER;
    let maxIncreasing  = -1;

    for(let i =0; i< nums.length; i++) {

        if(maxIncreasing <  nums[i] - minNum) {
             maxIncreasing = nums[i] - minNum;
        }

        if(minNum > nums[i]) {
            minNum  = nums[i];
        }

    }

    return maxIncreasing <= 0 ? -1 : maxIncreasing;
};