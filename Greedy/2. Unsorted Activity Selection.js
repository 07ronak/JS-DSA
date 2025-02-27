function activitySelection(startTime, endTime) {
  // Step 1: Create a 2D array where each inner array contains [start_time, end_time]
  const activities = [];
  for (let i = 0; i < startTime.length; i++) {
    activities.push([startTime[i], endTime[i]]);
  }

  // Step 2: Sort activities based on end time
  activities.sort((a, b) => a[1] - b[1]);

  // Step 3: Apply greedy approach to select activities
  let maxAct = 1; // First activity is always selected
  let lastEnd = 0; // Index of last selected activity

  // Step 4: Iterate through sorted activities to find non-overlapping ones
  for (let i = 1; i < activities.length; i++) {
    // If i activity's start time is greater than or equal to
    // the end time of last selected activity, select it
    if (activities[i][0] >= activities[lastEnd][1]) {
      maxAct++;
      lastEnd = i;
    }
  }

  return maxAct;
}

// Test the function
const start = [0, 1, 3, 5, 5, 8];
const end = [6, 2, 4, 7, 9, 9];
console.log(activitySelection(start, end)); // Output: 4

// Example of how the activities array looks after sorting:
// activities = [
//     [1, 2],  // Activity 1: Start=1, End=2
//     [0, 4],  // Activity 2: Start=0, End=4
//     [5, 7],  // Activity 3: Start=5, End=7
//     [8, 9],  // Activity 4: Start=8, End=9
//     [5, 9]   // Activity 5: Start=5, End=9
// ]
