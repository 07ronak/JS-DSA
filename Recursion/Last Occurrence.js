function lastOccurrence(arr, key, i) {
  if (i === arr.length) return -1;

  let isFound = lastOccurrence(arr, key, i + 1);

  if (isFound === -1 && arr[i] == key) {
    return i;
  }

  return isFound;
}

console.log(lastOccurrence([2, 4, 6, 3, 6, 2, 8], 6, 1));
