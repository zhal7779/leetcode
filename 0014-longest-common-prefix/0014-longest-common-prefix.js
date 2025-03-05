/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    strs.sort();  // 사전순 정렬
    let first = strs[0];
    let last = strs[strs.length - 1];
    
    let i = 0;
    while (i < first.length && first[i] === last[i]) {
        i++;
    }
    
    return first.slice(0, i);
};
