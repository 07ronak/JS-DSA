/* You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: 
|xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

Return the minimum cost to make all points connected. All points are connected if there is exactly one 
simple path between any two points.

Example 1:

    Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
    Output: 20
    Explanation: We can connect the points as shown above to get the minimum cost of 20.
                Notice that there is a unique path between every pair of points.
Example 2:
    Input: points = [[3,12],[-2,5],[-4,1]]
    Output: 18 */

var minCostConnectPoints = function (points) {
  const n = points.length;
  let edges = 0;
  const visit = new Array(n).fill(false);
  const dist = new Array(n).fill(Infinity);
  let node = 0;
  let res = 0;

  while (edges < n - 1) {
    visit[node] = true;
    let nextNode = -1;

    for (let i = 0; i < n; i++) {
      // Skip points we've already connected to our network
      if (visit[i]) continue;

      const curDist =
        Math.abs(points[i][0] - points[node][0]) +
        Math.abs(points[i][1] - points[node][1]);

      dist[i] = Math.min(dist[i], curDist);

      if (nextNode === -1 || dist[i] < dist[nextNode]) {
        nextNode = i;
      }
    }

    res += dist[nextNode];
    node = nextNode;
    edges++;
  }
  return res;
};

console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ])
);
console.log(
  minCostConnectPoints([
    [3, 12],
    [-2, 5],
    [-4, 1],
  ])
);
