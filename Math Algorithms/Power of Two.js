//Given a positive integer 'n', determine if the number is a power of 2 or not

//An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x

function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
}

//Big O = O(logn)
// in each interation, we are reducing the value of 'n' by half.

/* ------------------------------------------------------------------------------------------------------------------------------------ */

//Better solution - with Constant Time Complexity
//BIT-WISE

function isPowerOfTwo(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(32));
console.log(isPowerOfTwo(27));
console.log(isPowerOfTwo(64));
console.log(isPowerOfTwo(100));
