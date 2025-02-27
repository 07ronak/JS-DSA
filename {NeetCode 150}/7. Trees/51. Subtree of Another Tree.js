/* Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with
the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's 
descendants. The tree tree could also be considered as a subtree of itself.

Example 1:
  Input: root = [3,4,5,1,2], subRoot = [4,1,2]
  Output: true

Example 2:
  Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
  Output: false      */

var isSubtree = function (root, subRoot) {
  if ((!root, !subRoot)) return true;

  if (isSameTree(subRoot, root)) return true;

  if (subRoot && root) {
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  }
  return false;
};

function isSameTree(p, q) {
  if (!p && !q) return true;

  if (p && q && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  } else {
    return false;
  }
}
