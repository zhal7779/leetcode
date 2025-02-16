/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stack = [];

    for(let i = 0; i< s.length; i++) {
        
        stack.push(s[i]);
        
       if(stack.length > 1) {
        const word = `${stack[stack.length -2]}${stack[stack.length -1]}`
         
        if(word === "AB" || word === "CD") {
            stack.pop();
            stack.pop();
        } 
       } 
    }

    return stack.length;
};