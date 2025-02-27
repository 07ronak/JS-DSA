/* You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each 
integer in nums and then concatenate all the integers.

-For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".

Return the number of different expressions that you can build, which evaluates to target. 

Example 1:
    Input: nums = [1,1,1,1,1], target = 3
    Output: 5
    Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.

-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3

Example 2:
    Input: nums = [1], target = 1
    Output: 1 */

var findTargetSumWays = function (nums, target) {
  const n = nums.length;
  if (!nums || n === 0) return 0;

  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

  // Check for invalid cases
  const newTarget = totalSum - target;
  if (newTarget < 0 || newTarget % 2 !== 0) return 0;

  const subsetSum = newTarget / 2;

  const dp = Array.from({ length: n + 1 }, () => Array(subsetSum + 1).fill(0));
  dp[0][0] = 1; // 1 way to make sum 0 with 0 elements

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= subsetSum; j++) {
      dp[i][j] = dp[i - 1][j]; // Exclude
      if (j >= nums[i - 1]) {
        dp[i][j] += dp[i - 1][j - nums[i - 1]]; // Include
      }
    }
  }

  return dp[n][subsetSum];
};

console.log(findTargetSumWays([1,1,1,1,1], 3));
console.log(findTargetSumWays([1],  1));
