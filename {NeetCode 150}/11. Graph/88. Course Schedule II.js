/* There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are 
given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take
course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, 
return any of them. If it is impossible to finish all courses, return an empty array.

Example 1:
    Input: numCourses = 2, prerequisites = [[1,0]]
    Output: [0,1]
    Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. 
                So the correct course order is [0,1].

Example 2:
    Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
    Output: [0,2,1,3]
    Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. 
                Both courses 1 and 2 should be taken after you finished course 0.
                So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
Example 3:
    Input: numCourses = 1, prerequisites = []
    Output: [0] */

var findOrder = function (numCourses, prerequisites) {
  let preMap = new Map();

  // Initialize the prerequisite map
  for (let i = 0; i < numCourses; i++) {
    preMap.set(i, []);
  }

  // Fill in the prerequisites for each course
  for (let [crs, pre] of prerequisites) {
    preMap.get(crs).push(pre);
  }

  let visiting = new Set(); // Set to detect cycles
  let visited = new Set(); // Set to track completed courses
  let result = []; // Array to store the topological order

  const dfs = (crs) => {
    if (visiting.has(crs)) {
      return false; // Cycle detected
    }

    if (visited.has(crs)) {
      return true; // Already processed
    }

    visiting.add(crs); // Mark as visiting

    // Visit all prerequisites
    for (let pre of preMap.get(crs)) {
      if (!dfs(pre)) {
        return false; // Cycle detected in a prerequisite
      }
    }

    visiting.delete(crs); // Remove from visiting
    visited.add(crs); // Mark as visited
    result.push(crs); // Add to result in postorder
    return true;
  };

  // Process each course
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return []; // Return an empty array if a cycle is detected
    }
  }

  return result;
};

console.log(findOrder(2, [[1, 0]]));
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
console.log(findOrder(1, []));
