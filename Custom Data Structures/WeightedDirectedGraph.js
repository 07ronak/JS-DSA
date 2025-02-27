const MinHeapPriorityQueue = require("./MinHeap Priority Queue");

class WeightedDirectedGraph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
    }
  }

  addEdge(source, destination, weight) {
    if (!this.adjacentList[source]) {
      this.addVertex(source);
    }
    if (!this.adjacentList[destination]) {
      this.addVertex(destination);
    }
    this.adjacentList[source].push({ node: destination, weight });
  }

  display() {
    for (let vertex in this.adjacentList) {
      console.log(
        vertex +
          " -> " +
          this.adjacentList[vertex]
            .map((edge) => `{${edge.node}, ${edge.weight}}`)
            .join(", ")
      );
    }
  }

  dijkstra(start, end = null) {
    const distances = {};
    const previous = {};
    const visited = new Set();
    const priorityQueue = new MinHeapPriorityQueue();

    // Initialize distances and priority queue
    for (let vertex in this.adjacentList) {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    }
    distances[start] = 0;
    priorityQueue.enqueue(start, 0);

    while (!priorityQueue.isEmpty()) {
      const { element: currentVertex } = priorityQueue.dequeue();

      if (visited.has(currentVertex)) continue;
      visited.add(currentVertex);

      // Stop early if the end vertex is reached
      if (end && currentVertex === end) break;

      for (let neighbor of this.adjacentList[currentVertex]) {
        const { node: nextNode, weight } = neighbor;
        const newDistance = distances[currentVertex] + weight;

        if (newDistance < distances[nextNode]) {
          distances[nextNode] = newDistance;
          previous[nextNode] = currentVertex;
          priorityQueue.enqueue(nextNode, newDistance);
        }
      }
    }

    if (end) {
      // Reconstruct the shortest path to the end vertex
      const path = [];
      let currentNode = end;
      while (currentNode) {
        path.unshift(currentNode);
        currentNode = previous[currentNode];
      }
      return {
        path,
        distance: distances[end],
      };
    }

    return {
      distances,
      previous,
    };
  }

  hasPath(source, destination) {
    const result = this.dijkstra(source, destination);
    return result.distance !== Infinity;
  }
}

const graph = new WeightedDirectedGraph();
graph.addVertex("0");
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");

graph.addEdge("0", "1", 2);
graph.addEdge("1", "2", 1);
graph.addEdge("0", "2", 4);
graph.addEdge("1", "3", 7);
graph.addEdge("2", "3", 3);
graph.addEdge("4", "5", 5);
graph.addEdge("3", "5", 1);
graph.addEdge("4", "3", 2);

graph.display();

// Shortest path to a specific destination
const result1 = graph.dijkstra("4", "5");
console.log(
  "Shortest path to 5 from 4:",
  result1.path,
  "with distance:",
  result1.distance
);

// Distances to all vertices
const result2 = graph.dijkstra("4");
console.log("All distances from 4:", result2.distances);
console.log("Previous vertices for all:", result2.previous);
