// Identify the pivor element in the array
// - Pick first element at pivot
// - Pick last element as pivot (This apporach)
// - Pick a random element as pivot
// - Pick median as pivot
// Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array
// Repeat the process for the individual 'left' and 'right' array till you have an array of length 1 which is sorted by definition
// Repeatedly concatenate the left array, pivot and right array will one sorted array remains

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(right)]; //since it is a recursion we need a base case
}
//Big-O [WORST CASE] = O(n^2) (this happens when array is already sorted)
//Big-Theta [AVG CASE] = O(nlogn)

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr));
