class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit = function (prices) {
    let n = prices.length;
    let maxProfit = 0;
    let left = 0;
    let right = 1;
    while (right < n) {
      if (prices[right] < prices[left]) {
        left = right;
        right++;
      } else {
        let profit = prices[right] - prices[left];
        maxProfit = Math.max(profit, maxProfit);
        right++;
      }
    }
    return maxProfit;
  };
}
