/* You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:
    Input: lists = [[1,4,5],[1,3,4],[2,6]]
    Output: [1,1,2,3,4,4,5,6]
    Explanation: The linked-lists are:
                                        [
                                        1->4->5,
                                        1->3->4,
                                        2->6
                                        ]
                                        merging them into one sorted list:
                                        1->1->2->3->4->4->5->6
Example 2:
    Input: lists = []
    Output: []

Example 3:
    Input: lists = [[]]
    Output: []              */

var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) return null;

  // Use a divide-and-conquer approach to merge all lists
  while (lists.length > 1) {
    let mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      let list1 = lists[i];
      let list2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeTwoLists(list1, list2));
    }
    lists = mergedLists;
  }

  return lists[0];
};

function mergeTwoLists(list1, list2) {
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
}
