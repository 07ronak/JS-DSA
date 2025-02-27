/* Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
  Input: head = [1,2,3,4,5], n = 2
  Output: [1,2,3,5]

Example 2:
  Input: head = [1], n = 1
  Output: []

Example 3:
  Input: head = [1,2], n = 1
  Output: [1] */

var removeNthFromEnd = function (head, n) {
  if (n === 0) return head;

  // Step 1: Calculate the length of the list
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }

  // Step 2: Find the position to remove from the start
  let position = length - n;

  // Special case: If the head node needs to be removed
  if (position === 0) {
    return head.next;
  }

  // Step 3: Traverse to the node just before the one to be removed
  let prev = head;
  for (let i = 0; i < position - 1; i++) {
    prev = prev.next;
  }

  // Step 4: Remove the nth node from the end
  prev.next = prev.next.next;

  return head;
};
