class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    if (s.length % 2 !== 0) return false;
    let stack = [];
    let brackets = {
      "}": "{",
      "]": "[",
      ")": "(",
    };

    for (let char of s) {
      if (char === "[" || char === "{" || char === "(") {
        stack.push(char);
      } else {
        if (brackets[char] !== stack.pop()) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
}
