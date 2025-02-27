/* Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
    Input: head = [1,2,3,4,5]
    Output: [5,4,3,2,1]

Example 2:
    Input: head = [1,2]
    Output: [2,1]

Example 3:
    Input: head = []
    Output: [] */

var reverseList = function (head) {
  let prev = null; // Previous node (initially null)
  let current = head; // Current node (starts at head)

  while (current !== null) {
    let nextNode = current.next; // Save the next node
    current.next = prev; // Reverse the current node's pointer
    prev = current; // Move prev to current node
    current = nextNode; // Move to the next node
  }

  return prev; // New head of the reversed list
};
