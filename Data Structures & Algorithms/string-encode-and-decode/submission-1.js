class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        let getNextChar = (char) => {
            const currentCode = char.charCodeAt(0);
            return String.fromCharCode(currentCode + 1);
        };
        for (let str of strs) {
            for (let char of str) {
                let nextChar = getNextChar(char);
                encodedStr = encodedStr.concat("", nextChar);
            }
            encodedStr = encodedStr.concat("", "_");
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let output = [];
        let getPrevChar = (char) => {
            const currentCode = char.charCodeAt(0);
            return String.fromCharCode(currentCode - 1);
        };
        let currentArrItem = "";
        for (let char of str) {
            if (char === "_") {
                output.push(currentArrItem);
                currentArrItem = "";
            } else {
                let prevChar = getPrevChar(char);
                currentArrItem = currentArrItem.concat("", prevChar);
            }
        }
        return output;
    }
}
