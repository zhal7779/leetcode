/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const answer = [];

    let combination = '';

    let leftPair = 0;
    let rightPair = 0;


    function recursion(L, leftPair, rightPair, combination) {
        if(n*2 === L) {
            return answer.push(combination);
        };
        
        if(leftPair === rightPair || leftPair < n ) {
            recursion(L + 1 , leftPair+1, rightPair, combination + '(');
        }

        if(leftPair > rightPair) {
             recursion(L + 1, leftPair, rightPair+1,combination + ')'); 

        }
       

    };

    recursion(0, leftPair, rightPair, combination);


    return answer;
};