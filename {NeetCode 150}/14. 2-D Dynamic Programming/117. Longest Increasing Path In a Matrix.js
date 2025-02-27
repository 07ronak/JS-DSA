/* Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move 
diagonally or move outside the boundary (i.e., wrap-around is not allowed).

Example 1:
    Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
    Output: 4
    Explanation: The longest increasing path is [1, 2, 6, 9].

Example 2:
    Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
    Output: 4
    Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

Example 3:
    Input: matrix = [[1]]
    Output: 1 */

var longestIncreasingPath = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  if (!matrix || rows === 0) return 0;

  const memo = Array.from({ length: rows }, () => new Array(cols).fill(0));

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dfs = (r, c, prevValue) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || matrix[r][c] <= prevValue)
      return 0;

    if (memo[r][c] !== 0) return memo[r][c]; // the value exists in the our table

    let currCount = 0;
    for (let [dr, dc] of directions) {
      let row = r + dr;
      let col = c + dc;
      currCount = Math.max(currCount, dfs(row, col, matrix[r][c]));
    }

    memo[r][c] = 1 + currCount;
    return memo[r][c];
  };

  let count = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      count = Math.max(count, dfs(r, c, -Infinity));
    }
  }
  return count;
};

console.log(
  longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
  ])
);
console.log(
  longestIncreasingPath([
    [3, 4, 5],
    [3, 2, 6],
    [2, 2, 1],
  ])
);
console.log(longestIncreasingPath([[1]]));
