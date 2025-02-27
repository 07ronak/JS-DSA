function clearBitsInRange(n, i, j) {
  let a = ~0 << (j + 1);
  let b = (1 << i) - 1;
  let bitMask = a | b;
  return n & bitMask;
}
