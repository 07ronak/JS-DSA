const LinkedList = require("./Optimized Linked List");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }
  push(value) {
    this.list.prepend(value); // Add to the head
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty"; // Handle underflow
    }
    return this.list.removeFromFront(); // Remove from the head
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty());

stack.push(20);
stack.push(10);
stack.push(30);

console.log(stack.getSize());
stack.print();

console.log(stack.pop());
console.log(stack.peek());
