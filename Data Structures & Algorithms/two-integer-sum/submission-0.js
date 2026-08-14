class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (map.has(target - nums[i])) {
                return [i, map.get(target - nums[i])].sort((a, b) => a - b);
            }
            map.set(nums[i], i);
        }
    }
}
