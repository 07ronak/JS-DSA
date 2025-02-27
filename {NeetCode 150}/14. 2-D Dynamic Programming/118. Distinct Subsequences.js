/* Given two strings s and t, return the number of distinct subsequences of s which equals t.

The test cases are generated so that the answer fits on a 32-bit signed integer.

Example 1:
    Input: s = "rabbbit", t = "rabbit"
    Output: 3
    Explanation:
                As shown below, there are 3 ways you can generate "rabbit" from s.
                rabb'b'it
                ra'b'bbit
                rabb'b'it
Example 2:
    Input: s = "babgbag", t = "bag"
    Output: 5
    Explanation:
                As shown below, there are 5 ways you can generate "bag" from s.
                'ba'b'g'bag
                'ba'bgba'g'
                'b'abgb'ag'
                ba'b'gb'ag'
                babg'bag' */

var numDistinct = function (s, t) {
  const n = s.length;
  const m = t.length;

  if (m > n) return 0;

  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let r = 0; r <= n; r++) {
    dp[r][0] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s[i - 1] === t[j - 1]) {
        // 1. Include this character in subsequence
        // 2. Skip this character even though it matches
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][m];
};

console.log(numDistinct("rabbbit", "rabbit"));
console.log(numDistinct("babgbag", "bag"));
