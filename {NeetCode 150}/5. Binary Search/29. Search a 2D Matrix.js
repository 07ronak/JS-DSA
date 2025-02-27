/* You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:
    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    Output: true

Example 2:
    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
    Output: false       */
var searchMatrix = function (
  matrix,
  target,
  start = 0,
  end = matrix.length - 1
) {
  if (start > end) return false;

  const middle = Math.floor((start + end) / 2);
  let currentRow = matrix[middle];

  // Check if target is in current row
  if (currentRow.includes(target)) {
    return true;
  }

  // Check if target is in upper half
  if (target < currentRow[0]) {
    return searchMatrix(matrix, target, start, middle - 1);
  }

  // Check if target is in lower half
  if (target > currentRow[currentRow.length - 1]) {
    return searchMatrix(matrix, target, middle + 1, end);
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
); //true
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
); //false
