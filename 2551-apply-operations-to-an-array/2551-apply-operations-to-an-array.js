/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(let i =0; i< nums.length; i++) {
        if(nums[i] !== nums[i+1]) {
            continue;
        } else {
            nums[i] = nums[i]*2;
            nums[i+1] = 0;
        }
     
    }

    const result = nums.filter((num) => num !== 0);

    while(result.length < nums.length) {
        result.push(0);
    }


    return result
};