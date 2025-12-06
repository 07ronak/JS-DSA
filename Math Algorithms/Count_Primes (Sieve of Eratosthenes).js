// Count Prime numbers that are strictly less than n.

const start = performance.now();
function countPrimes(n) {
  if (n <= 2) return 0;

  const sieve = new Array(n).fill(true);
  sieve[0] = false; // 0 is not prime
  sieve[1] = false; // 1 is not prime

  for (let i = 2; i * i < n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j < n; j += i) {
        sieve[j] = false; // Mark multiples of i as non-prime
      }
    }
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (sieve[i]) count++;
  }
  return count;
}

console.log(countPrimes(10)); // Output: 4 (2, 3, 5, 7)
console.log(countPrimes(30)); // Output: 10 (2, 3, 5, 7, 11, 13, 17, 19, 23, 29)
console.log(countPrimes(0)); // Output: 0
console.log(countPrimes(289)); // Output: 61
const end = performance.now();
console.log(`Execution time: ${end - start} milliseconds`);
// Big O = O(n log log n)