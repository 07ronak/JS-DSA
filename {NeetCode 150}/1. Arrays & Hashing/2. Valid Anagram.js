/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false */

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let frequencyMap = {};

  for (let char of s) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  for (let char of t) {
    if (!frequencyMap[char] || frequencyMap[char] === 0) return false;
    frequencyMap[char]--;
  }
  return true;
};
