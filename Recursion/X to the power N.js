function xn(x, n) {
  if (n === 1) return x;
  return x * xn(x, n - 1);
}
console.log(xn(2, 10));
