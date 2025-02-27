/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored 
in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the
sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.

Example 2:
  Input: l1 = [0], l2 = [0]
  Output: [0]

Example 3:
  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  Output: [8,9,9,9,0,0,0,1]*/

var addTwoNumbers = function (l1, l2) {
  let curr1 = l1;
  let sum1 = 0;
  let curr2 = l2;
  let sum2 = 0;
  let i = 1;
  while (curr1) {
    const value = curr1.val;
    sum1 = sum1 + value * i;
    i = i * 10;
    curr1 = curr1.next;
  }
  i = 1;
  while (curr2) {
    const value = curr2.val;
    sum2 = sum2 + value * i;
    i = i * 10;
    curr2 = curr2.next;
  }
  const total = sum1 + sum2;

  // Handle creating the linked list from the total
  const dummy = new ListNode(0);
  let current = dummy;
  let temp = total;

  if (temp === 0) {
    return new ListNode(0); // Edge case for total = 0
  }

  while (temp > 0) {
    const digit = temp % 10; // Get the last digit
    current.next = new ListNode(digit);
    current = current.next;
    temp = Math.floor(temp / 10); // Remove the last digit
  }

  return dummy.next;
};

//better code since avaScript can lose precision because it uses a number type!!

var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode();
  let cur = dummy;

  let carry = 0;
  while (l1 || l2 || carry) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;

    let val = v1 + v2 + carry;
    carry = Math.floor(val / 10);
    val = val % 10;
    cur.next = new ListNode(val);

    cur = cur.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
};
