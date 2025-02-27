/* You are given an array of integers nums, there is a sliding window of size 'k' which is moving from the
very left of the array to the very right. You can only see the 'k' numbers in the window. Each time the 
sliding window moves right by one position.

Return the max sliding window. 

Example 1:
    Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
    Output: [3,3,5,5,6,7]

Example 2:
    Input: nums = [1], k = 1
    Output: [1]                      */

var maxSlidingWindow = function (nums, k) {
  let result = [];
  let deque = []; // Stores indices of useful elements in the current window

  for (let i = 0; i < nums.length; i++) {
    // Remove indices that are out of the current window
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    // Remove indices of elements smaller than the current element
    // as they are not useful anymore
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // Add current element index to the deque
    deque.push(i);

    // Start adding results to the output array once the first window is complete
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); //[3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); //[1]

/* -------------------------------------------- */

var maxSlidingWindow = function (nums, k) {
  //create a empty array
  //check the maximum in 1st array
  //push it to the empty array
  //slide the window
  //check for max element again
  //repeat till arr finishes

  let result = [];
  let left = 0;
  let right = k - 1;

  while (right < nums.length) {
    if (right - left + 1 === k) {
      let subArr = nums.slice(left, right + 1);
      let el = Math.max(...subArr);
      result.push(el);
    }
    left++;
    right++;
  }
  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); //[3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); //[1]
