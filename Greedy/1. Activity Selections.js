/* You are given n activities with their start and end times. Select the maximum number of activities that can performed by a single
person, assuming that a person can only work on a single activity at a time. Activities are sorted according to end time. */

function activitySelection(startTime, endTime) {
  let maxAct = 0;
  let lastEnd = -1; // Keeps track of the end time of the last selected activity

  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] >= lastEnd) {
      // If the activity starts after or when the last one ended
      maxAct++;
      lastEnd = endTime[i]; // Update lastEnd to the end time of the selected activity
    }
  }

  return maxAct;
}

const start = [1, 3, 0, 5, 8, 5];
const end = [2, 4, 6, 7, 9, 9];

console.log(activitySelection(start, end)); // Output: 4
