//i = index
function knapsack(values, wt, W) {
  const n = values.length;
  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(-1));

  function helper(i, remainingWeight) {
    if (i === 0 || remainingWeight === 0) return 0; // Base case

    if (dp[i][remainingWeight] !== -1) return dp[i][remainingWeight]; // Use memoized result

    if (wt[i - 1] > remainingWeight) {
      dp[i][remainingWeight] = helper(i - 1, remainingWeight); // Skip current item
    } else {
      const include =
        values[i - 1] + helper(i - 1, remainingWeight - wt[i - 1]);
      const exclude = helper(i - 1, remainingWeight);
      dp[i][remainingWeight] = Math.max(include, exclude); // Choose max profit
    }

    return dp[i][remainingWeight];
  }

  return helper(n, W); // Start from the full problem
}

// Example usage:
const values = [15, 14, 10, 45, 23];
const wt = [2, 5, 1, 3, 4];
const W = 7;

console.log(
  "using memoiztion =>",
  knapsack(values, wt, W),
  "for",
  values,
  "with weight",
  wt,
  "respectively."
); // Output: 70

/* --------------------------------------------------------------------------------------------------------------------- */

function knapsackTab(values, wt, W) {
  const n = values.length;

  // Create a 2D DP table with dimensions (n+1) x (W+1)
  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  // Fill the DP table iteratively
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= W; j++) {
      if (wt[i - 1] <= j) {
        // Include or exclude the current item
        dp[i][j] = Math.max(
          values[i - 1] + dp[i - 1][j - wt[i - 1]], // Include item
          dp[i - 1][j] // Exclude item
        );
      } else {
        // If current item's weight exceeds capacity, exclude it
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  // The answer is in the bottom-right cell of the DP table
  return dp[n][W];
}

// Example usage:
const val = [15, 14, 10, 45, 30];
const weight = [2, 5, 1, 3, 4];
const capacity = 7;

console.log(
  "using tabulation =>",
  knapsackTab(val, weight, capacity),
  "for",
  val,
  "with weight",
  weight,
  "respectively."
); // Output: 75
