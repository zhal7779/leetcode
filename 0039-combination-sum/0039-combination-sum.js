/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    let answer = [];

     function combination(index, sum, path) {
        if (sum === target) {
            answer.push([...path]);
            return;
        }

        if (sum > target) return;

        for (let i = index; i < candidates.length; i++) {
            path.push(candidates[i]);      
            combination(i, sum + candidates[i], path);
            path.pop(); 
        }
    }

    combination(0, 0, []);

    return answer;
};