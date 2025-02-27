/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter. */

var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b); // Sort the array to handle duplicates and simplify logic

  for (let lp = 0; lp < nums.length - 2; lp++) {
    // Skip duplicates for the first element
    if (lp > 0 && nums[lp] === nums[lp - 1]) continue;

    let rp = nums.length - 1;
    let k = lp + 1;

    while (k < rp) {
      const sum = nums[lp] + nums[k] + nums[rp];

      if (sum === 0) {
        result.push([nums[lp], nums[k], nums[rp]]);

        // Skip duplicates for the second and third elements
        while (k < rp && nums[k] === nums[k + 1]) k++;
        while (k < rp && nums[rp] === nums[rp - 1]) rp--;

        k++;
        rp--;
      } else if (sum < 0) {
        k++;
      } else {
        rp--;
      }
    }
  }

  return result;
};
