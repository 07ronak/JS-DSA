//Given ann integer 'n', find the factorial of that integer

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

//Big O = O(n)

console.log(factorial(5));
