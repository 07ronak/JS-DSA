/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
    Input: list1 = [1,2,4], list2 = [1,3,4]
    Output: [1,1,2,3,4,4]

Example 2:
    Input: list1 = [], list2 = []
    Output: []

Example 3:
    Input: list1 = [], list2 = [0]
    Output: [0] */

var mergeTwoLists = function (list1, list2) {
  // Create a dummy node to act as the start of the merged list
  let dummy = new ListNode(-1);
  let current = dummy;

  // Iterate through both lists as long as neither is empty
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1; // Append list1's node
      list1 = list1.next; // Move list1 to the next node
    } else {
      current.next = list2; // Append list2's node
      list2 = list2.next; // Move list2 to the next node
    }
    current = current.next; // Move to the next node in the merged list
  }

  // If there are remaining nodes in list1 or list2, append them
  current.next = list1 !== null ? list1 : list2;

  // Return the merged list starting from dummy.next
  return dummy.next;
};
