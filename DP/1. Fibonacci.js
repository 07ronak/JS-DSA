function fibonacciMemo(n, memo = []) {
  // Check if the result is already in the memo
  if (memo[n] !== undefined) return memo[n];

  // Base cases
  if (n <= 1) return n;

  // Recursive calculation with memoization
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);

  return memo[n];
}

/* ---------------------------------------------------------------------------------------------------------------------------------- */

function fibonacci(n) {
  if (n <= 1) return n;

  // Create an array to store Fibonacci numbers
  const dp = new Array(n + 1);

  // Base cases
  dp[0] = 0;
  dp[1] = 1;

  // Build the table from bottom up
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// Example usage
const n = 10;
console.log(`Fibonacci using Memoization(${n}) = ${fibonacciMemo(n)}`);
console.log(`Fibonacci Using Tabulization(${n}) = ${fibonacci(n)}`);

/* ----------------------------------------------------------------------------------------------------------------------------- */

function fibonacciOptimized(n) {
  if (n <= 1) return n;

  let prev1 = 1,
    prev2 = 0;

  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

console.log(
  `Fibonacci optimized space complexity(${n}) = ${fibonacciOptimized(n)}`
);
