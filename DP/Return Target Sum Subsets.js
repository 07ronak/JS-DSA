function targetSumSubsets(numbers, target) {
  const n = numbers.length;

  // Create a DP table with dimensions (n+1) x (target+1), initialized as empty arrays
  const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(null));
  for (let i = 0; i <= n; i++) {
    dp[i][0] = [[]]; // Base case: One way to achieve sum 0 is with an empty subset
  }

  // Fill the DP table
  for (let i = 1; i <= n; i++) {
    for (let t = 1; t <= target; t++) {
      const exclude = dp[i - 1][t] || []; // Subsets without including current number
      const include =
        t >= numbers[i - 1] && dp[i - 1][t - numbers[i - 1]]
          ? dp[i - 1][t - numbers[i - 1]].map((subset) => [
              ...subset,
              numbers[i - 1],
            ])
          : [];

      // Combine subsets from include and exclude cases
      dp[i][t] = [...exclude, ...include];
    }
  }

  // The result is stored in dp[n][target]
  return dp[n][target] || [];
}

// Example usage:
const numbers = [4, 2, 7, 1, 3, 6, 3, 6, 2, 7, 2, 8, 23, 6, 4, 11, 56, 21];
const target = 171;

const subsets = targetSumSubsets(numbers, target);
console.log(subsets); // Output: All subsets that sum to 10
