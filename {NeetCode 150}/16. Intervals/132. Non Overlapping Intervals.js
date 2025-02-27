/* Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum 
number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

Example 1:
    Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
    Output: 1
    Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

Example 2:
    Input: intervals = [[1,2],[1,2],[1,2]]
    Output: 2
    Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

Example 3:
    Input: intervals = [[1,2],[2,3]]
    Output: 0
    Explanation: You don't need to remove any of the intervals since they're already non-overlapping. */

var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;

  // Sort intervals based on end times to maximize the number of non-overlapping intervals
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0; // Count of intervals to remove
  let prevEnd = intervals[0][1]; // End time of last included interval

  for (let i = 1; i < intervals.length; i++) {
    let [start, end] = intervals[i];

    if (start < prevEnd) {
      // Overlapping interval, we need to remove one
      count++;
    } else {
      // Non-overlapping, update `prevEnd`
      prevEnd = end;
    }
  }

  return count;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ])
);
