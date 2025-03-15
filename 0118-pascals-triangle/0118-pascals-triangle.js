/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let answer = [];

    for(let i = 0; i < numRows; i++) {
        answer[i] = new Array(i + 1).fill(1);
    }

    for(let i = 2; i < numRows; i++) { 
        for(let j = 1; j < i; j++) {
            answer[i][j] = answer[i - 1][j - 1] + answer[i - 1][j];
        }
    }

    return answer;
};