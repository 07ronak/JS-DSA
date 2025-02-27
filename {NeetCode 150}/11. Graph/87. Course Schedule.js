/* There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are 
given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take 
course bi first if you want to take course ai.

-For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return true if you can finish all courses. Otherwise, return false.

Example 1:
    Input: numCourses = 2, prerequisites = [[1,0]]
    Output: true
    Explanation: There are a total of 2 courses to take. 
                To take course 1 you should have finished course 0. So it is possible.
Example 2:
    Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
    Output: false
    Explanation: There are a total of 2 courses to take. 
    To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible. */

var canFinish = function (numCourses, prerequisites) {
  // Create a map where each course points to its prerequisites
  const preMap = new Map();
  for (let i = 0; i < numCourses; i++) {
    preMap.set(i, []);
  }
  // Fill in the prerequisites for each course
  for (let [crs, pre] of prerequisites) {
    preMap.get(crs).push(pre);
  }

  let visited = new Set(); // Keeps track of courses we're currently checking

  const dfs = (crs) => {
    // If we see a course we're already checking, we've found a cycle
    if (visited.has(crs)) {
      return false; // Can't complete the courses
    }

    // If a course has no prerequisites, we can definitely take it
    if (preMap.get(crs).length === 0) {
      return true;
    }

    visited.add(crs); // Leave a breadcrumb
    // Check all prerequisites of the current course
    for (let pre of preMap.get(crs)) {
      if (!dfs(pre)) return false;
    }

    visited.delete(crs); // Remove the breadcrumb
    preMap.set(crs, []); // Mark this course as completable
    return true;
  };

  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return false;
    }
  }
  return true;
};

console.log(canFinish(2, [[1, 0]]));
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);
