/* You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store. */

/* Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49 */

var maxArea = function (height) {
  let lp = 0;
  let rp = height.length - 1;
  let area = 0;
  while (rp > lp) {
    let x = Math.min(height[lp], height[rp]);
    let currArea = (rp - lp) * x;
    if (height[rp] > height[lp]) {
      lp++;
    } else {
      rp--;
    }
    area = Math.max(currArea, area);
  }

  return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
