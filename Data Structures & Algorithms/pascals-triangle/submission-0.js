class Solution {
  /**
   * @param {number} numRows
   * @return {number[][]}
   */
  generate(numRows) {
    if (numRows === 0) return [];
    let output = [[1]];

    for (let i = 1; i < numRows; i++) {
      let prevRow = output[i - 1];
      let currentRow = [1];

      for (let j = 1; j < i; j++) {
        currentRow.push(prevRow[j - 1] + prevRow[j]);
      }

      currentRow.push(1);
      output.push(currentRow);
    }

    return output;
  }
}
