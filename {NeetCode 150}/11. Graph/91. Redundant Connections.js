/* In this problem, a tree is an undirected graph that is connected and has no cycles.

You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional 
edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge 
that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] 
indicates that there is an edge between nodes ai and bi in the graph.

Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple
answers, return the answer that occurs last in the input.

Example 1:  
    Input: edges = [[1,2],[1,3],[2,3]]
    Output: [2,3]

Example 2:
    Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
    Output: [1,4] */

var findRedundantConnection = function (edges) {
  let par = Array.from({ length: edges.length + 1 }, (_, i) => i);
  const find = (x) => (x === par[x] ? par[x] : (par[x] = find(par[x])));
  const union = (x, y) => (par[find(y)] = find(x));
  for (let [a, b] of edges)
    if (find(a) === find(b)) return [a, b];
    else union(a, b);
};

console.log(
  findRedundantConnection([
    [1, 2],
    [1, 3],
    [2, 3],
  ])
);
console.log(
  findRedundantConnection([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 5],
  ])
);
