/* Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

var topKFrequent = function (nums, k) {
  // Step 1: Create a frequency map
  let frequencyMap = {};
  for (let num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  // Step 2: Convert the frequency map into an array of [number, frequency] pairs
  let frequencyArray = Object.entries(frequencyMap);

  // Step 3: Sort the array based on frequency in descending order
  frequencyArray.sort((a, b) => b[1] - a[1]);

  console.log(frequencyArray);

  // Step 4: Extract the top k elements
  return frequencyArray.slice(0, k).map((pair) => parseInt(pair[0]));
};

console.log(topKFrequent([4, 4, 4, 6, 6, 7, 7, 7, 7], 2)); // Output: [7]

/* ------------------------------------------------------------------------------------------- */
/* Optimized Solution: Bucket Sort */
/* can run in O(n) time. */

var topKFrequent = function (nums, k) {
  // Step 1: Count frequencies
  let frequencyMap = {};
  for (let num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  // Step 2: Create buckets (array where index represents frequency)
  let buckets = Array(nums.length + 1)
    .fill()
    .map(() => []);
  for (let [num, freq] of Object.entries(frequencyMap)) {
    buckets[freq].push(num);
  }

  // Step 3: Collect the top k frequent elements
  let result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }

  return result.slice(0, k);
};
