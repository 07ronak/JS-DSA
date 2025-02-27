const Queue = require("./Queue");

class Graph {
  constructor() {
    this.adjacentList = {};
  }
  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacentList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacentList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacentList[vertex1].add(vertex2);
    this.adjacentList[vertex2].add(vertex1); //since this is an undirected graph
  }
  display() {
    for (let vertex in this.adjacentList) {
      console.log(vertex + " -> " + [...this.adjacentList[vertex]]);
    }
  }
  hasEdge(vertex1, vertex2) {
    if (!this.adjacentList[vertex1] || !this.adjacentList[vertex2]) {
      return undefined;
    }

    return (
      this.adjacentList[vertex1].has(vertex2) &&
      this.adjacentList[vertex2].has(vertex1)
    );
  }
  removeEdge(vertex1, vertex2) {
    if (!this.adjacentList[vertex1] || !this.adjacentList[vertex2]) {
      return undefined;
    }
    this.adjacentList[vertex1].delete(vertex2);
    this.adjacentList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacentList[vertex]) return undefined;

    for (let adjacentVertex of this.adjacentList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacentList.vertex;
  }
  // Breadth-First Search
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

  // Depth-First Search
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

  hasPath(src, dest) {
    const visited = new Set();

    const dfsHelper = (vertex) => {
      if (vertex === dest) return true;

      visited.add(vertex);

      for (let neighbor of this.adjacentList[vertex]) {
        if (!visited.has(neighbor)) {
          if (dfsHelper(neighbor)) {
            return true;
          }
        }
      }
      return false;
    };

    return dfsHelper(src);
  }

  // Breadth-First Search for all components
  bfsAll() {
    const visited = new Set();
    const result = [];

    const bfsUtil = (start) => {
      const queue = new Queue();
      queue.enqueue(start);
      visited.add(start);

      const component = [];
      while (!queue.isEmpty()) {
        const vertex = queue.dequeue();
        component.push(vertex);

        for (let neighbor of this.adjacentList[vertex]) {
          if (!visited.has(neighbor)) {
            queue.enqueue(neighbor);
            visited.add(neighbor);
          }
        }
      }
      return component;
    };

    for (let vertex in this.adjacentList) {
      if (!visited.has(vertex)) {
        result.push(bfsUtil(vertex));
      }
    }

    return result;
  }

  // Depth-First Search for all components
  dfsAll() {
    const visited = new Set();
    const result = [];

    const dfsUtil = (vertex, component) => {
      visited.add(vertex);
      component.push(vertex);

      for (let neighbor of this.adjacentList[vertex]) {
        if (!visited.has(neighbor)) {
          dfsUtil(neighbor, component);
        }
      }
    };

    for (let vertex in this.adjacentList) {
      if (!visited.has(vertex)) {
        const component = [];
        dfsUtil(vertex, component);
        result.push(component);
      }
    }

    return result;
  }

  detectCycle() {
    const visited = new Set();

    const dfsHelper = (vertex, parent) => {
      visited.add(vertex);

      for (let neighbor of this.adjacentList[vertex]) {
        // If the neighbor is not visited, recursively call dfsHelper
        if (!visited.has(neighbor)) {
          if (dfsHelper(neighbor, vertex)) {
            return true; // Cycle found
          }
        }
        // If the neighbor is visited and not the parent, it's a cycle
        else if (neighbor !== parent) {
          return true;
        }
      }

      return false;
    };

    // Check each component of the graph
    for (let vertex in this.adjacentList) {
      if (!visited.has(vertex)) {
        if (dfsHelper(vertex, null)) {
          return true; // Cycle detected
        }
      }
    }

    return false; // No cycles in any component
  }

  isBipartite() {
    const colors = {}; // Store colors for each vertex (0 or 1)

    const bfsHelper = (start) => {
      const queue = new Queue();
      queue.enqueue(start);
      colors[start] = 0; // Start with color 0

      while (!queue.isEmpty()) {
        const vertex = queue.dequeue();

        for (let neighbor of this.adjacentList[vertex]) {
          if (!(neighbor in colors)) {
            // Assign the opposite color to the neighbor
            colors[neighbor] = 1 - colors[vertex];
            queue.enqueue(neighbor);
          } else if (colors[neighbor] === colors[vertex]) {
            // If a neighbor has the same color as the current vertex, it's not bipartite
            return false;
          }
        }
      }

      return true; // No conflicts, this component is bipartite
    };

    // Check all components of the graph
    for (let vertex in this.adjacentList) {
      if (!(vertex in colors)) {
        if (!bfsHelper(vertex)) {
          return false; // If any component is not bipartite, return false
        }
      }
    }

    return true; // All components are bipartite
  }

  isBipartiteViaDFS() {
    const visited = new Set();
    const parentMap = {}; // To keep track of parents for cycle detection

    const dfsHelper = (vertex, parent, level) => {
      visited.add(vertex);
      parentMap[vertex] = parent;

      for (let neighbor of this.adjacentList[vertex]) {
        // If neighbor isn't visited, explore it
        if (!visited.has(neighbor)) {
          if (!dfsHelper(neighbor, vertex, level + 1)) {
            return false; // If a cycle of odd length is detected, return false
          }
        }
        // If the neighbor is visited and isn't the parent, it's a cycle
        else if (neighbor !== parent) {
          const cycleLength = level - parentMap[neighbor] + 1;
          if (cycleLength % 2 !== 0) {
            return false; // Odd-length cycle detected, not bipartite
          }
        }
      }

      return true; // No odd-length cycles detected
    };

    // Check all components
    for (let vertex in this.adjacentList) {
      if (!visited.has(vertex)) {
        if (!dfsHelper(vertex, null, 0)) {
          return false;
        }
      }
    }

    return true; // All components are bipartite
  }
}

const graph = new Graph();
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");
graph.addVertex("6");
graph.addVertex("7");
graph.addVertex("8");

graph.addEdge("0", "1");
graph.addEdge("0", "2");
graph.addEdge("2", "4");
graph.addEdge("1", "3");
graph.addEdge("3", "4");
graph.addEdge("3", "5");
graph.addEdge("4", "5");
graph.addEdge("6", "5");
graph.addEdge("7", "8");

graph.display();
/* console.log(graph.hasEdge("D", "B"));
console.log(graph.removeEdge("D", "B")); */
console.log("----DFS----", graph.dfs("0"));
console.log("----BFS----", graph.bfs("0"));
console.log("has path", graph.hasPath("0", "6"));
console.log("has path", graph.hasPath("0", "8"));
console.log("----BFS-ALL----", graph.bfsAll());
console.log("----DFS-ALL----", graph.dfsAll());
console.log("isCycle?", graph.detectCycle());
