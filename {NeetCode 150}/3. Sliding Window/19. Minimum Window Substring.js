/* Given two strings s and t of lengths m and n respectively, return the minimum window substring of 's'
such that every character in t (including duplicates) is included in the window. If there is no such
substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example 1:
    Input: s = "ADOBECODEBANC", t = "ABC"
    Output: "BANC"
    Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
    Input: s = "a", t = "a"
    Output: "a"
    Explanation: The entire string s is the minimum window.

Example 3:
    Input: s = "a", t = "aa"
    Output: ""
    Explanation: Both 'a's from t must be included in the window.
                 Since the largest window of s only has one 'a', return empty string.         */

var minWindow = function (s, t) {
  // Edge case: If t is longer than s, it's impossible to find a valid window
  if (t.length > s.length) return "";

  // Frequency map for characters in t
  let tFreq = {};
  for (let char of t) {
    tFreq[char] = (tFreq[char] || 0) + 1;
  }

  // Frequency map for characters in the current window
  let windowFreq = {};

  // Pointers for the sliding window
  let left = 0,
    right = 0;

  // Variables to track the minimum window
  let minLen = Infinity,
    minStart = 0;

  // Total unique characters in t that need to be matched
  let required = Object.keys(tFreq).length;

  // Tracks how many unique characters from t are fully matched in the window
  let formed = 0;

  // Expand the window by moving the right pointer
  while (right < s.length) {
    let char = s[right];

    // Add the current character to the window's frequency map
    windowFreq[char] = (windowFreq[char] || 0) + 1;

    // If the current character matches the frequency in tFreq, increase `formed`
    if (tFreq[char] && windowFreq[char] === tFreq[char]) {
      formed++;
    }

    // Shrink the window from the left as long as it's valid
    while (formed === required) {
      // Update the minimum window if the current window is smaller
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }

      // Remove the character at the left of the window
      let leftChar = s[left];
      windowFreq[leftChar]--;

      // If the removed character causes the window to become invalid, decrease `formed`
      if (tFreq[leftChar] && windowFreq[leftChar] < tFreq[leftChar]) {
        formed--;
      }

      // Move the left pointer to shrink the window
      left++;
    }

    // Move the right pointer to expand the window
    right++;
  }

  // Return the minimum window substring or an empty string if no valid window exists
  return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
};

console.log(minWindow("ADOBECODEBANC", "ABC")); //"BANC"
console.log(minWindow("a", "a")); //"a"
console.log(minWindow("a", "aa")); //""
