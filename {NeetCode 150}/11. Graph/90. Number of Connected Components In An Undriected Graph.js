/* There is an undirected graph with n nodes. There is also an edges array, where edges[i] = [a, b] means 
that there is an edge between node a and node b in the graph.

The nodes are numbered from 0 to n - 1.

Return the total number of connected components in that graph.

Example 1:
    Input: n=3, edges=[[0,1], [0,2]]
    Output: 1

Example 2:
    Input: n=6, edges=[[0,1], [1,2], [2,3], [4,5]]
    Output:2 */

function countComponents(n, edges) {
  // Step 1: Build the graph using an adjacency list
  const graph = Array.from({ length: n }, () => []); // Create an empty list for each node
  for (const [u, v] of edges) {
    graph[u].push(v); // Add v to u's neighbor list
    graph[v].push(u); // Add u to v's neighbor list (undirected graph)
  }

  const visited = Array(n).fill(false);

  const dfs = (node) => {
    if (!visited[node]) {
      visited[node] = true;
      for (let nei of graph[node]) {
        dfs(nei);
      }
    }
  };

  let res = 0;
  for (let node = 0; node < n; node++) {
    if (!visited[node]) {
      dfs(node);
      res++;
    }
  }
  return res;
}

console.log(
  countComponents(3, [
    [0, 1],
    [0, 2],
  ])
);
console.log(
  countComponents(6, [
    [0, 1],
    [1, 2],
    [2, 3],
    [4, 5],
  ])
);
