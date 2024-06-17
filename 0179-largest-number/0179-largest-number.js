/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function(nums) {
    for(let i =0; i< nums.length-1; i++) {
        let maxIndex = i;

        for(let j = i+1; j< nums.length; j++ ) {

            let num1 = nums[maxIndex].toString();
            let num2 = nums[j].toString();


            if((num1 + num2) < (num2+ num1)) {
                maxIndex = j
            }
            
        }

        if(maxIndex !== i) {
            let tmp = nums[maxIndex];
            nums[maxIndex] = nums[i];
            nums[i] = tmp;
         }
    }

    if(nums.every((v) => v === 0)) {
        nums = ["0"]
    }

    return nums.join('');
};