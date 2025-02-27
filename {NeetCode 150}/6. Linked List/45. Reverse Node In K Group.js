/* Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is 
not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:
  Input: head = [1,2,3,4,5], k = 2
  Output: [2,1,4,3,5]

Example 2:
  Input: head = [1,2,3,4,5], k = 3
  Output: [3,2,1,4,5]                   */

var reverseKGroup = function (head, k) {
  // Dummy node to handle edge cases (like when the list is empty).
  let dummy = new ListNode(0, head);
  let groupPrev = dummy; // Pointer to track the previous group's end.

  while (true) {
    // Find the k-th node from the current group's start.
    const kth = getKth(groupPrev, k);
    if (!kth) {
      // If fewer than k nodes remain, stop the loop.
      break;
    }
    const groupNext = kth.next; // Store the node after the k-th node.

    // Reverse the nodes in the current group.
    let prev = kth.next; // Pointer to the end of the reversed group (initially set to groupNext).
    let curr = groupPrev.next; // Pointer to the start of the current group.
    while (curr != groupNext) {
      const tmp = curr.next; // Temporarily store the next node.
      curr.next = prev; // Reverse the link.
      prev = curr; // Move prev pointer forward.
      curr = tmp; // Move curr pointer forward.
    }

    // Adjust the pointers to connect the reversed group with the previous part.
    const tmp = groupPrev.next; // Store the start of the current group (which is now the group's end).
    groupPrev.next = kth; // Point the previous group's end to the new start of this group.
    groupPrev = tmp; // Move groupPrev to the end of the reversed group.
  }
  return dummy.next; // Return the new head of the list.
};

function getKth(curr, k) {
  while (curr && k > 0) {
    curr = curr.next; // Move to the next node.
    k--; // Decrease the remaining steps.
  }
  return curr; // Return the k-th node or null if not enough nodes exist.
}
