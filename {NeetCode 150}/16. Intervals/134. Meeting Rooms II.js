/* Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] 
(start_i < end_i), find the minimum number of days required to schedule all meetings without any conflicts.

Example 1:
    Input: intervals = [(0,40),(5,10),(15,20)]
    Output: 2
    Explanation:
                day1: (0,40)
                day2: (5,10),(15,20)
Example 2:
    Input: intervals = [(4,9)]
    Output: 1 */

function minMeetingRooms(intervals) {
  if (!intervals || intervals.length === 0) return 0;

  // Sort meetings by start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Min heap to track end times
  let minHeap = [];

  for (let i = 0; i < intervals.length; i++) {
    let [start, end] = intervals[i];

    // If the earliest ending meeting is done before the current one starts, remove it
    if (minHeap.length > 0 && minHeap[0] <= start) {
      minHeap.shift();
    }

    // Add current meeting's end time to the heap
    minHeap.push(end);
    minHeap.sort((a, b) => a - b); // Maintain the heap order
  }

  return minHeap.length; // The heap size represents the minimum rooms required
}

// Corrected test cases
console.log(
  minMeetingRooms([
    [0, 40],
    [5, 10],
    [15, 20],
  ])
); // Output: 2
console.log(minMeetingRooms([[4, 9]])); // Output: 1
