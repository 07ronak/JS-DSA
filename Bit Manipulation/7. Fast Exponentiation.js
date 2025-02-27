/* Calculate x^n with bits */
function fastExpo(x, n) {
  let ans = 1;

  while (n > 0) {
    if (n & 1) {
      ans = ans * x;
    }
    x = x * x;
    n = n >> 1;
  }
  return ans;
}
