/* Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of
the nodes you can see ordered from top to bottom.

Example 1:
    Input: root = [1,2,3,null,5,null,4]
    Output: [1,3,4]

Example 2:
    Input: root = [1,2,3,4,null,null,null,5]
    Output: [1,3,4,5]

Example 3:
    Input: root = [1,null,3]
    Output: [1,3]

Example 4:
    Input: root = []
    Output: []              */

var rightSideView = function (root) {
  let result = [];
  if (!root) return result;

  // Helper function to perform DFS
  const dfs = (node, depth) => {
    if (!node) return;

    // If visiting a new depth, add the node's value
    if (result.length === depth) {
      result.push(node.val);
    }

    // Recursively traverse right and then left to prioritize right-side nodes
    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  };

  dfs(root, 0); // Start DFS from root at depth 0
  return result;
};
