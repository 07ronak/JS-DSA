//fibonacci(2) = [0,1]
//fibonacci(3) = [0,1,1]
//fibonacci(7) = [0,1,1,2,3,5,8]

function fibonacciSeq(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacciSeq(2));
console.log(fibonacciSeq(3));
console.log(fibonacciSeq(7));
console.log(fibonacciSeq(10));

//Big-O = O(n)
