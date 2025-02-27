function getIthBit(n, i) {
  let bitMask = 1 << i;
  if ((n & bitMask) === 0) {
    return 0;
  } else {
    return 1;
  }
}

function setIthBit(n, i) {
  let bitMask = 1 << i;
  return n / bitMask;
}

function clearIthBit(n, i) {
  let bitMask = ~(1 << i);
  return n & bitMask;
}
