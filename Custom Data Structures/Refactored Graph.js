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
    this.adjacentList[vertex2].add(vertex1);
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

  // Core traversal utility functions
  _bfsTraversal(startVertex, visited = new Set(), processVertex = null) {
    const queue = new Queue();
    const result = [];

    queue.enqueue(startVertex);
    visited.add(startVertex);

    while (!queue.isEmpty()) {
      const vertex = queue.dequeue();
      result.push(vertex);

      if (processVertex) {
        const shouldContinue = processVertex(vertex, visited);
        if (shouldContinue === false) return false;
      }

      for (let neighbor of this.adjacentList[vertex]) {
        if (!visited.has(neighbor)) {
          queue.enqueue(neighbor);
          visited.add(neighbor);
        }
      }
    }

    return result;
  }

  _dfsTraversal(vertex, visited = new Set(), processVertex = null) {
    visited.add(vertex);
    const result = [vertex];

    if (processVertex) {
      const shouldContinue = processVertex(vertex, visited);
      if (shouldContinue === false) return false;
    }

    for (let neighbor of this.adjacentList[vertex]) {
      if (!visited.has(neighbor)) {
        const subResult = this._dfsTraversal(neighbor, visited, processVertex);
        if (subResult === false) return false;
        if (Array.isArray(subResult)) {
          result.push(...subResult);
        }
      }
    }

    return result;
  }

  // Public methods using the utility functions
  bfs(startingVertex) {
    return this._bfsTraversal(startingVertex);
  }

  dfs(startingVertex) {
    return this._dfsTraversal(startingVertex);
  }

  bfsAll() {
    const visited = new Set();
    const result = [];

    for (let vertex in this.adjacentList) {
      if (!visited.has(vertex)) {
        result.push(this._bfsTraversal(vertex, visited));
      }
    }

    return result;
  }

  dfsAll() {
    const visited = new Set();
    const result = [];

    for (let vertex in this.adjacentList) {
      if (!visited.has(vertex)) {
        result.push(this._dfsTraversal(vertex, visited));
      }
    }

    return result;
  }

  hasPath(src, dest) {
    const processVertex = (vertex) => (vertex === dest ? false : true);
    return this._dfsTraversal(src, new Set(), processVertex) === false;
  }

  detectCycle() {
    const visited = new Set();

    const processVertex = (vertex, visited, parent = null) => {
      for (let neighbor of this.adjacentList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          if (!processVertex(neighbor, visited, vertex)) {
            return false;
          }
        } else if (neighbor !== parent) {
          return false; // Cycle detected
        }
      }
      return true;
    };

    for (let vertex in this.adjacentList) {
      if (!visited.has(vertex)) {
        visited.add(vertex);
        if (!processVertex(vertex, visited)) {
          return true; // Cycle found
        }
      }
    }

    return false;
  }

  isBipartite() {
    const colors = {};

    const processVertex = (vertex) => {
      for (let neighbor of this.adjacentList[vertex]) {
        if (!(neighbor in colors)) {
          colors[neighbor] = 1 - colors[vertex];
        } else if (colors[neighbor] === colors[vertex]) {
          return false;
        }
      }
      return true;
    };

    for (let vertex in this.adjacentList) {
      if (!(vertex in colors)) {
        colors[vertex] = 0;
        if (this._bfsTraversal(vertex, new Set(), processVertex) === false) {
          return false;
        }
      }
    }

    return true;
  }
}

module.exports = Graph;
