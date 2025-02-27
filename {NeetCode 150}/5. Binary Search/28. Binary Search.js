/* Given an array of integers 'nums' which is sorted in ascending order, and an integer 'target', write a 
function to search 'target' in 'nums'. If 'target' exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
    Input: nums = [-1,0,3,5,9,12], target = 9
    Output: 4
    Explanation: 9 exists in nums and its index is 4

Example 2:
    Input: nums = [-1,0,3,5,9,12], target = 2
    Output: -1
    Explanation: 2 does not exist in nums so return -1 */

var search = function (nums, target, start = 0, end = nums.length - 1) {
  if (start > end) return -1;

  const middle = Math.floor((start + end) / 2);

  if (nums[middle] === target) return middle;

  if (nums[middle] > target) {
    return search(nums, target, start, middle - 1);
  }
  if (nums[middle] < target) {
    return search(nums, target, middle + 1, end);
  }
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); //4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); //-1
