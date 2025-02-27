/* Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary 
tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Example 1:
    Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
    Output: [3,9,20,null,null,15,7]

Example 2:
    Input: preorder = [-1], inorder = [-1]
    Output: [-1]        */

var buildTree = function (preorder, inorder) {
  let preIdx = 0,
    inIdx = 0;

  function dfs(limit) {
    if (preIdx >= preorder.length) return null;
    if (inorder[inIdx] === limit) {
      inIdx++;
      return null;
    }

    let root = new TreeNode(preorder[preIdx++]);
    root.left = dfs(root.val);
    root.right = dfs(limit);
    return root;
  }
  return dfs(Infinity);
};
