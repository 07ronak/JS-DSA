/* You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

-Connect: A cell is connected to adjacent cells horizontally or vertically.
-Region: To form a region connect every 'O' cell.
-Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells 
 are on the edge of the board.

To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.

Example 1:
    Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
    Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
    Explanation:
        In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

Example 2:
    Input: board = [["X"]]
    Output: [["X"]] */

var solve = function (board) {
  if (!board || board.length === 0) return board; // Handle edge case

  const rows = board.length;
  const cols = board[0].length;

  const capture = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== "O") {
      return;
    }
    board[r][c] = "T";
    capture(r + 1, c);
    capture(r - 1, c);
    capture(r, c + 1);
    capture(r, c - 1);
  };

  // Step 1: Capture unsurrounded 'O's and mark them as 'T'
  for (let r = 0; r < rows; r++) {
    if (board[r][0] === "O") capture(r, 0);
    if (board[r][cols - 1] === "O") capture(r, cols - 1);
  }

  for (let c = 0; c < cols; c++) {
    if (board[0][c] === "O") capture(0, c);
    if (board[rows - 1][c] === "O") capture(rows - 1, c);
  }

  // Step 2: Convert remaining 'O' to 'X' and revert 'T' back to 'O'
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O") board[r][c] = "X";
      else if (board[r][c] === "T") board[r][c] = "O";
    }
  }

  return board; // Return the modified board
};

// Test Cases
console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);
console.log(solve([["X"]]));
