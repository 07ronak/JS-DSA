// Given two finite non-empty sets, find their cartesian product.

// const A = [1,2]
// const B = [3,4]
// A x B = [[1,3],[1,4],[2,3],[2,4]]

//Travserse each array and pair each element in the first array with each element in the second array

function cartesianProduct(arrA, arrB) {
  let result = [];
  for (i = 0; i < arrA.length; i++) {
    for (j = 0; j < arrB.length; j++) {
      result.push([arrA[i], arrB[j]]);
    }
  }
  return result;
}
//Big-O = O(n*m) [dependent on length of both arrays]

let arrA = [1, 2];
let arrB = [3, 4, 5];

console.log(cartesianProduct(arrA, arrB));
