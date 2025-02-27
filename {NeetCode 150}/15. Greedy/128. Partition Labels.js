/* You are given a string s. We want to partition the string into as many parts as possible so that each 
letter appears in at most one part. For example, the string "ababcc" can be partitioned into
 ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

Example 1:
    Input: s = "ababcbacadefegdehijhklij"
    Output: [9,7,8]
    Explanation:
                The partition is "ababcbaca", "defegde", "hijhklij".
                This is a partition so that each letter appears in at most one part.
                A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
Example 2:
    Input: s = "eccbbbbdec"
    Output: [10] */

var partitionLabels = function (s) {
  // STEP 1: Create a map to store the last occurrence of each character
  const lastIndex = {};

  for (let i = 0; i < s.length; i++) {
    // This ensures we capture the rightmost position of each character
    lastIndex[s[i]] = i;
  }

  const res = [];

  // These variables help us define partition boundaries
  let start = 0;
  let end = 0;

  // Iterate through the string to create partitions
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // CORE LOGIC: Extend the end of current partition
    // We want to include all last occurrences of characters seen so far
    end = Math.max(end, lastIndex[char]);

    // Check if we've reached the end of a valid partition
    // This happens when current index matches the furthest required index
    if (i === end) {
      // Adding 1 because partition length is (end - start + 1)
      res.push(end - start + 1);

      // Move start to beginning of next partition
      start = i + 1;
    }
  }

  return res;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
console.log(partitionLabels("eccbbbbdec"));
