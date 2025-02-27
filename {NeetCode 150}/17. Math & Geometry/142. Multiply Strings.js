/* Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, 
also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:
    Input: num1 = "2", num2 = "3"
    Output: "6"

Example 2:
    Input: num1 = "123", num2 = "456"
    Output: "56088" */

var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const len1 = num1.length;
  const len2 = num2.length;
  const result = new Array(len1 + len2).fill(0);

  // Step 1: Multiply each digit and accumulate the products
  for (let i = 0; i < len1; i++) {
    const digit1 = num1.charCodeAt(len1 - 1 - i) - "0".charCodeAt(0);
    for (let j = 0; j < len2; j++) {
      const digit2 = num2.charCodeAt(len2 - 1 - j) - "0".charCodeAt(0);
      const product = digit1 * digit2;
      const pos = i + j;
      result[pos] += product;
    }
  }
  // Step 2: Handle carries to normalize each position to a single digit
  for (let k = 0; k < result.length; k++) {
    const carry = Math.floor(result[k] / 10);
    result[k] %= 10;
    if (carry > 0 && k + 1 < result.length) {
      result[k + 1] += carry;
    }
  }
  // Step 3: Convert the result array to a string, removing leading zeros
  let str = "";
  let leadingZero = true;
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] === 0 && leadingZero) {
      continue;
    } else {
      leadingZero = false;
      str += result[i].toString();
    }
  }

  return str === "" ? "0" : str;
};

console.log(multiply("2", "3"));
console.log(multiply("123", "456"));
