/* Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
  Input: root = [3,9,20,null,null,15,7]
  Output: 3

Example 2:
  Input: root = [1,null,2]
  Output: 2                   */

var maxDepth = function (root) {
  if (!root) return 0; // Base case: if root is null, depth is 0

  // Recursively find the depth of left and right subtrees
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  // The depth of the current node is 1 + the greater of the two depths
  return 1 + Math.max(leftDepth, rightDepth);
};
