//Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target elements is not found.

function binarySearch(arr, target) {
  arr.sort((a, b) => a - b);

  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

//Big-O = O(logn)

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
console.log(binarySearch([-5, 2, 4, 6, 10], 4)); //2
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); //-1
