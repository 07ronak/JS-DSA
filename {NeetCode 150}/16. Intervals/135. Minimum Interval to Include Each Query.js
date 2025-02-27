/* You are given a 2D integer array intervals, where intervals[i] = [lefti, righti] describes the 
ith interval starting at lefti and ending at righti (inclusive). The size of an interval is defined as 
the number of integers it contains, or more formally righti - lefti + 1.

You are also given an integer array queries. The answer to the jth query is the size of the smallest 
interval i such that lefti <= queries[j] <= righti. If no such interval exists, the answer is -1.

Return an array containing the answers to the queries.

Example 1:
    Input: intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]
    Output: [3,3,1,4]
    Explanation: The queries are processed as follows:
- Query = 2: The interval [2,4] is the smallest interval containing 2. The answer is 4 - 2 + 1 = 3.
- Query = 3: The interval [2,4] is the smallest interval containing 3. The answer is 4 - 2 + 1 = 3.
- Query = 4: The interval [4,4] is the smallest interval containing 4. The answer is 4 - 4 + 1 = 1.
- Query = 5: The interval [3,6] is the smallest interval containing 5. The answer is 6 - 3 + 1 = 4.

Example 2:
    Input: intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]
    Output: [2,-1,4,6]
    Explanation: The queries are processed as follows:
- Query = 2: The interval [2,3] is the smallest interval containing 2. The answer is 3 - 2 + 1 = 2.
- Query = 19: None of the intervals contain 19. The answer is -1.
- Query = 5: The interval [2,5] is the smallest interval containing 5. The answer is 5 - 2 + 1 = 4.
- Query = 22: The interval [20,25] is the smallest interval containing 22. The answer is 25 - 20 + 1 = 6. */

const MinHeapPriorityQueue = require("../Custom Data Structures/MinHeap Priority Queue");

var minInterval = function (intervals, queries) {
  intervals.sort((a, b) => a[0] - b[0]);
  //asc sorting of intervals array basis of first element

  // Step 2: Sort queries while maintaining their original indices
  const sortedQueries = queries
    .map((q, i) => [q, i])
    .sort((a, b) => a[0] - b[0]);

  const minHeap = new MinHeapPriorityQueue();

  let result = new Array(queries.length).fill(-1);
  let i = 0;

  // Process each query in sorted order
  for (let [query, originalIndex] of sortedQueries) {
    // Add all intervals that start before or at the current query into the min heap.
    while (i < intervals.length && intervals[i][0] <= query) {
      const [left, right] = intervals[i];
      minHeap.enqueue([left, right], right - left + 1);
      i += 1;
    }

    // Remove intervals from the heap that do not cover the query (i.e., they end before the query)
    while (!minHeap.isEmpty() && minHeap.peek().element[1] < query) {
      minHeap.dequeue();
    }

    // If there is at least one valid interval, the one on top of the heap is the smallest.
    if (!minHeap.isEmpty()) {
      result[originalIndex] = minHeap.peek().priority;
    }
  }

  // Return the answers in the original query order.
  return result;
};

console.log(
  minInterval(
    [
      [1, 4],
      [2, 4],
      [3, 6],
      [4, 4],
    ],
    [2, 3, 4, 5]
  )
);
console.log(
  minInterval(
    [
      [2, 3],
      [2, 5],
      [1, 8],
      [20, 25],
    ],
    [2, 19, 5, 22]
  )
);
