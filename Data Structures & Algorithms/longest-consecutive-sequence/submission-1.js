class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    let set = new Set(nums);
    let longest = 0;
    for (let item of set) {
      let currentLongest = 1;
      let currentKey = item;
      if (!set.has(currentKey + 1)) {
        while (set.has(currentKey - 1)) {
          currentLongest++;
          currentKey--;
        }
      }
      longest = Math.max(currentLongest, longest);
    }
    return longest;
  }
}
