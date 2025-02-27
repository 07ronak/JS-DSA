// each Node contains a data value and a pointer to the next node in the list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; //when it's isolated a node contains the data value and next pointer pointing at null
  }
}
//we always maintain a pointer to the first node in the list. That pointer is called HEAD
class LinkedList {
  constructor() {
    this.head = null; //when we instantiate a new linked list, it is empty and head will point at null
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
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  //Big-O = O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      // we create a new variable `prev` similar to curr but we stop at the last node
      //once we make prev to the last node, we make prev.next = new node
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return "invalid index";
    }
    if (index === 0) {
      this.prepend(value);
      //dont increase the size here as the prepend method is already doing it
    } else {
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
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return "invalid index";
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        //till we reach the node previous to the index
        prev = prev.next;
        //we keep advancing the previous pointer
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
  removeValue(value) {
    if (this.isEmpty()) return "List is empty";
    if (value === this.head.value) {
      this.head = this.head.next;
      this.size--;
      return `${value} has been removed from the list`;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return `${value} has been removed from the list`;
      }
      return null;
    }
  }
  search(value) {
    if (this.isEmpty()) {
      return `List is empty`;
    }
    let index = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return index;
      }
      curr = curr.next;
      index++;
    }
    return `${value} not found in the list`;
  }
  reverse() {
    let prev = null;
    let curr = this.head;
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
  print() {
    if (this.isEmpty()) {
      console.log(`List is empty`);
    } else {
      //we have to traverse through the list from the first node till the last node while printing the value of each node
      //for that we can create a temporary pointer called CURRENT (curr).
      //curr will point first at the head node, since head is the first node in the list
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues = listValues + `${curr.value} `;
        curr = curr.next; //once added in list values, curr points at next value
      }
      console.log(listValues);
    }
  }
}
