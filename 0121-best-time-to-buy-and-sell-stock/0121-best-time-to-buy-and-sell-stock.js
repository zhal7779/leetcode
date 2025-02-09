/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minAmount = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0; 
    for(let i =0; i< prices.length; i++) {
      maxProfit = Math.max(maxProfit,prices[i] - minAmount)
      minAmount = Math.min(minAmount,prices[i])
    }

   return maxProfit; 
};

    