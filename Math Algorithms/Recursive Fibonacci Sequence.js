//Given a number 'n', find the nth element of the Fibonacci sequence.

function findNthFibonacciNumber(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n >= 2) {
    return findNthFibonacciNumber(n - 2) + findNthFibonacciNumber(n - 1);
  }
}
console.log(findNthFibonacciNumber(6));

//Time complexity in exponentinal!
//Big O = O(n^2)
