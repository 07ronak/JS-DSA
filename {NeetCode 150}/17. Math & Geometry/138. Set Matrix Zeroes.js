/* Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Example 1:
    Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
    Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
    Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
    Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]] */

var setZeroes = function (matrix) {
  const rows = matrix.length,
    cols = matrix[0].length;

  const rowZero = Array(rows).fill(false);
  const colZero = Array(cols).fill(false);

  // Step 1: Identify rows and columns that should be zeroed
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        rowZero[r] = true;
        colZero[c] = true;
      }
    }
  }

  // Step 2: Set the identified rows and columns to zero
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rowZero[r] || colZero[c]) {
        matrix[r][c] = 0;
      }
    }
  }
};

// Test cases
let matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(matrix1);
console.log(matrix1);
// Output: [[1,0,1],[0,0,0],[1,0,1]]

let matrix2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(matrix2);
console.log(matrix2);
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
