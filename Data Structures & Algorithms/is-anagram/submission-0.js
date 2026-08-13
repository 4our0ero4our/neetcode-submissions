class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let left = 0;
        let right = s.length - 1;

        if (s.length !== t.length) return false;
        // let newS = s.split('').sort().join('');
        // let newT = t.split('').sort().join('').reverse();

        let sMap = new Map();
        for (let char of s) {
            sMap.set(char, (sMap.get(char) || 0) + 1);
        }

        let tMap = new Map();
        for (let char of t) {
            tMap.set(char, (tMap.get(char) || 0) + 1);
        }

        for (let [key, value] of sMap) {
            if (!tMap.has(key) || tMap.get(key) !== value) return false
        }

        return true
    }
}
