/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go 
outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
    Input: x = 123
    Output: 321

Example 2:
    Input: x = -123
    Output: -321

Example 3:
    Input: x = 120
    Output: 21 */

var reverse = function (x) {
  const MIN = -2147483648; // -2^31
  const MAX = 2147483647; // 2^31 - 1

  let res = 0;
  while (x !== 0) {
    const digit = x % 10;
    x = Math.trunc(x / 10);

    if (res > MAX / 10 || (res === MAX / 10 && digit > MAX % 10)) return 0;
    if (res < MIN / 10 || (res === MIN / 10 && digit < MIN % 10)) return 0;

    res = res * 10 + digit;
  }
  return res;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
