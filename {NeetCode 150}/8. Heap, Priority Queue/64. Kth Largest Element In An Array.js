/* Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

Example 1:
    Input: nums = [3,2,1,5,6,4], k = 2
    Output: 5

Example 2:
    Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
    Output: 4 */

const MaxHeapPriorityQueue = require("../Custom Data Structures/MaxHeap Priority Queue");

var findKthLargest = function (nums, k) {
  let maxPQ = new MaxHeapPriorityQueue(); // Ensure this matches the implemented class name

  // Add all numbers to the max-priority queue
  for (let num of nums) {
    maxPQ.enqueue(num, num); // Ensure 'enqueue' adds the element correctly
  }

  // Poll the max value k times
  let kthLargest;
  for (let i = 0; i < k; i++) {
    kthLargest = maxPQ.dequeue().priority; // Ensure 'dequeue' returns the largest element
  }

  return kthLargest; // Return the kth largest element
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
