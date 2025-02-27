/* You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).

The rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square 
to another 4-directionally adjacent square if and only if the elevation of both squares individually are at 
most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.

Return the least time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).

Example 1:
    Input: grid = [[0,2],[1,3]]
    Output: 3
    Explanation: At time 0, you are in grid location (0, 0).
                You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
                You cannot reach point (1, 1) until time 3.
                When the depth of water is 3, we can swim anywhere inside the grid.

Example 2:
    Input: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
    Output: 16
    Explanation: The final route is shown.
                We need to wait until time 16 so that (0, 0) and (4, 4) are connected. */

const MinHeapPriorityQueue = require("../Custom Data Structures/MinHeap Priority Queue");

var swimInWater = function (grid) {
  const n = grid.length;
  let pq = new MinHeapPriorityQueue();
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let maxTime = 0;

  pq.enqueue([0, 0], grid[0][0]);
  visited[0][0] = true;

  while (!pq.isEmpty()) {
    const {
      element: [x, y],
      priority: time,
    } = pq.dequeue();
    maxTime = Math.max(maxTime, time);

    if (x === n - 1 && y === n - 1) {
      return maxTime;
    }

    //for neighbours
    for (let [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;

      // Check if the neighbor is within bounds and not visited
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && !visited[nx][ny]) {
        visited[nx][ny] = true;
        pq.enqueue([nx, ny], grid[nx][ny]);
      }
    }
  }
  return -1;
};

console.log(
  swimInWater([
    [0, 2],
    [1, 3],
  ])
);
console.log(
  swimInWater([
    [0, 1, 2, 3, 4],
    [24, 23, 22, 21, 5],
    [12, 13, 14, 15, 16],
    [11, 17, 18, 19, 20],
    [10, 9, 8, 7, 6],
  ])
);
