class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let n = heights.length;
    let area = 0;
    let left = 0;
    let right = n - 1;
    while (left < right) {
      let currentArea = (right - left) * Math.min(heights[left], heights[right]);
      area = Math.max(area, currentArea);
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }
    return area;
  }
}
