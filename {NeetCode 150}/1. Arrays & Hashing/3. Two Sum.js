/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2] */

// Approach 1: Brute Force Solution
// Time Complexity: O(n²)
// Space Complexity: O(1)
function twoSumBruteForce(nums, target) {
  // Iterate through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // For each element, check all subsequent elements
    for (let j = i + 1; j < nums.length; j++) {
      // If the two numbers add up to the target, return their indices
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // If no solution is found (though problem guarantees one exists)
  return [];
}

// Approach 2: Hash Map Solution (Optimized)
// Time Complexity: O(n)
// Space Complexity: O(n)
function twoSumHashMap(nums, target) {
  // Create a hash map to store complement values
  const complementMap = new Map();

  // Iterate through the array once
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    // Check if the complement exists in our map
    if (complementMap.has(complement)) {
      // If found, return the indices
      return [complementMap.get(complement), i];
    }

    // Store the current number and its index
    complementMap.set(currentNum, i);
  }

  // If no solution is found (though problem guarantees one exists)
  return [];
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;

console.log("Brute Force Solution:", twoSumBruteForce(nums, target));
console.log("Hash Map Solution:", twoSumHashMap(nums, target));

/* Approach 1: Brute Force Solution
The brute force approach is the most straightforward but least efficient method:

It uses nested loops to compare every possible pair of numbers
Time Complexity: O(n²) because we're using nested loops
Space Complexity: O(1) as we're not using additional data structures
Pros: Simple to understand and implement
Cons: Inefficient for large arrays

Approach 2: Hash Map Solution
The hash map (or dictionary) approach is more optimized:

We use a single pass through the array
For each number, we calculate its complement (target - current number)
We store each number in a hash map as we go
Time Complexity: O(n) because we only traverse the array once
Space Complexity: O(n) as we're using a hash map to store numbers
Pros: Much faster, especially for large arrays
Cons: Slightly more complex implementation

Key Insights

The problem guarantees exactly one solution exists
You cannot use the same element twice
The order of returned indices doesn't matter

Mental Model
Think of the hash map solution like this: As you walk through the array, you're constantly checking, "Have I seen the number that would complete this pair?"

If you haven't, you store the current number for future checking
If you have, you immediately return the indices

Practical Takeaways

For small arrays, the difference between approaches is negligible
For large arrays, always prefer the hash map solution
Understanding both approaches helps in solving similar problems
*/

//https://claude.ai/chat/28f5ddd4-9e22-4f73-949d-f669fd16bd5b
