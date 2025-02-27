//Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target elements is not found.

function binarySearchRecusive(arr, target, start = 0, end = arr.length - 1) {
  arr.sort((a, b) => a - b); //sorrting the array first

  if (start > end) return -1;

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) {
    return middle;
  }

  if (arr[middle] > target) {
    return binarySearchRecusive(arr, target, start, middle - 1);
  }

  if (arr[middle] < target) {
    return binarySearchRecusive(arr, target, middle + 1, end);
  }
  return -1;
}

console.log(binarySearchRecusive([-5, 2, 4, 6, 10], 10)); //4
console.log(binarySearchRecusive([-5, 2, 4, 6, 10], 4)); //2
console.log(binarySearchRecusive([-5, 2, 4, 6, 10], 20)); //-1
