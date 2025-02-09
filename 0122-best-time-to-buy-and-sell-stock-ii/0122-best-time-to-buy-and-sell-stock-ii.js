/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let totalProfit  = 0;
    let sellingPrice = 0;
    let sellingFlag = false;
    //매수 => 매일
    // 매도 => 다음날 가격이 떨어질 때
    // 떨어지지 않으면? 팔지 않는다.

    for(let i = 0; i< prices.length; i++) {
    
        if(!sellingFlag){
            sellingPrice = prices[i];
            sellingFlag = true;
        } 
        if(i === prices.length - 1 || prices[i + 1] < prices[i]) {
            totalProfit +=  prices[i] - sellingPrice;
            sellingFlag = false;
        } else {
            continue;
        }

    }

    return totalProfit;

};