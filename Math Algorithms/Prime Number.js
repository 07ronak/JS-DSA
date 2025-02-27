//Given a natural number 'n', determine if the number is prime or not.

/* function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
} */

//Big O = O(n)

/* -------------------------------------------------------------------------------------------- */

//Optimized Solution

//Intgers larger than the square root do not need to be checked because, whenever `n=a*b`, one of the two factors `a` and `b` is less than or equal to the square root of `n`

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
//Big O = O(sqrt(n))

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(17));
