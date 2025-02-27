/* Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:
    Input: x = 2.00000, n = 10
    Output: 1024.00000

Example 2:
    Input: x = 2.10000, n = 3
    Output: 9.26100

Example 3:
    Input: x = 2.00000, n = -2
    Output: 0.25000
    Explanation: 2-2 = 1/22 = 1/4 = 0.25 */

var myPow = function (x, n) {
  function helper(x, n) {
    if (x === 0) return 0;
    if (n === 0) return 1;

    let res = helper(x * x, Math.floor(n / 2));
    return n % 2 === 0 ? res : res * x;
  }
  let ans = helper(x, Math.abs(n));
  return n >= 0 ? ans : 1 / ans;
};

console.log(myPow(2.0, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2.0, -2));
