class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let output = Array.from({ length: n }, () => 1);

        let prefix = Array.from({ length: n }, () => 1);
        prefix[0] = 1;
        for (let i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        let suffix = Array.from({ length: n }, () => 1);
        suffix[n - 1] = 1;
        for (let i = n - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1];
        }

        for (let i = 0; i < n; i++) {
            output[i] = prefix[i] * suffix[i]
        }

        return output;
    }
}
