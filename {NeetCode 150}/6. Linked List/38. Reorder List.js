/* You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:
  Input: head = [1,2,3,4]
  Output: [1,4,2,3]

Example 2:
  Input: head = [1,2,3,4,5]
  Output: [1,5,2,4,3] */

var reorderList = function (head) {
  if (!head || !head.next || !head.next.next) return;

  // Step 1: Find the middle of the list
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the list
  let secondHalf = reverse(slow.next);
  slow.next = null; // Split the list into two halves

  // Step 3: Merge the two halves
  merge(head, secondHalf);
};

function reverse(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}

function merge(list1, list2) {
  let first = list1;
  let second = list2;

  while (second !== null) {
    // Save the next nodes
    let temp1 = first.next;
    let temp2 = second.next;

    // Re-link nodes alternately
    first.next = second;
    second.next = temp1;

    // Move to the next nodes
    first = temp1;
    second = temp2;
  }
}
