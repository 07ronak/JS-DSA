/* Given a string s, return the longest palindromic substring in s.

Example 1:
    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.

Example 2:
    Input: s = "cbbd"
    Output: "bb */

var longestPalindrome = function (s) {
  if (s.length === 1 || s.length === 0) {
    return s;
  }

  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(false));
  let start = 0; // Starting index of the longest palindrome
  let maxLength = 1; // Length of the longest palindrome

  // Single character substrings are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // Check two-character substrings
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check substrings longer than 2 characters
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1; // Ending index of the substring
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        start = i;
        maxLength = length;
      }
    }
  }

  return s.substring(start, start + maxLength);
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
