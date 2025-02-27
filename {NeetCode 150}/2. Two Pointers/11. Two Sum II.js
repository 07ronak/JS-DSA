// input array is sorted

/* Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that 
they add up to a specific target number. 

Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice. */

function twoSum(numbers, target) {
  let left = 0; // Pointer at the start of the array
  let right = numbers.length - 1; // Pointer at the end of the array

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      // Return 1-based indices
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++; // Move the left pointer to the right
    } else {
      right--; // Move the right pointer to the left
    }
  }
  return []; // This won't be reached as there is exactly one solution
}
