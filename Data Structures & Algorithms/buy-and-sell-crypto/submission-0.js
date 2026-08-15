class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let n = prices.length;
    let maxProfit = 0;
    for (let left = 0; left < n; left++) {
      let right = left + 1;
      while (right < n) {
        let profit = prices[right] - prices[left];
        maxProfit = Math.max(profit, maxProfit);
        right++;
      }
    }
    return maxProfit;
  }
}
