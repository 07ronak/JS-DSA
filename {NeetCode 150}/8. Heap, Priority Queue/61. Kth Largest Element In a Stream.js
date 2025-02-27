/* You are part of a university admissions office and need to keep track of the kth highest test score from
applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically
as new applicants submit their scores.

You are tasked to implement a class which, for a given integer k, maintains a stream of test scores and
 continuously returns the kth highest test score after a new score has been submitted. 
More specifically, we are looking for the kth highest score in the sorted list of all scores.

Implement the KthLargest class:

-KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of test scores nums.
-int add(int val) Adds a new test score val to the stream and returns the element
 representing the kth largest element in the pool of test scores so far. */

class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.minHeap = [];

    // Add all initial numbers to the min-heap
    for (const num of nums) {
      this.add(num);
    }
  }

  // Helper function to maintain the heap property
  add(val) {
    if (this.minHeap.length < this.k) {
      this.minHeap.push(val);
      this._heapifyUp();
    } else if (val > this.minHeap[0]) {
      this.minHeap[0] = val;
      this._heapifyDown();
    }
    return this.minHeap[0];
  }

  // Min-heapify up
  _heapifyUp() {
    let index = this.minHeap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.minHeap[index] >= this.minHeap[parentIndex]) break;
      this._swap(index, parentIndex);
      index = parentIndex;
    }
  }

  // Min-heapify down
  _heapifyDown() {
    let index = 0;
    const length = this.minHeap.length;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < length &&
        this.minHeap[leftChildIndex] < this.minHeap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.minHeap[rightChildIndex] < this.minHeap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;
      this._swap(index, smallest);
      index = smallest;
    }
  }

  _swap(i, j) {
    [this.minHeap[i], this.minHeap[j]] = [this.minHeap[j], this.minHeap[i]];
  }
}
