class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for (let str of strs) {
            let key = str.split("").sort().join();
            if (!map.has(key)) {
                map.set(key, [str]);
            } else {
                map.get(key).push(str);
            }
        }
        return Array.from(map.values())
    }
}
