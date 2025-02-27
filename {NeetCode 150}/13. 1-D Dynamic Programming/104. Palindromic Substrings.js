/* Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Example 1:
    Input: s = "abc"
    Output: 3
    Explanation: Three palindromic strings: "a", "b", "c".

Example 2:
    Input: s = "aaa"
    Output: 6
    Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa". */

var countSubstrings = function (s) {
  if (s.length === 1 || s.length === 0) {
    return s.length;
  }

  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(false));
  let count = 0;

  // Single character substrings are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    count++;
  }

  // Check two-character substrings
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      count++;
    }
  }

  // Check substrings longer than 2 characters
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1; // Ending index of the substring
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        count++;
      }
    }
  }

  return count;
};

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));
