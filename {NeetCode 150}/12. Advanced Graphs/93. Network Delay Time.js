/* You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel
times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target 
node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to 
receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

Example 1:
    Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
    Output: 2

Example 2:
    Input: times = [[1,2,1]], n = 2, k = 1
    Output: 1

Example 3:
    Input: times = [[1,2,1]], n = 2, k = 2
    Output: -1 */

const MinHeapPriorityQueue = require("../Custom Data Structures/MinHeap Priority Queue");

var networkDelayTime = function (times, n, k) {
  // Build the graph as an adjacency list
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, w] of times) {
    graph[u].push([v, w]);
  }

  // MinHeap to store the nodes with their travel time as priority
  const minHeap = new MinHeapPriorityQueue();
  minHeap.enqueue(k, 0);

  // Distance array to track the minimum time to reach each node
  const distances = Array(n + 1).fill(Infinity);
  distances[k] = 0;

  while (!minHeap.isEmpty()) {
    const { element: currentNode, priority: currentDistance } =
      minHeap.dequeue();

    if (currentDistance > distances[currentNode]) continue; // Skip if we already have a shorter path

    for (const [neighbor, weight] of graph[currentNode]) {
      const newDistance = currentDistance + weight;
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        minHeap.enqueue(neighbor, newDistance);
      }
    }
  }

  // Calculate the maximum time to reach any node
  const maxTime = Math.max(...distances.slice(1)); // Ignore index 0 as nodes are 1-indexed

  // If any node is unreachable, return -1
  return maxTime === Infinity ? -1 : maxTime;
};

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
);
console.log(networkDelayTime([[1, 2, 1]], 2, 1));
console.log(networkDelayTime([[1, 2, 1]], 2, 2));
