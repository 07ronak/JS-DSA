/* You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it 
represented by an array nums. You are asked to burst all the balloons.

If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 
goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.

Return the maximum coins you can collect by bursting the balloons wisely.

Example 1:
    Input: nums = [3,1,5,8]
    Output: 167
    Explanation:
                nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
                coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
Example 2:
    Input: nums = [1,5]
    Output: 10 */

var maxCoins = function (nums) {
  const n = nums.length;

  const newNums = [1, ...nums, 1];

  const dp = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(0));

  for (let length = 1; length <= n; length++) {
    // length of the subarray
    for (let left = 1; left <= n - length + 1; left++) {
      // left boundary of the subarray
      const right = left + length - 1; // right boundary of the subarray

      // Compute the maximum coins for the subarray [left, right]
      for (let i = left; i <= right; i++) {
        // i is the balloon to burst last
        dp[left][right] = Math.max(
          dp[left][right],
          dp[left][i - 1] + // coins from the left part
            newNums[left - 1] * newNums[i] * newNums[right + 1] + // coins from bursting balloon i
            dp[i + 1][right] // coins from the right part
        );
      }
    }
  }

  // The answer is the maximum coins for bursting all balloons, excluding the virtual ones
  return dp[1][n];
};
