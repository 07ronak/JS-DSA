/**
 * Finds the length of the Longest Common Subsequence (LCS) between two strings
 * using dynamic programming with memoization
 *
 * Time Complexity: O(m*n), where m and n are lengths of input strings
 * Space Complexity: O(m*n) for the memoization table
 */
function longestCommonSubsequence(str1, str2) {
  // Create a 2D array to store the results of subproblems
  const memo = Array.from({ length: str1.length }, () =>
    Array(str2.length).fill(-1)
  );

  // Helper function to calculate LCS using recursion and memoization
  function dp(i, j) {
    // If we go out of bounds of either string, return 0 (no LCS)
    if (i < 0 || j < 0) return 0;

    // If we already calculated this subproblem, return the result
    if (memo[i][j] !== -1) return memo[i][j];

    // If characters match, add 1 to the LCS and move diagonally
    if (str1[i] === str2[j]) {
      memo[i][j] = 1 + dp(i - 1, j - 1);
    } else {
      // If characters don't match, take the max LCS by excluding one character
      memo[i][j] = Math.max(dp(i - 1, j), dp(i, j - 1));
    }

    // Return the calculated result
    return memo[i][j];
  }

  // Start the recursion from the end of both strings
  return dp(str1.length - 1, str2.length - 1);
}

/* --------------------------------------------------------------------------------------------------------------------------------- */

function LCStab(str1, str2) {
  const n = str1.length;
  const m = str2.length;

  // Create a 2D dp array initialized to 0
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  // Fill the dp table
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // The length of the LCS is in the bottom-right corner of the table
  return dp[n][m];
}

// Example Usage
const str1 = "abcd";
const str2 = "aceb";
const result = longestCommonSubsequence(str1, str2);
const result2 = LCStab(str1, str2);
console.log(`The length of LCS is via memoization: ${result}`);
console.log(`The length of LCS is via tabulation: ${result2}`);
