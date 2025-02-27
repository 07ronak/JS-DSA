/* Minimum Sum Absolute Difference Pairs */

function minSum(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let minDiff = 0;

  for (let i = 0; i < arr1.length; i++) {
    minDiff += Math.abs(arr1[i] - arr2[i]);
  }

  return minDiff;
}
