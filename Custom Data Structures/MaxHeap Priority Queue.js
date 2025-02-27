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
      if (this.heap[parentIndex].priority >= this.heap[index].priority) {
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
        leftChildIndex < size ? this.heap[leftChildIndex].priority : -Infinity;

      let rightValue =
        rightChildIndex < size
          ? this.heap[rightChildIndex].priority
          : -Infinity;

      let largest = index;

      if (leftValue > this.heap[index].priority) {
        largest = leftChildIndex;
      }

      if (rightValue > this.heap[largest].priority) {
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
  enqueue(element, priority) {
    if (typeof priority !== "number" || priority < 0) {
      throw new Error("Priority must be a non-negative number.");
    }
    let node = { element, priority };
    this.heap.push(node);
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

module.exports = MaxHeapPriorityQueue;
