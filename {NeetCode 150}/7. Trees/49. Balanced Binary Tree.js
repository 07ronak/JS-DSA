/* Given a binary tree, determine if it is height-balanced.

Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: true

Example 2:
    Input: root = [1,2,2,3,3,null,null,4,4]
    Output: false

Example 3:
    Input: root = []
    Output: true             */

var isBalanced = function (root) {
  return dfs(root)[0] === 1;
};

function dfs(root) {
  if (!root) {
    return [1, 0];
  }

  let left = dfs(root.left);
  let right = dfs(root.right);

  let balanced =
    left[0] === 1 && right[0] === 1 && Math.abs(left[1] - right[1]) <= 1;

  const height = 1 + Math.max(left[1], right[1]);

  return [balanced ? 1 : 0, height];
}
