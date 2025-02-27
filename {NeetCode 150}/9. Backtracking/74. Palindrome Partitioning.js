/* Given a string s, partition s such that every substring of the partition is a palindrome. 
Return all possible palindrome partitioning of s.

Example 1:
    Input: s = "aab"
    Output: [["a","a","b"],["aa","b"]]

Example 2:
    Input: s = "a"
    Output: [["a"]] */

var partition = function (s) {
  let result = [];

  function backtrack(start, path) {
    // If we've reached the end of the string, add the current path to the result
    if (start === s.length) {
      result.push([...path]);
      return;
    }

    // Explore all possible substrings starting from the current index
    for (let end = start; end < s.length; end++) {
      const substring = s.substring(start, end + 1);
      if (isPalindrome(substring)) {
        // If the substring is a palindrome, add it to the current path
        path.push(substring);
        backtrack(end + 1, path); // Recurse with the rest of the string
        path.pop(); // Backtrack to explore other partitions
      }
    }
  }
  backtrack(0, []);
  return result;
};

function isPalindrome(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  let left = 0;
  let right = s.length - 1;

  while (right > left) {
    if (s[right] !== s[left]) return false;
    left++;
    right--;
  }
  return true;
}
