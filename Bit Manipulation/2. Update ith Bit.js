//helper function
function setIthBit(n, i) {
  let bitMask = 1 << i;
  return n | bitMask;
}
//helper function
function clearIthBit(n, i) {
  let bitMask = ~(1 << i);
  return n & bitMask;
}

function updateIthBit(n, i, newBit) {
  if (newBit === 0) {
    return clearIthBit(n, i);
  } else {
    return setIthBit(n, i);
  }
}
