function clearIBits(n, i) {
  let bitMask = ~0 << i;
  return n & bitMask;
}
