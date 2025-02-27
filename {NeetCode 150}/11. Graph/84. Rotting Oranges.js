/*  You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example 1:
    Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
    Output: 4

Example 2:
    Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
    Output: -1
    Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
    Input: grid = [[0,2]]
    Output: 0
    Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.*/

var orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const q = []; // Use array as queue
  let fresh = 0;
  let time = 0;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // Initialize the queue and count fresh oranges
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        fresh++;
      }
      if (grid[r][c] === 2) {
        q.push([r, c]);
      }
    }
  }

  // Perform BFS while there are fresh oranges and the queue is not empty
  while (fresh > 0 && q.length > 0) {
    const size = q.length; // Current size of the queue
    for (let i = 0; i < size; i++) {
      const [r, c] = q.shift(); // Dequeue from the front

      // Process all 4 possible directions
      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        // Check boundaries and if the cell contains a fresh orange
        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < rows &&
          nc < cols &&
          grid[nr][nc] === 1
        ) {
          grid[nr][nc] = 2; // Mark as rotten
          q.push([nr, nc]); // Add to queue
          fresh--; // Decrease the count of fresh oranges
        }
      }
    }
    time++; // Increment time after processing one level
  }

  return fresh === 0 ? time : -1; // Return time if all oranges are rotten, otherwise -1
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
);
console.log(orangesRotting([[0, 2]]));
