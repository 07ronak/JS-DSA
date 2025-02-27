// Virtually split the array into a sorted and an unsorted part
// Assume that the first element is already sorted and remaining elements are unsorted
// Select an unsorted element and compare with all elements in the sorted part
// If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right.
// Insert the selected element at the right index.
// Repeat till the unsorted elements are placed in the right order

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1; // j refers to the index of sorted element
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}
//Big-O = O(n^2)

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr);
