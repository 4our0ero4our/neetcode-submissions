class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedS = s.split(" ").join("").toLowerCase().replace(/([^0-9A-Za-z])/g, "");
        let left = 0;
        let right = cleanedS.length - 1;
        while (left < right) {
            if (cleanedS[left] !== cleanedS[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}
