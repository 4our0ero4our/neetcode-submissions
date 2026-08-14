class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counter = new Map();
        for (let num of nums) {
            counter.set(num, (counter.get(num) || 0) + 1);
        }
        let keysWithCounts = [];
        for (let [key, value] of counter) {
            keysWithCounts.push([key, value]);
        }
        let sortedCounter = keysWithCounts
            .sort((a, b) => a[1] - b[1])
            .reverse()
            .slice(0, k);
        
        let output = [];
        for (let item of sortedCounter) {
            output.push(item[0]);
        }
        return output;
    }
}
