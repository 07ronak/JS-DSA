/* Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

-MinStack() initializes the stack object.
-void push(int val) pushes the element val onto the stack.
-void pop() removes the element on the top of the stack.
-int top() gets the top element of the stack.
-int getMin() retrieves the minimum element in the stack.
-You must implement a solution with O(1) time complexity for each function. */

class MinStack {
  constructor() {
    this.stack = new Stack(); // Main stack to store all elements
    this.minStack = new Stack(); // Auxiliary stack to track the minimum
  }

  push(val) {
    this.stack.push(val);
    // Push to minStack only if it's empty or the new value is <= the current minimum
    if (this.minStack.isEmpty() || val <= this.minStack.peek()) {
      this.minStack.push(val);
    }
  }

  pop() {
    const poppedValue = this.stack.pop();
    // If the popped value is the current minimum, pop from minStack too
    if (poppedValue === this.minStack.peek()) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack.peek();
  }

  getMin() {
    return this.minStack.peek();
  }
}
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    return this.items.push(element);
  }
  pop() {
    if (this.items.length === 0) return "Stack is empty";
    return this.items.pop();
  }
  peek() {
    if (this.items.length === 0) return "Stack is empty";
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}
