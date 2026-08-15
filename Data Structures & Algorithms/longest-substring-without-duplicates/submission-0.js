class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length;
            let longest = 0;
                let left = 0;
                    let right = 0;
                        let map = new Map();
                            
                                while (right < n) {
                                        if (!map.has(s[right])) {
                                                    map.set(s[right], 1);
                                                                // longest++;
                                                                        } else {
                                                                                    map.set(s[right], map.get(s[right]) + 1)
                                                                                                while (map.get(s[right]) > 1) {
                                                                                                                map.set(s[left], map.get(s[left]) - 1)
                                                                                                                                left++
                                                                                                                                            }
                                                                                                                                                    }
                                                                                                                                                            longest = Math.max(longest, right - left + 1)
                                                                                                                                                                    right++
                                                                                                                                                                        }
                                                                                                                                                                            
                                                                                                                                                                                return longest;
    }
}
