/* Matrix Chain Multiplication */
function MCMrec(arr, i, j) {
  if (i === j) return 0; // Base case: single matrix has zero multiplication cost

  let minCost = Infinity;

  for (let k = i; k < j; k++) {
    // Recursively calculate cost of multiplying from i to k and k+1 to j
    let cost =
      MCMrec(arr, i, k) + MCMrec(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];

    // Update minimum cost
    minCost = Math.min(minCost, cost);
  }

  return minCost;
}

// Example usage:
const dimensions = [1, 2, 3, 4, 3];
const n = dimensions.length;
console.log(MCMrec(dimensions, 1, n - 1));

/* -------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------MEMOIZATION Code------------------------------------ */
function MCMmemo(arr) {
  const n = arr.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(-1));

  function helper(i, j) {
    if (i === j) return 0; // Base case: single matrix has zero multiplication cost

    if (dp[i][j] !== -1) return dp[i][j]; // Return precomputed result if exists

    let minCost = Infinity;

    for (let k = i; k < j; k++) {
      // Recursively calculate cost of multiplying from i to k and k+1 to j
      let cost = helper(i, k) + helper(k + 1, j) + arr[i - 1] * arr[k] * arr[j];

      // Update minimum cost
      minCost = Math.min(minCost, cost);
    }

    return (dp[i][j] = minCost); // Store result in memoization table
  }

  return helper(1, n - 1);
}

// Example usage:
console.log(MCMmemo(dimensions)); // Output: 30

/* ------------------------------------------------------------------------------------------------------------------------------ */
/* ----------------------TABULATION CODE------------------------------- */
function MCMtabulation(arr) {
  const n = arr.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  // Fill dp table in bottom-up manner
  for (let len = 2; len < n; len++) {
    // Length of the chain
    for (let i = 1; i < n - len + 1; i++) {
      let j = i + len - 1;
      dp[i][j] = Infinity;

      for (let k = i; k < j; k++) {
        let cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];

        dp[i][j] = Math.min(dp[i][j], cost);
      }
    }
  }

  return dp[1][n - 1]; // Minimum cost for the full matrix chain
}

// Example usage:
console.log(MCMtabulation(dimensions)); // Output: 30
