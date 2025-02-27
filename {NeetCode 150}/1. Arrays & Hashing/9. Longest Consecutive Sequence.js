/* Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  // If array is empty, return 0
  if (nums.length === 0) return 0;

  // Create a Set for O(1) lookup
  const numSet = new Set(nums);
  let maxLength = 1;

  // Iterate through each number in the array
  for (const num of numSet) {
    // Only start counting sequences from the smallest number in the sequence
    // This ensures we don't count the same sequence multiple times
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      // Keep checking for consecutive numbers
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      // Update maxLength if current sequence is longer
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}
