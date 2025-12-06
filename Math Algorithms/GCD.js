function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }

  return a + b; // One of them is zero, return the other (no need for an if statement)
}
console.log(gcd(48, 18)); // Output: 6
