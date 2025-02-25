/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    const palindrome = x.toString();

    for(let i = 0; i< palindrome.length; i++) {
        if(palindrome[i] === palindrome[palindrome.length - (i+1)]){
            continue;
        } else {
            return false;
        }
        
    }
    return true;

};