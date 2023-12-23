/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyDate = 0
    let profit = 0
    for(let i = 0;i < prices.length;i++){
        // find the buy date
        if(prices[i] <  prices[buyDate]){
            buyDate = i
        }
        // check for profit
        let currentProfit = prices[i] - prices[buyDate]
        if(currentProfit > profit){
            profit = currentProfit
        }

    }
    return profit
};

console.log(maxProfit([7,1,3,3,6,4]))