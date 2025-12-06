// Count Prime numbers that are strictly less than n.

const start = performance.now();
function countPrimes(n) {
  if (n <= 2) return 0;

  // Only consider odd numbers. Index i represents number 2*i + 1
  const size = Math.floor(n / 2);
  const sieve = new Array(size).fill(true);
  sieve[0] = false; // number 1 is not prime (i=0, so 2*0+1=1)

  const limit = Math.floor(Math.sqrt(n));

  for (let i = 1; 2 * i + 1 <= limit; i++) {
    if (sieve[i]) {
      const p = 2 * i + 1; // actual prime number
      let start = Math.floor((p * p) / 2); // index for p*p (skip even multiples)

      for (let j = start; j < size; j += p) {
        sieve[j] = false;
      }
    }
  }

  // Count primes: add 1 for prime 2
  let count = 1;
  for (let i = 1; i < size; i++) {
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
// Big O = O(n log log n) but with roughly half the constant factor due to skipping even numbers
