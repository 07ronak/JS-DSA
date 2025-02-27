// Define the Node class for the Doubly Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Points to the next node
    this.prev = null; // Points to the previous node
  }
}

// Define the DoublyLinkedList class
class DoublyLinkedList {
  constructor() {
    this.head = null; // Pointer to the first node
    this.tail = null; // Pointer to the last node
    this.size = 0; // Tracks the size of the list
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Add a node to the front of the list
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  // Add a node to the end of the list
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // Remove a node from the front of the list
  removeFromFront() {
    if (this.isEmpty()) return "List is empty";

    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null; // List is now empty
    }
    this.size--;
    return value;
  }

  // Remove a node from the end of the list
  removeFromEnd() {
    if (this.isEmpty()) return "List is empty";

    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null; // List is now empty
    }
    this.size--;
    return value;
  }

  // Insert a node at a specific index
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return "Invalid index";
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.size) {
      this.append(value);
      return;
    }

    const node = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    node.next = current.next;
    node.prev = current;
    current.next.prev = node;
    current.next = node;
    this.size++;
  }

  // Remove a node at a specific index
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return "Invalid index";
    }

    if (index === 0) return this.removeFromFront();
    if (index === this.size - 1) return this.removeFromEnd();

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    const value = current.value;
    current.prev.next = current.next;
    current.next.prev = current.prev;
    this.size--;
    return value;
  }

  // Print the list from head to tail
  printForward() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }

  // Print the list from tail to head
  printBackward() {
    const result = [];
    let current = this.tail;
    while (current) {
      result.push(current.value);
      current = current.prev;
    }
    console.log(result.join(" <- "));
  }
  search(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }
  reverse() {
    let current = this.head;
    this.tail = this.head;
    while (current) {
      [current.prev, current.next] = [current.next, current.prev];
      if (!current.prev) {
        this.head = current;
      }
      current = current.prev;
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
