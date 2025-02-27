/* Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

-Insert a character
-Delete a character
-Replace a character
 
Example 1:
    Input: word1 = "horse", word2 = "ros"
    Output: 3
    Explanation: 
                horse -> rorse (replace 'h' with 'r')
                rorse -> rose (remove 'r')
                rose -> ros (remove 'e')
Example 2:
    Input: word1 = "intention", word2 = "execution"
    Output: 5
    Explanation: 
                intention -> inention (remove 't')
                inention -> enention (replace 'i' with 'e')
                enention -> exention (replace 'n' with 'x')
                exention -> exection (replace 'n' with 'c')
                exection -> execution (insert 'u') */

var minDistance = function (word1, word2) {
  const n = word1.length;
  const m = word2.length;

  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let c = 0; c <= m; c++) {
    dp[0][c] = c;
  }

  for (let r = 0; r <= n; r++) {
    dp[r][0] = r;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Take the minimum of the three possible operations:
        // 1. Delete (dp[i-1][j])
        // 2. Insert (dp[i][j-1])
        // 3. Replace (dp[i-1][j-1])
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[n][m];
};

console.log(minDistance("horse", "ros"));
console.log(minDistance("intention", "execution"));
