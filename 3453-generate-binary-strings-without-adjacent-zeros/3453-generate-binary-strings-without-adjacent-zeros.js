/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    
    let answer = [];

    function recursion(binary) {
        if(binary.length === n && !binary.includes('00')) {
            return answer.push(binary);
        }
        if(!binary.includes('00')) {
            recursion(binary + '0');

            recursion(binary + '1');
        }

    }


    recursion('')

    return answer;
};