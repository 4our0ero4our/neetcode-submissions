class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    let map = new Map();
    for (let num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
    }
    let longest = 0;
    for (let [key, values] of map) {
      let currentLongest = 1;
      let currentKey = key;
      if (!map.has(currentKey + 1)) {
        while (map.has(currentKey - 1)) {
          currentLongest++;
          currentKey--;
        }
      }
      longest = Math.max(currentLongest, longest);
    }
    return longest;
  }
}
