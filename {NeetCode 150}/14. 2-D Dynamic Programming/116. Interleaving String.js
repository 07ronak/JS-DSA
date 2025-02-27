/* Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where s and t are divided into 'n' and 'm' 
substrings respectively, such that:

-s = s1 + s2 + ... + sn
-t = t1 + t2 + ... + tm
-|n - m| <= 1
-The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...

Note: a + b is the concatenation of strings a and b.

Example 1:
    Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
    Output: true
    Explanation: One way to obtain s3 is:
                Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
                Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
                Since s3 can be obtained by interleaving s1 and s2, we return true.
Example 2:
    Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
    Output: false
    Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.

Example 3:
    Input: s1 = "", s2 = "", s3 = ""
    Output: true */

var isInterleave = function (s1, s2, s3) {
  const n = s1.length;
  const m = s2.length;
  if (s3.length !== n + m) return false;

  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));

  dp[n][m] = true;

  for (let i = n; i >= 0; i--) {
    for (let j = m; j >= 0; j--) {
      if (i < n && s1[i] === s3[i + j] && dp[i + 1][j]) {
        dp[i][j] = true;
      }
      if (j < m && s2[j] === s3[i + j] && dp[i][j + 1]) {
        dp[i][j] = true;
      }
    }
  }
  return dp[0][0];
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"));
console.log(isInterleave("", "", ""));
