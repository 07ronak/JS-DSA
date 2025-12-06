function LCM(a, b) {
  function gcd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (x > 0 && y > 0) {
      if (x > y) {
        x = x % y;
      } else {
        y = y % x;
      }
    }
    return x + y; // One of them is zero, return the other
  }
  return Math.abs(a * b) / gcd(a, b);
}
console.log(LCM(4, 5)); // Output: 20
console.log(LCM(15, 20)); // Output: 60
console.log(LCM(7, 3)); // Output: 21
console.log(LCM(0, 5)); // Output: 0

//Big O = O(log(min(a, b)))
