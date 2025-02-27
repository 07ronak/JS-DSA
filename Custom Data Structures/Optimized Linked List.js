// each Node contains a data value and a pointer to the next node in the list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; //when it's isolated a node contains the data value and next pointer pointing at null
  }
}
//we always maintain a pointer to the first node in the list. That pointer is called HEAD
//we always maintain a pointer to the last node in the list. That pointer is called TAIL
class LinkedList {
  constructor() {
    this.head = null; //when we instantiate a new linked list, it is empty and pointers will point at null
    this.tail = null;
    this.size = 0; //maintain a size property to track the number of nodes in the list
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  //Big-O = O(1)
  prepend(value) {
    //as we are adding at the start of the list
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  //Big-O = O(1)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront() {
    if (this.isEmpty()) return "list in empty";
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    if (this.isEmpty()) {
      this.head = null;
      this.tail = null;
    }
    return `${value} has been removed from the front of the list`;
  }
  removeFromEnd() {
    if (this.isEmpty()) return "list in empty";
    const value = this.tail.value;
    //check if only one value is present in the list
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return "invalid index";
    }
    if (index === 0) {
      return this.prepend(value);
      //dont increase the size here as the prepend method is already doing it
    }
    if (index === this.size) return this.append(value);

    const node = new Node(value);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      //till we reach the node previous to the index
      prev = prev.next;
      //we keep advancing the previous pointer
    }
    //new node is connected to the existing list
    node.next = prev.next;
    //and we connect the previous node to the new node
    prev.next = node;
    this.size++;
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return "invalid index";
    }
    if (index === 0) return this.removeFromFront();
    if (index === this.size - 1) return this.removeFromEnd();

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    const value = prev.next.value;
    prev.next = prev.next.next;
    this.size--;
    return value;
  }
  removeValue(value) {
    if (this.isEmpty()) return "List is empty";
    if (this.head.value === value) {
      return this.removeFromFront();
    }

    let prev = this.head;
    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
    }
    if (prev.next) {
      const removedNode = prev.next;
      if (removedNode === this.tail) {
        this.tail = prev; // Update tail if last node is removed
      }
      prev.next = removedNode.next;
      this.size--;
      return `${value} has been removed from the list`;
    }
    return `Value ${value} not found in the list`;
  }
  search(value) {
    if (this.isEmpty()) {
      return `List is empty`;
    }
    let index = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return `${value} is present at ${index}`;
      }
      curr = curr.next;
      index++;
    }
    return `${value} not found in the list`;
  }
  reverse() {
    if (this.size <= 1) return this;
    let prev = null;
    let curr = this.head;
    this.tail = this.head;
    while (curr) {
      //for every node in the list
      //step1: create a temporary next pointer that points to the next node after current
      let next = curr.next;
      //step2: make the current node point in reverse
      curr.next = prev;
      //step3: advance the previous pointer
      prev = curr;
      //step4: advance the curr pointer
      curr = next;
    }
    this.head = prev;
  }
  toArray() {
    if (this.size === 0) return [];
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
  print() {
    if (this.isEmpty()) {
      console.log(`List is empty`);
    } else {
      console.log(this.toArray().join(" "));
    }
  }
}

module.exports = LinkedList;

class TestLinkedList extends LinkedList {
  test() {
    console.log("===== Testing LinkedList =====");

    // Test isEmpty and getSize on a new list
    console.log("Test isEmpty and getSize:");
    console.log("Is empty:", this.isEmpty()); // true
    console.log("Size:", this.getSize()); // 0

    // Test prepend
    console.log("\nTest prepend:");
    this.prepend(10);
    this.prepend(20);
    this.print(); // 20 10
    console.log("Size:", this.getSize()); // 2

    // Test append
    console.log("\nTest append:");
    this.append(30);
    this.append(40);
    this.print(); // 20 10 30 40
    console.log("Size:", this.getSize()); // 4

    // Test removeFromFront
    console.log("\nTest removeFromFront:");
    console.log(this.removeFromFront()); // 20 has been removed from the front of the list
    this.print(); // 10 30 40
    console.log("Size:", this.getSize()); // 3

    // Test removeFromEnd
    console.log("\nTest removeFromEnd:");
    console.log(this.removeFromEnd()); // 40
    this.print(); // 10 30
    console.log("Size:", this.getSize()); // 2

    // Test insert
    console.log("\nTest insert:");
    this.insert(15, 1); // Insert 15 at index 1
    this.print(); // 10 15 30
    this.insert(5, 0); // Insert 5 at the head
    this.print(); // 5 10 15 30
    this.insert(35, 4); // Insert 35 at the tail
    this.print(); // 5 10 15 30 35
    console.log("Size:", this.getSize()); // 5

    // Test removeFrom
    console.log("\nTest removeFrom:");
    console.log(this.removeFrom(2)); // 15
    this.print(); // 5 10 30 35
    console.log("Size:", this.getSize()); // 4

    // Test removeValue
    console.log("\nTest removeValue:");
    console.log(this.removeValue(30)); // 30 has been removed from the list
    this.print(); // 5 10 35
    console.log(this.removeValue(100)); // Value 100 not found in the list

    // Test search
    console.log("\nTest search:");
    console.log(this.search(10)); // 10 is present at 1
    console.log(this.search(100)); // Value 100 not found in the list

    // Test reverse
    console.log("\nTest reverse:");
    this.reverse();
    this.print(); // 35 10 5

    // Test toArray
    console.log("\nTest toArray:");
    console.log(this.toArray()); // [35, 10, 5]

    // Test print on an empty list
    console.log("\nTest on an empty list:");
    const emptyList = new LinkedList();
    emptyList.print(); // List is empty
    console.log("Is empty:", emptyList.isEmpty()); // true
    console.log("Size:", emptyList.getSize()); // 0
  }
}

/* // Create an instance of TestLinkedList and run tests
const testLinkedList = new TestLinkedList();
testLinkedList.test(); */
