/* Alice has some number of cards and she wants to rearrange the cards into groups so that each group is 
of size groupSize, and consists of groupSize consecutive cards.

Given an integer array hand where hand[i] is the value written on the ith card and an integer 
groupSize, return true if she can rearrange the cards, or false otherwise.

Example 1:
    Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
    Output: true
    Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

Example 2:
    Input: hand = [1,2,3,4,5], groupSize = 4
    Output: false
    Explanation: Alice's hand can not be rearranged into groups of 4. */

var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false; // Quick check

  hand.sort((a, b) => a - b); // Sort array

  let freq = {}; // Store occurrences of each number
  for (let num of hand) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num of hand) {
    if (freq[num] === 0) continue; // Skip already used numbers

    // Try forming a group starting from `num`
    for (let i = 0; i < groupSize; i++) {
      let current = num + i;

      if (!freq[current] || freq[current] === 0) {
        return false; // If we can't form a valid group
      }

      freq[current]--; // Use the number
    }
  }

  return true; // If all groups are formed correctly
};

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
console.log(isNStraightHand([1, 2, 3, 4, 5], 4));
