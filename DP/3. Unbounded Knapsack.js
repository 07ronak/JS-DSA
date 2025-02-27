function unboundedKnapsack(values, wt, W) {
  const n = values.length;

  // Create a 2D DP array (n+1 rows and W+1 columns) initialized to 0
  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  // Fill the DP table
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= W; j++) {
      if (wt[i - 1] <= j) {
        // Take the current item or leave it
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - wt[i - 1]] + values[i - 1]);
      } else {
        // Leave the current item
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][W]; // Max profit at dp[n][W]
}

// Example Input
const values = [15, 14, 10, 45, 30];
const wt = [2, 5, 1, 3, 4];
const W = 7;

// Get the maximum profit
const maxProfit = unboundedKnapsack(values, wt, W);
console.log("Maximum Profit:", maxProfit); // Output: 100

const price = [1, 5, 8, 9, 10, 17, 17, 20];
const length = [1, 2, 3, 4, 5, 6, 7, 8];
const rodLength = 8;

console.log(
  "maximum value for rod",
  unboundedKnapsack(price, length, rodLength)
);
