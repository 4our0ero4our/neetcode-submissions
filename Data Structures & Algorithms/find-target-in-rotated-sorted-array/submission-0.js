class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let n = nums.length;
        let left = 0;
        let right = n - 1;

        while (left <= right) {
            let mid = Math.floor((right + left) / 2);

            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] >= nums[left]) {
                if (nums[left] > target || target > nums[mid]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                if (nums[right] < target || target < nums[mid]) {
                    right = mid - 1
                } else {
                    left = mid + 1;
                }
            }
        }

        return -1;
    }
}
