/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function(s, p) {
    const [lp, rp] = p.split('*');

    for (let i = 0; i <= s.length - (lp.length + rp.length); i++) {
    
        for (let j = i + lp.length + rp.length; j <= s.length; j++) {
            const sub = s.slice(i, j);
            if (sub.startsWith(lp) && sub.endsWith(rp)) {
                return true;
            }
        }
    }

    return false;
};
