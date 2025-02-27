class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.back = 0;
  }

  enqueue(element) {
    this.items[this.back] = element;
    this.back++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  size() {
    return this.back - this.front;
  }
  peek() {
    return this.items[this.front];
  }
  print() {
    console.log(this.items);
  }
  isEmpty() {
    return this.back - this.front === 0;
  }
}

module.exports = Queue;
