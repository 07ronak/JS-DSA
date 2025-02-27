const Queue = require("./Queue");

class DirectedGraph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = new Set();
    }
  }

  addEdge(source, destination) {
    if (!this.adjacentList[source]) {
      this.addVertex(source);
    }
    if (!this.adjacentList[destination]) {
      this.addVertex(destination);
    }
    this.adjacentList[source].add(destination); // Only one-way connection
  }

  display() {
    for (let vertex in this.adjacentList) {
      console.log(vertex + " -> " + [...this.adjacentList[vertex]]);
    }
  }

  hasEdge(source, destination) {
    if (!this.adjacentList[source]) {
      return false;
    }
    return this.adjacentList[source].has(destination);
  }

  removeEdge(source, destination) {
    if (!this.adjacentList[source]) {
      return false;
    }
    this.adjacentList[source].delete(destination);
  }

  removeVertex(vertex) {
    if (!this.adjacentList[vertex]) return;

    delete this.adjacentList[vertex];
    for (let adjVertex in this.adjacentList) {
      this.adjacentList[adjVertex].delete(vertex);
    }
  }

  bfs(startingVertex) {
    const visited = new Set();
    const queue = new Queue();
    const result = [];

    queue.enqueue(startingVertex);
    visited.add(startingVertex);

    while (!queue.isEmpty()) {
      const vertex = queue.dequeue();
      result.push(vertex);

      for (let neighbor of this.adjacentList[vertex]) {
        if (!visited.has(neighbor)) {
          queue.enqueue(neighbor);
          visited.add(neighbor);
        }
      }
    }

    return result;
  }

  dfs(startingVertex) {
    const visited = new Set();
    const result = [];

    const dfsHelper = (vertex) => {
      if (!vertex) return;

      visited.add(vertex);
      result.push(vertex);

      for (let neighbor of this.adjacentList[vertex]) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };

    dfsHelper(startingVertex);
    return result;
  }

  detectCycle() {
    const visited = new Set();
    const recursionStack = new Set();

    const dfsHelper = (vertex) => {
      visited.add(vertex);
      recursionStack.add(vertex);

      for (let neighbor of this.adjacentList[vertex]) {
        // If the neighbor is not visited, visit it recursively
        if (!visited.has(neighbor)) {
          if (dfsHelper(neighbor)) {
            return true; // Cycle found
          }
        }
        // If the neighbor is in the recursion stack, a cycle exists
        else if (recursionStack.has(neighbor)) {
          return true;
        }
      }

      recursionStack.delete(vertex); // Remove the vertex from the recursion stack
      return false;
    };

    // Check for cycles starting from each unvisited vertex
    for (let vertex in this.adjacentList) {
      if (!visited.has(vertex)) {
        if (dfsHelper(vertex)) {
          return true; // Cycle detected
        }
      }
    }

    return false; // No cycles detected
  }

  topologicalSort() {
    const visited = new Set();
    const stack = []; // Use a stack to store the topological order

    const dfsHelper = (vertex) => {
      visited.add(vertex);

      for (let neighbor of this.adjacentList[vertex]) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }

      stack.push(vertex); // Push the vertex onto the stack after visiting its neighbors
    };

    // Call dfsHelper for all vertices
    for (let vertex in this.adjacentList) {
      if (!visited.has(vertex)) {
        dfsHelper(vertex);
      }
    }

    return stack.reverse(); // Reverse the stack to get the topological order
  }
}

const graph = new DirectedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A"); // Creates a cycle
graph.addEdge("C", "D");

graph.display();
console.log("Cycle detected:", graph.detectCycle());
