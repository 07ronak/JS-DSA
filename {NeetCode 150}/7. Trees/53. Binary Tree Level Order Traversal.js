/* Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
  Input: root = [3,9,20,null,null,15,7]
  Output: [[3],[9,20],[15,7]]

Example 2:
  Input: root = [1]
  Output: [[1]]

Example 3:
  Input: root = []
  Output: []        */

var levelOrder = function (root) {
  let result = [];
  if (!root) return result;

  const q = new Queue();
  q.push(root);

  while (!q.isEmpty()) {
    let level = [];

    for (let i = q.size(); i > 0; i--) {
      let node = q.pop();
      if (node) {
        level.push(node.val);
        q.push(node.left);
        q.push(node.right);
      }
    }
    if (level.length > 0) {
      result.push(level);
    }
  }

  return result;
};
