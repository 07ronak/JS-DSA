/* Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), 
write a function to check whether these edges make up a valid tree.

Example 1:
    Input: n = 5
           edges = [[0, 1], [0, 2], [0, 3], [1, 4]]

Output: true

Example 2:
    Input: n = 5
           edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
Output: false

Note: You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] 
is the same as [1, 0] and thus will not appear together in edges. */

function validTree(n, edges) {
  // A valid tree must have exactly n-1 edges
  if (edges.length !== n - 1) return false;

  // Step 1: Build the graph using an adjacency list
  const graph = Array.from({ length: n }, () => []); // Create an empty list for each node
  for (const [u, v] of edges) {
    graph[u].push(v); // Add v to u's neighbor list
    graph[v].push(u); // Add u to v's neighbor list (undirected graph)
  }

  // Step 2: Initialize a set to keep track of visited nodes
  const visited = new Set();

  // Step 3: Define the DFS function to explore the graph
  function dfs(node, parent) {
    // If the node is already visited, it means there's a cycle
    if (visited.has(node)) return false;

    // Mark the current node as visited
    visited.add(node);

    // Explore all neighbors of the current node
    for (const neighbor of graph[node]) {
      // Skip the edge leading back to the parent node
      if (neighbor === parent) continue;

      // If DFS on the neighbor detects a cycle, return false
      if (!dfs(neighbor, node)) return false;
    }

    // If no cycle is found, return true
    return true;
  }

  // Step 4: Start DFS from node 0, with no parent (-1 indicates no parent)
  if (!dfs(0, -1)) return false; // If a cycle is detected, it's not a valid tree

  // Step 5: Ensure the graph is connected
  // If the number of visited nodes is not equal to n, it means the graph is disconnected
  return visited.size === n;
}

console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ])
);
console.log(
  validTree(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ])
);
