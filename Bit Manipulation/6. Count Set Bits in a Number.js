/* Count no. of `1`'s in a number */
function countSetBits(n) {
  let count = 0;
  while (n > 0) {
    if (n & 1) {
      count++;
    }
    n = n >> 1;
  }
  return count;
}

console.log(countSetBits(10)); //output: 2 (1010)
console.log(countSetBits(15)); //output: 4 (1111)
