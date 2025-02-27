//Check if a number is a power of 2 or not.

function isPowerOfTwo(n) {
  return (n & (n - 1)) === 0;
}
