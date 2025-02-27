/* You are a professional robber planning to rob houses along a street. Each house has a certain amount 
of money stashed. All houses at this place are arranged in a circle. That means the first house is the 
neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will 
automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum 
amount of money you can rob tonight without alerting the police.

Example 1:
    Input: nums = [2,3,2]
    Output: 3
    Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Example 2:
    Input: nums = [1,2,3,1]
    Output: 4
    Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
                Total amount you can rob = 1 + 3 = 4.
Example 3:
    Input: nums = [1,2,3]
    Output: 3 */

var rob = function (nums) {
  const n = nums.length;

  // Handle edge cases where there are 0, 1, or 2 houses
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  // Function to process the linear case
  const robLinear = (arr) => {
    const m = arr.length;
    for (let i = m - 3; i >= 0; i--) {
      arr[i] += Math.max(arr[i + 2], arr[i + 3] || 0);
    }
    return Math.max(arr[0], arr[1] || 0);
  };

  // Solve for two cases
  const excludeLast = robLinear(nums.slice(0, n - 1)); // Exclude last house
  const excludeFirst = robLinear(nums.slice(1)); // Exclude first house

  return Math.max(excludeLast, excludeFirst);
};

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([1, 2, 3]));
