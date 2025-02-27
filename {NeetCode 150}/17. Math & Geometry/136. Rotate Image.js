/* You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Example 1:
    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:
    Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
    Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]] */

var rotate = function (matrix) {
  const n = matrix.length;

  let l = 0;
  let r = n - 1;

  while (r > l) {
    for (let i = 0; i < r - l; i++) {
      const top = l;
      const bottom = r;

      const topLeft = matrix[top][l + i]; //store

      matrix[top][l + i] = matrix[bottom - i][l]; //bottom left to top left

      matrix[bottom - i][l] = matrix[bottom][r - i]; //bottom right to bottom left

      matrix[bottom][r - i] = matrix[top + i][r]; //top right to bottom right

      matrix[top + i][r] = topLeft;
    }
    r--;
    l++;
  }
};

// Test cases
let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix1);
console.log(matrix1); // Output: [[7,4,1],[8,5,2],[9,6,3]]

let matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate(matrix2);
console.log(matrix2);
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
