/* Given an integer array nums, return true if you can partition the array into two subsets such that the 
sum of the elements in both subsets is equal or false otherwise.

Example 1:
    Input: nums = [1,5,11,5]
    Output: true
    Explanation: The array can be partitioned as [1, 5, 5] and [11].

Example 2:
    Input: nums = [1,2,3,5]
    Output: false
    Explanation: The array cannot be partitioned into equal sum subsets. */

var canPartition = function (nums) {
  const totalSum = nums.reduce((cur, acc) => cur + acc, 0);

  // If the total sum is odd, it's impossible to partition the array into two subsets with equal sum
  if (totalSum % 2 !== 0) return false;

  const target = totalSum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true; // We can always form a sum of 0

  for (const num of nums) {
    // Iterate backwards to avoid overwriting results for the current number
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
    //dp[i] represents whether it's possible to form a sum of i using elements from the array.
  }

  return dp[target];
};
//If we can find a subset whose sum equals half of the total sum of the array,
// the remaining elements will automatically form the other subset.

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));
