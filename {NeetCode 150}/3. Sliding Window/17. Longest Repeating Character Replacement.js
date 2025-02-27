/* You are given a string s and an integer k. 

You can choose any character of the string and change it to any other uppercase English character.
You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
  Input: s = "ABAB", k = 2
  Output: 4
  Explanation: Replace the two 'A's with two 'B's or vice versa. */

function characterReplacement(s, k) {
  let maxLength = 0; // To store the maximum length of the substring
  let maxCharCount = 0; // To track the count of the most frequent character in the current window
  const charCount = {}; // To store the count of characters in the current window
  let start = 0; // Start index of the sliding window

  for (let end = 0; end < s.length; end++) {
    const endChar = s[end];
    charCount[endChar] = (charCount[endChar] || 0) + 1;
    maxCharCount = Math.max(maxCharCount, charCount[endChar]);

    // If the remaining characters in the window that are not the most frequent exceed k, shrink the window
    if (end - start + 1 - maxCharCount > k) {
      const startChar = s[start];
      charCount[startChar]--;
      start++;
    }

    // Update the maximum length of the substring
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
const s = "AABABBA";
const k = 1;
console.log(characterReplacement(s, k)); // Output: 4

console.log(characterReplacement("ABAB", 2)); // Output: 4
