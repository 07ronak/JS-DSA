/* Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Example 1:
    Input: s = "aa", p = "a"
    Output: false
    Explanation: "a" does not match the entire string "aa".

Example 2:
    Input: s = "aa", p = "a*"
    Output: true
    Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:
    Input: s = "ab", p = ".*"
    Output: true
    Explanation: ".*" means "zero or more (*) of any character (.)". */

var isMatch = function (s, p) {
  if (p === ".*") return true;

  const n = s.length;
  const m = p.length;

  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));
  dp[0][0] = true;

  // Handle patterns like a*, a*b*, etc. for an empty string `s`.
  for (let j = 1; j <= m; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
        //match condition
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        // '*' can represent zero or more of the preceding character.
        dp[i][j] = dp[i][j - 2]; // '*' acts as zero occurrences.
        if (p[j - 2] === s[i - 1] || p[j - 2] === ".") {
          dp[i][j] = dp[i][j] || dp[i - 1][j]; // '*' acts as one or more occurrences.
        }
      }
    }
  }
  return dp[n][m];
};

console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("ab", ".*"));
