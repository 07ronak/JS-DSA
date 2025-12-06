// any prime number greater than 3 can be expressed in the form of 6k ± 1, where k is a positive integer.
//This is because all other forms like 6k, 6k + 2, or 6k + 3, 6k + 4 are divisible by 2 or 3.

//note: any number in 6k ± 1 form does not guarantee that the number is prime. Like 25 (which is 6*4 + 1) is not prime.
// but all `prime` numbers greater than 3 will fit this form.

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  let i = 5; //5 because for k=1, 6k-1=5 and 6k+1=7. Thus i+2 represents 6k+1 form because 7=5+2
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

//Summary:
// The function works because all primes greater than 3 must be of the form 6k±1,
// so the algorithm only checks those possible divisors up to √n, making the primality test much faster.

//Big O = O(sqrt(n)/3) which is asymptotically equivalent to O(sqrt(n))

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(16));
console.log(isPrime(17));
console.log(isPrime(389)); //389 is prime
