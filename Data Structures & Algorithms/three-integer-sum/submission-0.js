class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    let sortedNums = nums.sort((a, b) => a - b);
    let n = sortedNums.length;
    let output = [];
    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;

      if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
        continue;
      }

      while (left < right) {
        if (sortedNums[i] + sortedNums[left] + sortedNums[right] < 0) {
          left++;
        } else if (sortedNums[i] + sortedNums[left] + sortedNums[right] > 0) {
          right--;
        } else {
          output.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
          left++;
          while (left < right && sortedNums[left] === sortedNums[left - 1]) {
            left++;
          }
        } 
      }
    }
    return output;
  }
}
