/* Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Example 1:
  Input: root = [1,2,3,4,5]
  Output: 3
  Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
  Input: root = [1,2]
  Output: 1         */

var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0; // To store the maximum diameter

  function depth(node) {
    if (!node) return 0; // Base case: if node is null, depth is 0

    // Recursively find the depth of left and right subtrees
    let leftDepth = depth(node.left);
    let rightDepth = depth(node.right);

    // Update the maximum diameter (longest path through this node)
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

    // Return the height of this node
    return 1 + Math.max(leftDepth, rightDepth);
  }

  depth(root); // Start DFS traversal from the root
  return maxDiameter; // Return the maximum diameter found
};
