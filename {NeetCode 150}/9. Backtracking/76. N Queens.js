/* Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s.

Example 1:
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:
Input: s = "a"
Output: [["a"]] */

var partition = function (s) {
  let result = [];

  function bt(start, path) {
    if (start === s.length) {
      result.push([...path]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      let substring = s.substring(start, end + 1);

      if (isPalindrome(substring)) {
        path.push(substring);
        bt(end + 1, path);
        path.pop();
      }
    }
  }

  bt(0, []);
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

// Example usage:
console.log(partition("aab")); // Output: [["a","a","b"],["aa","b"]]
console.log(partition("a")); // Output: [["a"]]
console.log(partition("level"));
