/* Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped. 
*/
var trap = function (height) {
  let lp = 0;
  let rp = height.length - 1; // Fix pointer initialization
  let left_max = height[lp];
  let right_max = height[rp];
  let sum = 0;

  while (lp < rp) {
    if (left_max <= right_max) {
      lp++; // Move left pointer
      left_max = Math.max(left_max, height[lp]); // Update left max
      sum += Math.max(0, left_max - height[lp]); // Add trapped water
    } else {
      rp--; // Move right pointer
      right_max = Math.max(right_max, height[rp]); // Update right max
      sum += Math.max(0, right_max - height[rp]); // Add trapped water
    }
  }

  return sum;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); //6
console.log(trap([4, 2, 0, 3, 2, 5])); //9
