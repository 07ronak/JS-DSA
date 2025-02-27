//Compare the adjacent elements in the array and swap the positions if they are not in the intended order
//Repeat the instruction as you step thorugh each element in the array
//Once you step through the whole array with no swaps, the array is sorted

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

//Big-O = O(n^2)

let arr = [-2, 3, 6, 1, 7, 9];
bubbleSort(arr);
console.log(arr);
