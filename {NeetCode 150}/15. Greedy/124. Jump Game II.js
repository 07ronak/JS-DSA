/* You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other 
words, if you are at nums[i], you can jump to any nums[i + j] where:

-0 <= j <= nums[i] and
-
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1]. 

Example 1:
    Input: nums = [2,3,1,1,4]
    Output: 2
    Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, 
    then 3 steps to the last index.

Example 2:
    Input: nums = [2,3,0,1,4]
    Output: 2 */

var jump = function (nums) {
  // Initialize our tracking variables:
  // res: counts the number of jumps we've made
  // l: left boundary of our current "reachable window"
  // r: right boundary of our current "reachable window"
  let res = 0,
    l = 0,
    r = 0;

  // Continue jumping until we can reach the last position
  // We use nums.length - 1 because that's the index of the last element
  while (r < nums.length - 1) {
    // farthest keeps track of the furthest position we can reach
    // from any position in our current window
    let farthest = 0;

    // Examine every position in our current window
    // This is like looking ahead to see where we could potentially jump
    for (let i = l; i <= r; i++) {
      // For each position:
      // i + nums[i] represents how far we can jump from position i
      // We keep track of the maximum distance we could reach
      farthest = Math.max(farthest, i + nums[i]);
    }

    // After finding the farthest we can reach:
    // Move the left boundary to just after our previous right boundary
    l = r + 1;
    // Set the new right boundary to the farthest position we can reach
    r = farthest;
    // Increment jump counter since we're making another jump
    res++;
  }

  return res;
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
