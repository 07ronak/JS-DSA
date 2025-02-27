/* You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash
them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

-If x == y, both stones are destroyed, and
-If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.

At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.

Example 1:
    Input: stones = [2,7,4,1,8,1]
    Output: 1
    Explanation: 
                We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
                we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
                we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
                we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

Example 2:
    Input: stones = [1]
    Output: 1                               */

class MaxHeapPriorityQueue {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  // Helper functions
  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] >= this.heap[index]) {
        break;
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    const size = this.size();

    while (true) {
      let leftChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);

      let leftValue =
        leftChildIndex < size ? this.heap[leftChildIndex] : -Infinity;

      let rightValue =
        rightChildIndex < size ? this.heap[rightChildIndex] : -Infinity;

      let largest = index;

      if (leftValue > this.heap[index]) {
        largest = leftChildIndex;
      }

      if (rightValue > this.heap[largest]) {
        largest = rightChildIndex;
      }

      if (largest === index) {
        break;
      }

      this.swap(index, largest);
      index = largest;
    }
  }

  // Core methods
  enqueue(element) {
    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.isEmpty()) return null;

    let root = this.heap[0];
    let lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.bubbleDown(0);
    }

    return root;
  }

  print() {
    console.log(
      this.heap.map((node) => `(${node.element}, ${node.priority})`).join(", ")
    );
  }
}

var lastStoneWeight = function (stones) {
  const maxPQ = new MaxHeapPriorityQueue();

  for (let stone of stones) {
    maxPQ.enqueue(stone);
  }

  while (maxPQ.size() > 1) {
    let stone1 = maxPQ.dequeue();
    let stone2 = maxPQ.dequeue();

    if (stone1 !== stone2) {
      maxPQ.enqueue(Math.abs(stone1 - stone2));
    }
  }
  return maxPQ.size() === 1 ? maxPQ.dequeue() : 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1]));
