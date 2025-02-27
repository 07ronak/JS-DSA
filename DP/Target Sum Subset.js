function targetSumSubset(numbers, target) {
  const n = numbers.length;

  // Create a DP table with dimensions (n+1) x (target+1)
  const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));

  // If the target sum is 0, we can always achieve it with an empty subset
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  // Fill the DP table
  for (let i = 1; i <= n; i++) {
    for (let t = 1; t <= target; t++) {
      if (numbers[i - 1] > t) {
        // Current number is greater than the target, so exclude it
        dp[i][t] = dp[i - 1][t];
      } else {
        // Check if we can achieve the target by including or excluding the current number
        dp[i][t] = dp[i - 1][t] || dp[i - 1][t - numbers[i - 1]];
      }
    }
  }

  // The result is in the bottom-right cell of the DP table
  return dp[n][target];
}

// Example usage:
const numbers = [4, 2, 7, 1, 3];
const target = 10;

console.log(targetSumSubset(numbers, target)); // Output: true
