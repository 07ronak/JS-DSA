/* Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] 
(start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.

Example 1:
    Input: intervals = [(0,30),(5,10),(15,20)]
    Output: false
    Explanation:
                (0,30) and (5,10) will conflict
                (0,30) and (15,20) will conflict
Example 2:
    Input: intervals = [(5,8),(9,15)]
    Output: true */

function canAttendMeetings(intervals) {
  // Handle edge case of empty input
  if (intervals.length === 0) return true;

  // Sort by start time instead of end time for more intuitive comparison
  intervals.sort((a, b) => a[0] - b[0]);

  // Compare each meeting with the next one to check for overlaps
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      return false; // Found an overlap
    }
  }
  return true;
}

// Corrected test cases
console.log(
  canAttendMeetings([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
); // false
console.log(
  canAttendMeetings([
    [5, 8],
    [9, 15],
  ])
); // true
