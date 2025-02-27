/* You are given a m×n 2D grid initialized with these three possible values:

~'-1' - A water cell that can not be traversed.
~'0' - A treasure chest.
~'INF' - A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.

Fill each land cell with the distance to its nearest treasure chest. If a land
cell cannot reach a treasure chest than the value should remain 'INF'.

Assume the grid can only be traversed up, down, left, or right.

Modify the grid in-place.

Example 1:

Input: [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647]
]

Output: [
  [3,-1,0,1],
  [2,2,1,-1],
  [1,-1,2,-1],
  [0,-1,3,4]
]

Example 2:

Input: [
  [0,-1],
  [2147483647,2147483647]
]

Output: [
  [0,-1],
  [1,2]
] */

function islandsAndTreasure(grid) {
  const q = [];
  const visited = new Set();
  const rows = grid.length;
  const cols = grid[0].length;

  function addCell(r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      grid[r][c] === -1 ||
      visited.has(r + "," + c)
    )
      return;

    q.push([r, c]);
    visited.add(r + "," + c);
  }

  // Add all '0' positions to the queue
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0) {
        q.push([r, c]);
        visited.add(r + "," + c);
      }
    }
  }

  let res = 0;
  while (q.length !== 0) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let [r, c] = q.shift(); // Use shift() for BFS
      grid[r][c] = res;

      addCell(r - 1, c);
      addCell(r, c - 1);
      addCell(r, c + 1);
      addCell(r + 1, c);
    }
    res++;
  }

  return grid; // Return the modified grid
}

console.log(
  islandsAndTreasure([
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647],
  ])
);

console.log(
  islandsAndTreasure([
    [0, -1],
    [2147483647, 2147483647],
  ])
);
